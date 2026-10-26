'use strict';
const {chromium}=require('playwright-core');
const assert=require('node:assert/strict'),fs=require('node:fs');
const base=process.env.LAB_URL;
if(!base||!base.startsWith('https://')||!base.endsWith('/'))throw Error('LAB_URL must be an HTTPS site root ending in /');
let browser;
(async()=>{
 browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const rows=[];
 for(const viewport of [{width:320,height:568},{width:390,height:844},{width:844,height:390}]){
  const context=await browser.newContext({viewport,isMobile:true,hasTouch:true,deviceScaleFactor:1});
  await context.addInitScript(()=>{
   window.__labTouchCount=0;window.__labAccess=[];
   addEventListener('pointerdown',e=>{if(e.pointerType==='touch')window.__labTouchCount++;},true);
   for(const key of ['localStorage','sessionStorage','indexedDB','caches'])Object.defineProperty(window,key,{get(){window.__labAccess.push(key);throw Error('Forbidden API '+key);}});
   Object.defineProperty(navigator,'serviceWorker',{get(){window.__labAccess.push('serviceWorker');throw Error('Forbidden serviceWorker');}});
  });
  const page=await context.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const tap=async action=>page.locator(`[data-action="${action}"]`).first().tap();
  for(const v of ['a','b','c']){
   const response=await page.goto(base+v+'/');assert.equal(response.status(),200);
   await tap('new');
   if(v!=='c')await tap('pack:general');
   if(v==='b')await tap('step:3');
   if(v==='c')await tap('edit:modes');
   const mode=page.locator('[data-action="toggle:modes:talk"]');
   assert.equal(await mode.getAttribute('aria-pressed'),'true');await mode.tap();assert.equal(await mode.getAttribute('aria-pressed'),'false');await mode.tap();
   await tap('rules');await tap('toggle:songLanguages:en');
   assert.equal(await page.locator('[data-action="toggle:songLanguages:en"]').getAttribute('aria-pressed'),'true');
   await page.goBack();await page.waitForSelector('[data-action="rules"]');
   if(v==='b')await tap('step:4');
   await tap('start');await page.waitForSelector('.stable-round');await tap('reveal');
   assert.equal(await page.locator('.challenge-card').getAttribute('aria-pressed'),'true');
   await tap('back');await page.waitForSelector('.lab-header');
   const count=await page.evaluate(()=>window.__labTouchCount);assert(count>=9);
   assert.deepEqual(await page.evaluate(()=>window.__labAccess),[]);assert.deepEqual(errors,[]);
   rows.push({variant:v,viewport,status:response.status(),touchEvents:count,pass:true});
  }
  await context.close();
 }
 fs.mkdirSync('test-results',{recursive:true});fs.writeFileSync('test-results/public-touch.json',JSON.stringify({base,rows},null,2));
 console.log('PASS: 9 public touch scenarios; HTTP 200, real touch events, history Back, mode/language changes and demo transition; no storage or service worker access.');
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{await browser?.close();});
