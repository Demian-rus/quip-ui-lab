const {chromium}=require('playwright-core');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),http=require('node:http');
const root=path.resolve(__dirname,'..'),out=path.join(root,'test-results');fs.mkdirSync(out,{recursive:true});
const MIME={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webp':'image/webp','.png':'image/png','.ttf':'font/ttf'};
const server=http.createServer((req,res)=>{let p=decodeURIComponent(new URL(req.url,'http://lab').pathname).replace(/^\/quip-ui-lab\//,'/');if(p.endsWith('/'))p+='index.html';const file=path.resolve(root,'.'+p);if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}fs.readFile(file,(e,b)=>{res.writeHead(e?404:200,{'Content-Type':MIME[path.extname(file)]||'application/octet-stream'});res.end(e?'Not found':b);});});
const data={viewports:[],scenarios:0,sourceSHA:'507c3d24f270a7d26b1562ffc6837c819a15aa5b'};
let browser;
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=process.env.LAB_URL||`http://127.0.0.1:${server.address().port}/quip-ui-lab/`;
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_BIN||undefined,args:['--no-sandbox']});
 for(const viewport of [{width:320,height:568},{width:390,height:844},{width:844,height:390}]){
  const context=await browser.newContext({viewport,isMobile:true,hasTouch:true,deviceScaleFactor:1});
  await context.addInitScript(()=>{window.__labAccess=[];const block=name=>{window.__labAccess.push(name);throw Error('Forbidden prototype API: '+name);};for(const name of ['localStorage','sessionStorage','indexedDB','caches'])Object.defineProperty(window,name,{get(){return block(name);},configurable:true});Object.defineProperty(navigator,'serviceWorker',{get(){return block('serviceWorker');},configurable:true});navigator.sendBeacon=()=>block('beacon');});
  const page=await context.newPage();const errors=[],bad=[],requests=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});page.on('response',r=>{if(r.status()>=400)bad.push(r.url()+':'+r.status());});page.on('request',r=>requests.push({url:r.url(),type:r.resourceType(),method:r.method()}));
  const action=a=>page.locator(`[data-action="${a}"]`);
  const click=async a=>{await action(a).first().click();};
  const check=async(label)=>{await page.evaluate(async()=>{await document.fonts.ready;await Promise.all(document.getAnimations().filter(a=>a.effect.getTiming().iterations!==Infinity).map(a=>a.finished.catch(()=>{})));});const result=await page.evaluate(()=>{const foreground=document.querySelector('.lab-root')||document.querySelector('.lab-landing');const layer=getComputedStyle(foreground);if(layer.position==='static'||Number(layer.zIndex)<1)throw Error('Content is behind source background');const visible=e=>!!(e.getClientRects().length);const bad=[...document.querySelectorAll('.lab-root button:not(:disabled), .lab-root select, .lab-root summary, .lab-landing a')].filter(visible).map(e=>({text:e.textContent.trim(),r:e.getBoundingClientRect()})).filter(x=>x.r.width<43.9||x.r.height<43.9).map(x=>({text:x.text,width:x.r.width,height:x.r.height}));return {horizontal:document.documentElement.scrollWidth>innerWidth+1,small:bad,focus:document.activeElement?.tagName};});assert.equal(result.horizontal,false,label+' horizontal overflow');assert.deepEqual(result.small,[],label+' small touch targets');data.viewports.push({variant:page.url(),viewport,label,...result});};
  await page.goto(base);await check('landing');assert.equal(await page.locator('.lab-variant-link').count(),3);
  for(const v of ['a','b','c']){
   await page.goto(base+v+'/');await page.waitForSelector('[data-action="new"]');await check(v+' home');await page.screenshot({path:path.join(out,`${v}-${viewport.width}-home.png`)});
   await click('new');if(v!=='c')await click('pack:general');if(v==='b')await click('step:3');if(v==='c')await click('edit:players');
   if(v==='b')await click('step:2');await page.getByLabel('Игрок 1',{exact:true}).selectOption('Женя');await click('set:awardTo:guesser');
   if(v==='b')await click('step:3');if(v==='c'){await click('back');await page.waitForSelector('[data-action="edit:rhythm"]');await click('edit:rhythm');}
   await click('set:difficulty:medium');
   await page.getByLabel('Базовое время',{exact:true}).fill('75');await page.getByLabel('Базовое время',{exact:true}).dispatchEvent('change');
   await click('set:finishType:rounds');await page.getByLabel('Чётное число ходов',{exact:true}).fill('18');await page.getByLabel('Чётное число ходов',{exact:true}).dispatchEvent('change');
   await check(v+' rules changed');assert.equal(await page.getByLabel('Базовое время',{exact:true}).inputValue(),'75');assert.equal(await page.getByLabel('Чётное число ходов',{exact:true}).inputValue(),'18');
   if(v==='c'){await click('back');await page.waitForSelector('[data-action="edit:modes"]');await click('edit:modes');}
   for(const id of ['talk','mime','draw','sing','yesno','secret','blitz','approx']){const a=action('toggle:modes:'+id);if(await a.getAttribute('aria-pressed')==='false')await a.click();await a.click();assert.equal(await a.getAttribute('aria-pressed'),'false');await a.click();assert.equal(await a.getAttribute('aria-pressed'),'true');}
   await check(v+' modes');await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:path.join(out,`${v}-${viewport.width}-setup.png`)});
   await click('rules');await page.waitForFunction(()=>document.activeElement?.id==='view-title');await page.keyboard.press('Tab');assert.equal(await page.locator(':focus').count(),1);assert.notEqual(await page.locator(':focus').evaluate(e=>e.tagName),'BODY');assert.equal(await page.locator('.lab-rule').count(),8);await check(v+' rule center');assert.match(await page.locator('.lab-rule[aria-label="Правила БЛИЦ"]').innerText(),/3 из 3 — 2 базовых/);
   await click('toggle:songLanguages:en');await click('toggle:songLanguages:ru');assert.equal(await action('toggle:songLanguages:en').getAttribute('aria-pressed'),'true');assert.equal(await action('toggle:songLanguages:ru').getAttribute('aria-pressed'),'false');await click('toggle:songLanguages:en');assert.equal(await action('toggle:songLanguages:en').getAttribute('aria-pressed'),'true');
   await click('back');await page.waitForSelector('[data-action="rules"]');await page.waitForFunction(()=>document.activeElement?.dataset.focus==='rules');await page.goForward();await page.waitForSelector('.lab-rule');await page.keyboard.press('Escape');await page.waitForSelector('[data-action="rules"]');
   if(v==='c'){await click('back');await page.waitForSelector('[data-action="edit:extras"]');await click('edit:extras');}else{await page.locator('.lab-more summary').click();}
   const risk=page.locator('[data-field="riskRounds"]');await risk.uncheck();await page.locator('[data-field="complications"]').uncheck();await check(v+' extras');
   if(v==='b')await click('step:4');await click('start');await page.waitForSelector('.stable-round');await check(v+' demo');const card=page.locator('.round-fixed-card');const before=await card.boundingBox();await click('reveal');assert.deepEqual(await card.boundingBox(),before,v+' stable card');await click('reveal');assert.deepEqual(await card.boundingBox(),before);await page.screenshot({path:path.join(out,`${v}-${viewport.width}-demo.png`)});
   await click('back');await page.waitForSelector('.lab-header');
   // Settings persist through forward/back, without storage. Open rules again.
   if(v==='b')await click('step:3');if(v==='c'){await click('back');await page.waitForSelector('[data-action="edit:modes"]');await click('edit:modes');}
   await click('rules');assert.equal(await action('toggle:songLanguages:en').getAttribute('aria-pressed'),'true');assert.equal(await action('toggle:songLanguages:ru').getAttribute('aria-pressed'),'false');await click('back');await page.waitForSelector('[data-action="rules"]');
   // Revisit catalog and a real theme, preserving the compatible choices.
   if(v==='b')await click('step:1');else {if(v==='c'){await click('back');await page.waitForSelector('[data-action="catalog"]');}await click('catalog');}
   await click('themes');assert.equal(await page.locator('[data-action="pack:biology"]').isDisabled(),true);await click('pack:geography');
   if(v==='b')await click('step:3');if(v==='c')await click('edit:modes');
   assert.equal(await action('toggle:modes:sing').isDisabled(),true);assert.equal(await action('toggle:modes:yesno').isDisabled(),false);await check(v+' geography');
   if(v==='b')await click('step:2');if(v==='c'){await click('back');await page.waitForSelector('[data-action="edit:players"]');await click('edit:players');}
   assert.equal(await page.getByLabel('Игрок 1',{exact:true}).inputValue(),'Женя');
   await page.reload();await page.waitForSelector('[data-action="new"]');await click('new');if(v!=='c')await click('pack:general');if(v==='b')await click('step:3');if(v==='c')await click('edit:rhythm');assert.equal(await action('set:difficulty:easy').getAttribute('aria-pressed'),'true');assert.equal(await page.getByLabel('Базовое время',{exact:true}).inputValue(),'60');
   data.scenarios++;assert.deepEqual(await page.evaluate(()=>window.__labAccess),[]);
  }
  assert.deepEqual(errors,[],JSON.stringify(errors));assert.deepEqual(bad,[]);assert.deepEqual(requests.filter(r=>!r.url.startsWith(base)||r.method!=='GET'||['fetch','xhr','websocket'].includes(r.type)),[]);
  await context.close();
 }
 fs.writeFileSync(path.join(out,'measurements.json'),JSON.stringify(data,null,2));console.log(`PASS: ${data.scenarios} full flows, ${data.viewports.length} layout checkpoints; no forbidden APIs, page errors, 404 or external requests.`);
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{await browser?.close();server.close();});
