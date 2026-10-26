import { SOURCE } from './source-data.js';
export const MODE_IDS = SOURCE.modes.map(m => m.id);
export function initialState() {
  return { pack:'general', players:['Алекс','Саша'], awardTo:'setter', difficulty:'easy', duration:60,
    finishType:'score', targetScore:25, rounds:12, riskRounds:true, complications:true,
    modifierChance:20, modes:MODE_IDS.filter(id=>id!=='yesno'), promptTypes:['word','phrase','idiom'], songLanguages:['ru'] };
}
export const getPack = state => SOURCE.packs.find(p=>p.id===state.pack);
export function availability(state,id) {
  if(id==='yesno'&&state.awardTo!=='guesser') return {available:false,reason:'Только когда очки получает отгадывающий'};
  const pack=getPack(state);
  return pack.availability[state.difficulty][state.songLanguages.join(',')][id];
}
export function reconcile(state) {
  state.modes=state.modes.filter(id=>availability(state,id).available);
  state.promptTypes=state.promptTypes.filter(id=>getPack(state).types.includes(id));
  if(!state.promptTypes.length)state.promptTypes=getPack(state).types.filter(id=>['word','phrase','idiom'].includes(id));
}
export function toggle(state,key,value) {
  const list=state[key];
  if(list.includes(value)) {
    if(list.length===1) return 'Оставьте хотя бы один '+({modes:'режим',promptTypes:'тип заданий',songLanguages:'источник слов'}[key])+'.';
    state[key]=list.filter(v=>v!==value);
  } else {
    if(key==='modes'&&!availability(state,value).available)return availability(state,value).reason;
    state[key]=[...list,value];
  }
  if(key==='songLanguages')state.songLanguages=['ru','en'].filter(x=>state.songLanguages.includes(x));
  reconcile(state); return '';
}
export const DIFFICULTY={easy:'Легко',medium:'Средний',hard:'Сложный',mixed:'Микс'};
export const goal=s=>s.finishType==='score'?`${s.targetScore} очков`:`${s.rounds} ходов`;
export const award=s=>s.awardTo==='setter'?'Загадывающему':'Отгадывающему';
export function canStart(s){return s.modes.length>0&&s.players[0]!==s.players[1];}
