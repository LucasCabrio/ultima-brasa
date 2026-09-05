export const ZONES=[
 {name:'Refúgio de Valverde',sub:'O ÚLTIMO LUGAR ACESO',color:'#284637',floor:'#2d4938',accent:'#e4b464',boss:null},
 {name:'Bosque dos Sussurros',sub:'ATO I · AS RAÍZES DA NÉVOA',color:'#183e33',floor:'#244837',accent:'#96c89c',boss:'O Cervo de Espinhos'},
 {name:'Pântano das Lanternas',sub:'ATO II · A MEMÓRIA SUBMERSA',color:'#173c40',floor:'#244649',accent:'#81d6cf',boss:'A Viúva do Brejo'},
 {name:'Forja do Sol Partido',sub:'ATO III · O FOGO QUE RESTOU',color:'#3b302b',floor:'#493b30',accent:'#efad69',boss:'O Colosso de Escória'},
 {name:'Cidadela do Silêncio',sub:'ATO IV · O CORAÇÃO DA NOITE',color:'#2b3043',floor:'#363a48',accent:'#c8a3e3',boss:'Aurel, o Rei Oco'}
];
export const ITEMS={
 sword0:{name:'Espada de viajante',slot:'weapon',power:0,icon:'⚔',text:'A lâmina que atravessou o vale com você.'},
 sword1:{name:'Lâmina de espinheiro',slot:'weapon',power:9,icon:'⚔',text:'+9 de ataque. Recompensa do primeiro farol.'},
 sword2:{name:'Sabre da maré',slot:'weapon',power:17,icon:'⚔',text:'+17 de ataque. Aço temperado nas águas antigas.'},
 sword3:{name:'Aurora',slot:'weapon',power:27,icon:'⚔',text:'+27 de ataque. Forjada com a última luz do sol.'},
 armor0:{name:'Manto de viajante',slot:'armor',power:0,icon:'♜',text:'Um manto gasto, mas cheio de histórias.'},
 armor1:{name:'Colete de guarda',slot:'armor',power:4,icon:'♜',text:'+4 de defesa. Feito por Bento.'},
 armor2:{name:'Cota do faroleiro',slot:'armor',power:8,icon:'♜',text:'+8 de defesa. Proteção dos antigos guardiões.'},
 armor3:{name:'Armadura solar',slot:'armor',power:13,icon:'♜',text:'+13 de defesa. O calor de um dia que não acabou.'},
 charm1:{name:'Âmbar de Valverde',slot:'charm',power:30,icon:'◆',text:'+30 de vida máxima. Presente de Iara.'},
 charm2:{name:'Coração da aurora',slot:'charm',power:60,icon:'◆',text:'+60 de vida máxima. Escondido na cidadela.'}
};
export const ENEMIES={
 slime:{name:'Musgo vivo',hp:58,speed:60,damage:11,xp:15,color:'#8bba75',radius:16,type:'melee'},
 wolf:{name:'Lobo de névoa',hp:77,speed:115,damage:15,xp:22,color:'#a9bbb8',radius:18,type:'charge'},
 archer:{name:'Sentinela perdida',hp:65,speed:55,damage:12,xp:22,color:'#c8bc8a',radius:15,type:'ranged'},
 wisp:{name:'Luz errante',hp:60,speed:80,damage:14,xp:24,color:'#8de3d0',radius:13,type:'ranged'},
 spider:{name:'Tecelã do brejo',hp:90,speed:100,damage:17,xp:25,color:'#92a6c9',radius:18,type:'charge'},
 brute:{name:'Guardião caído',hp:150,speed:52,damage:25,xp:35,color:'#a28e9a',radius:23,type:'heavy'},
 imp:{name:'Faísca faminta',hp:93,speed:88,damage:20,xp:28,color:'#ef9b63',radius:16,type:'ranged'},
 knight:{name:'Cavaleiro oco',hp:160,speed:70,damage:27,xp:40,color:'#b2a1cb',radius:21,type:'heavy'}
};
export const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
export function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
export function makeZone(id){
 const rand=rng(7881+id*938),w=3200,h=2400;
 const z={id,w,h,objects:[],enemies:[],decor:[],paths:[],shrine:null};
 const obj=(kind,x,y,extra={})=>z.objects.push({id:`${id}-${kind}-${z.objects.length}`,kind,x,y,...extra});
 if(id===0){
  obj('fire',1500,1320,{name:'Fogueira de Valverde'});
  obj('npc',1360,1180,{name:'Iara',role:'A guardiã',npc:'iara'});obj('npc',1730,1230,{name:'Bento',role:'Ferreiro',npc:'bento'});obj('npc',1350,1530,{name:'Nilo',role:'Cartógrafo',npc:'nilo'});
  obj('house',1190,1010,{style:0});obj('house',1870,1060,{style:1});obj('house',1090,1590,{style:2});
  obj('gate',1500,450,{to:1,name:'Bosque dos Sussurros',requires:0});obj('gate',2650,1180,{to:2,name:'Pântano das Lanternas',requires:1});obj('gate',1500,2050,{to:3,name:'Forja do Sol Partido',requires:2});obj('gate',430,1200,{to:4,name:'Cidadela do Silêncio',requires:3});
  obj('dummy',1720,1550,{name:'Boneco de treino'});obj('chest',2060,1510,{loot:'armor1',gold:30});obj('lore',920,1220,{name:'A inscrição do refúgio',text:'Quatro faroleiros guardavam o vale. Quando o rei tentou encerrar a morte, também apagou o amanhecer. Restou uma brasa — e alguém disposto a levá-la.'});
  z.paths=[[430,1200,2650,1180],[1500,450,1500,2050],[1150,1500,2000,1500],[1360,1050,1900,1100]];
 }else{
  obj('gate',320,1200,{to:0,name:'Voltar a Valverde',requires:0});obj('fire',550,1200,{name:'Acampamento da travessia'});
  if(id<4){
   obj('shrine',950,570,{name:['Raiz do Norte','Lanterna do Norte','Cadinho do Norte'][id-1],index:0});
   obj('shrine',2500,640,{name:['Raiz do Leste','Lanterna do Leste','Cadinho do Leste'][id-1],index:1});
   obj('shrine',2510,1820,{name:['Raiz do Sul','Lanterna do Sul','Cadinho do Sul'][id-1],index:2});
   obj('boss',1470,1890,{name:ZONES[id].boss});obj('fire',1470,1540,{name:'Vigília do faroleiro'});
  }else{
   obj('shrine',1200,620,{name:'Memória da vida',index:0});obj('shrine',2450,1200,{name:'Memória da perda',index:1});obj('shrine',1250,1810,{name:'Memória da escolha',index:2});
   obj('boss',1910,1200,{name:ZONES[id].boss});obj('fire',1570,1200,{name:'O último descanso'});
  }
  obj('chest',780,1860,{gold:65+id*20,loot:id===2?'armor2':id===3?'armor3':null});
  obj('chest',2770,1070,{gold:50+id*15,loot:id===4?'charm2':null});obj('chest',1730,380,{gold:80+id*20});
  const pages=[['A floresta recorda','O cervo não nasceu monstro. Ele guardou a primeira chama por séculos. A névoa torceu seus galhos, mas a luz ainda pulsa por dentro.'],['As vozes sob a água','A viúva acendia lanternas para os que não voltavam. Aurel prometeu devolvê-los. Nas águas escuras, ela ainda espera.'],['O preço do sol','Os ferreiros partiram o sol em quatro chamas para iluminar o vale. O rei quis reuni-las para trazer sua filha de volta. Nenhuma forja devolve o que já viveu.'],['Carta de Aurel','Se alguém chegar até aqui: eu confundi amor com posse. Não salve meu trono. Salve o amanhã. — Aurel']];
  obj('lore',1840,890,{name:pages[id-1][0],text:pages[id-1][1]});obj('herb',1030,1520);obj('herb',2270,450);obj('herb',2770,1900);
  z.paths=[[320,1200,1500,1200],[850,570,2600,570],[2500,570,2500,1840],[900,570,900,1840],[900,1840,2500,1840],[1470,1200,1470,1890],[1500,1200,2600,1200]];
  const types=id===1?['slime','wolf','archer']:id===2?['spider','wisp','brute']:id===3?['imp','brute','archer']:['knight','wisp','imp'];
  for(let i=0;i<26;i++){let x=750+rand()*2000,y=350+rand()*1750;if(z.objects.some(o=>dist({x,y},o)<210))continue;z.enemies.push(makeEnemy(types[i%types.length],x,y,id,`${id}-wild-${i}`));}
 }
 const road=(x,y)=>z.paths.some(([ax,ay,bx,by])=>pointSeg(x,y,ax,ay,bx,by)<100);
 for(let i=0;i<740;i++){
  let x=100+rand()*(w-200),y=100+rand()*(h-200);
  if(road(x,y)||z.objects.some(o=>dist(o,{x,y})<160)||z.enemies.some(e=>dist(e,{x,y})<65))continue;
  let type=rand()<.68?'tree':'rock';if(id===3)type=rand()<.5?'rock':'pillar';if(id===4)type=rand()<.7?'pillar':'tree';
  z.decor.push({x,y,type,s:0.75+rand()*.7,variant:Math.floor(rand()*4),solid:true,radius:type==='tree'?22:24});
 }
 for(let i=0;i<900;i++)z.decor.push({x:rand()*w,y:rand()*h,type:'grass',s:rand(),variant:Math.floor(rand()*4),solid:false});
 return z;
}
export function pointSeg(x,y,ax,ay,bx,by){let dx=bx-ax,dy=by-ay,t=clamp(((x-ax)*dx+(y-ay)*dy)/(dx*dx+dy*dy||1),0,1);return Math.hypot(x-ax-t*dx,y-ay-t*dy);}
export function makeEnemy(kind,x,y,zone,id){const b=ENEMIES[kind],scale=1+(zone-1)*.24;return{...b,kind,x,y,homeX:x,homeY:y,id,maxHp:Math.round(b.hp*scale),hp:Math.round(b.hp*scale),damage:Math.round(b.damage*scale),cd:.5,wind:0,stun:0,angle:0,flash:0,dead:false,zone};}
export class Game{
 constructor(onEvent=()=>{}){this.event=onEvent;this.reset();}
 reset(){this.p={x:1500,y:1450,hp:150,stamina:100,level:1,xp:0,gold:30,potions:5,angle:-Math.PI/2,weapon:'sword0',armor:'armor0',charm:null,skill:0,points:0};this.zoneId=0;this.flags={intro:false,seals:[],done:[],opened:[],read:[],herbs:[],quests:[],kills:0};this.bag=['sword0','armor0'];this.checkpoint={zone:0,x:1500,y:1450};this.seconds=0;this.difficulty='normal';this.loadZone(0,false);this.paused=true;this.ended=false;this.deaths=0;this.saveTimer=0;}
 get maxHp(){return 150+(this.p.level-1)*18+(ITEMS[this.p.charm]?.power||0);}
 get attackPower(){return 22+(this.p.level-1)*3+(ITEMS[this.p.weapon]?.power||0)+this.p.skill*3;}
 get defense(){return ITEMS[this.p.armor]?.power||0;}
 get xpNeed(){return 65+this.p.level*38;}
 emit(type,data){this.event(type,data);}
 loadZone(id,announce=true){this.zoneId=id;this.zone=makeZone(id);this.enemies=this.zone.enemies.filter(e=>!this.flags.done.includes(e.id));this.projectiles=[];this.effects=[];this.hazards=[];this.attackCD=0;this.dashCD=0;this.spellCD=0;this.swing=0;this.invuln=0;this.dash=0;this.combo=0;this.ritual=null;this.boss=null;this.shake=0;this.near=null;if(announce)this.emit('region',ZONES[id]);}
 start(difficulty='normal'){this.reset();this.difficulty=difficulty;this.paused=false;this.emit('intro');this.save();}
 transition(id){this.save();this.loadZone(id);this.p.x=id===0?1500:490;this.p.y=id===0?1450:1200;this.save();}
 snapshot(){return{version:1,p:this.p,zoneId:this.zoneId,flags:this.flags,bag:this.bag,checkpoint:this.checkpoint,seconds:this.seconds,difficulty:this.difficulty,ended:this.ended,deaths:this.deaths};}
 restore(data){if(!data||data.version!==1||!data.p||!data.flags||!Array.isArray(data.bag))return false;this.p={...data.p};this.flags=JSON.parse(JSON.stringify(data.flags));this.bag=[...data.bag];this.checkpoint={...data.checkpoint};this.seconds=data.seconds||0;this.difficulty=data.difficulty||'normal';this.ended=!!data.ended;this.deaths=data.deaths||0;this.loadZone(clamp(data.zoneId,0,4));this.p.hp=clamp(this.p.hp,1,this.maxHp);this.paused=false;return true;}
 save(){this.emit('save',this.snapshot());}
 blocked(x,y,r=13){if(x<70||y<90||x>this.zone.w-70||y>this.zone.h-70)return true;for(const o of this.zone.decor){if(o.solid&&Math.abs(x-o.x)<60&&Math.abs(y-o.y)<60&&Math.hypot(x-o.x,y-o.y)<r+o.radius*o.s)return true;}for(const o of this.zone.objects){if(o.kind==='house'&&x>o.x-78-r&&x<o.x+78+r&&y>o.y-42-r&&y<o.y+36+r)return true;}return false;}
 move(e,dx,dy){if(!this.blocked(e.x+dx,e.y,e.radius||13))e.x+=dx;if(!this.blocked(e.x,e.y+dy,e.radius||13))e.y+=dy;}
 target(){let nearest=null,d=410;for(const e of this.enemies){const n=dist(e,this.p);if(!e.dead&&n<d){d=n;nearest=e;}}return nearest;}
 attack(){if(this.paused||this.attackCD>0||this.dash>0)return false;if(this.p.stamina<9){this.emit('toast','Sem fôlego. Aguarde um instante.');return false;}this.p.stamina-=9;this.combo=(this.combo+1)%3;this.attackCD=this.combo===0?.53:.34;this.swing=.22;this.invuln=Math.max(this.invuln,.07);let damage=this.attackPower*(this.combo===0?1.55:1);let hits=0;
  for(const e of this.enemies){if(e.dead||dist(e,this.p)>88+e.radius)continue;let a=Math.atan2(e.y-this.p.y,e.x-this.p.x)-this.p.angle;a=Math.atan2(Math.sin(a),Math.cos(a));if(Math.abs(a)<1.35){this.hitEnemy(e,damage);hits++;}}
  for(const o of this.zone.objects){if(o.kind==='dummy'&&dist(o,this.p)<100){this.effect(o.x,o.y-50,Math.round(damage),'#f5d595');hits++;}}
  this.emit('sound',hits?'hit':'swing');return true;
 }
 dodge(input={}){if(this.paused||this.dashCD>0||this.p.stamina<25)return false;let x=input.x||0,y=input.y||0;if(x||y)this.p.angle=Math.atan2(y,x);this.p.stamina-=25;this.dash=.19;this.invuln=.32;this.dashCD=.7;this.emit('sound','dash');return true;}
 spell(){if(this.paused||this.spellCD>0||this.p.stamina<30)return false;this.p.stamina-=30;this.spellCD=4.5;this.emit('sound','spell');const target=this.target();let a=target?Math.atan2(target.y-this.p.y,target.x-this.p.x):this.p.angle;for(let offset of(this.flags.seals.length>=2?[-.19,0,.19]:[0]))this.projectiles.push({x:this.p.x,y:this.p.y,vx:Math.cos(a+offset)*510,vy:Math.sin(a+offset)*510,life:1.1,friendly:true,damage:this.attackPower*2.1,r:10});return true;}
 heal(){if(this.paused||this.p.potions<=0||this.p.hp>=this.maxHp)return false;this.p.potions--;this.p.hp=clamp(this.p.hp+this.maxHp*.55,0,this.maxHp);this.effect(this.p.x,this.p.y-40,'+ VIDA','#a8ec99');this.emit('sound','heal');this.save();return true;}
 hitEnemy(e,n){if(e.dead)return;e.hp-=Math.round(n);e.flash=.16;e.stun=e.boss?.06:.2;this.effect(e.x,e.y-e.radius-15,Math.round(n),n>this.attackPower*1.3?'#ffe4a0':'#ecdfb7');this.shake=.07;if(!e.boss){let a=Math.atan2(e.y-this.p.y,e.x-this.p.x);this.move(e,Math.cos(a)*12,Math.sin(a)*12);}if(e.hp<=0)this.kill(e);}
 kill(e){if(e.dead)return;e.dead=true;this.flags.kills++;if(!e.ritual&&!e.summon&&!e.boss&&!this.flags.done.includes(e.id))this.flags.done.push(e.id);this.p.gold+=e.boss?120*this.zoneId:5+this.zoneId*2;this.addXP(e.boss?160+this.zoneId*90:e.xp);for(let i=0;i<10;i++)this.effects.push({x:e.x,y:e.y,life:.5,full:.5,vx:Math.cos(i*2.4)*70,vy:Math.sin(i*2.4)*70,particle:true,color:e.color});if(this.flags.kills%7===0&&!e.summon){this.p.potions++;this.emit('toast','Poção encontrada');}if(e.boss){const id=this.zoneId;if(!this.flags.seals.includes(id))this.flags.seals.push(id);this.hazards=[];this.projectiles=[];this.enemies.forEach(a=>{if(a.summon)a.dead=true;});if(id<4){this.give(`sword${id}`);this.p.weapon=`sword${id}`;this.p.hp=this.maxHp;this.p.potions+=3;this.emit('bossWon',{id,name:e.name});}else{this.ended=true;this.emit('ending');}this.save();}}
 addXP(n){this.p.xp+=n;while(this.p.xp>=this.xpNeed){this.p.xp-=this.xpNeed;this.p.level++;this.p.points++;this.p.hp=this.maxHp;this.p.stamina=100;this.emit('toast',`Nível ${this.p.level}! +1 ponto de talento · vida restaurada`);this.emit('sound','level');}}
 hurt(n){if(this.invuln>0||this.paused)return false;const factor=this.difficulty==='story'?.65:this.difficulty==='hard'?1.3:1;let damage=Math.max(2,Math.round((n-this.defense)*factor));this.p.hp-=damage;this.invuln=.65;this.shake=.18;this.effect(this.p.x,this.p.y-50,`−${damage}`,'#ff9581');this.emit('sound','hurt');if(this.p.hp<=0){this.p.hp=0;this.paused=true;this.deaths++;this.emit('death');}return true;}
 respawn(){const gold=Math.ceil(this.p.gold*.1);this.p.gold-=gold;const c=this.checkpoint;this.loadZone(c.zone);this.p.x=c.x;this.p.y=c.y+45;this.p.hp=this.maxHp;this.p.stamina=100;this.p.potions=Math.max(3,this.p.potions);this.paused=false;this.save();this.emit('toast',`A brasa resiste. ${gold} moedas ficaram na névoa.`);}
 effect(x,y,text,color){this.effects.push({x,y,text:String(text),color,life:.8,full:.8,vy:-35,vx:0});}
 give(id){if(!this.bag.includes(id)){this.bag.push(id);this.emit('toast',`Novo equipamento: ${ITEMS[id].name}`);}}
 equip(id){if(!this.bag.includes(id)||!ITEMS[id])return false;this.p[ITEMS[id].slot]=id;this.p.hp=Math.min(this.p.hp,this.maxHp);this.save();return true;}
 talent(){if(this.p.points<1)return false;this.p.points--;this.p.skill++;this.save();return true;}
 buy(item){const costs={potion:25,armor1:70,armor2:180,armor3:320};let cost=costs[item];if(!cost||this.p.gold<cost||item!=='potion'&&this.bag.includes(item))return false;this.p.gold-=cost;if(item==='potion')this.p.potions++;else this.give(item);this.save();return true;}
 ritualDone(o){return this.flags.done.includes(o.id);}
 availableBoss(){return this.zone.objects.filter(o=>o.kind==='shrine').every(o=>this.ritualDone(o));}
 nearest(){let d=115,near=null;for(const o of this.zone.objects){if(['house','dummy'].includes(o.kind))continue;if(['chest','herb'].includes(o.kind)&&this.flags.opened.includes(o.id))continue;let n=dist(o,this.p);if(n<d){d=n;near=o;}}return near;}
 interact(){if(this.paused)return false;let o=this.nearest();if(!o)return false;
  if(o.kind==='npc'){this.emit('npc',o);return true;}
  if(o.kind==='gate'){if(this.flags.seals.filter(n=>n<4).length<o.requires){this.emit('toast',`Caminho selado. Reacenda ${o.requires} ${o.requires===1?'farol':'faróis'} antes de partir.`);return false;}if(this.ritual||this.boss&&!this.boss.dead){this.emit('toast','Conclua o confronto antes de atravessar.');return false;}this.transition(o.to);return true;}
  if(o.kind==='fire'){if(this.enemies.some(e=>!e.dead&&dist(e,this.p)<350)||this.ritual||this.boss&&!this.boss.dead){this.emit('toast','Há perigo por perto. Afaste ou derrote os inimigos.');return false;}this.checkpoint={zone:this.zoneId,x:o.x,y:o.y};this.p.hp=this.maxHp;this.p.stamina=100;this.p.potions=Math.max(this.p.potions,4);this.save();this.emit('rest',o);this.emit('sound','heal');return true;}
  if(o.kind==='chest'){this.flags.opened.push(o.id);this.p.gold+=o.gold;this.p.potions+=2;if(o.loot)this.give(o.loot);this.emit('toast',`Baú: +${o.gold} moedas · +2 poções`);this.emit('sound','level');this.save();return true;}
  if(o.kind==='herb'){this.flags.opened.push(o.id);this.flags.herbs.push(o.id);this.p.potions++;this.emit('toast','Erva-lume coletada · +1 poção');this.save();return true;}
  if(o.kind==='lore'){if(!this.flags.read.includes(o.id)){this.flags.read.push(o.id);this.addXP(40);}this.emit('lore',o);this.save();return true;}
  if(o.kind==='shrine'){if(this.ritualDone(o)){this.emit('toast','Esta chama já está acesa.');return false;}if(this.ritual){this.emit('toast','Conclua o ritual em andamento.');return false;}if(this.flags.seals.includes(this.zoneId))return false;this.ritual={object:o,wave:0,timer:.5};this.emit('toast','Ritual iniciado. Defenda a chama por três ondas!');this.spawnWave();return true;}
  if(o.kind==='boss'){if(this.flags.seals.includes(this.zoneId)){this.emit('toast','O farol voltou a iluminar o vale.');return false;}if(!this.availableBoss()){this.emit('toast','Reacenda os três santuários desta região primeiro.');return false;}if(this.boss&&!this.boss.dead)return false;this.startBoss(o);return true;}
  return false;
 }
 spawnWave(){const r=this.ritual;if(!r)return;r.wave++;r.timer=4;const types=this.zoneId===1?['slime','wolf','archer']:this.zoneId===2?['spider','wisp','brute']:this.zoneId===3?['imp','brute','archer']:['knight','wisp','imp'];const count=4+r.wave;for(let i=0;i<count;i++){let a=i/count*Math.PI*2+.7*r.wave,x=r.object.x+Math.cos(a)*240,y=r.object.y+Math.sin(a)*210;let e=makeEnemy(types[(i+r.wave)%3],x,y,this.zoneId,`wave-${r.object.id}-${r.wave}-${i}`);e.ritual=true;if(this.blocked(x,y,e.radius)){e.x=r.object.x+Math.cos(a)*145;e.y=r.object.y+Math.sin(a)*125;}this.enemies.push(e);}this.emit('toast',`Onda ${r.wave}/3 · ${r.object.name}`);}
 startBoss(o){const id=this.zoneId;this.boss={id:`boss-${id}`,name:o.name,x:o.x,y:o.y,homeX:o.x,homeY:o.y,hp:[0,1250,1900,2600,3800][id],maxHp:[0,1250,1900,2600,3800][id],speed:40+id*4,damage:26+id*6,radius:id===1?46:id===2?42:48,color:ZONES[id].accent,kind:`boss${id}`,boss:true,cd:1.4,wind:0,stun:0,flash:0,phase:1,pattern:0,dead:false,angle:0};this.enemies.push(this.boss);this.emit('bossStart',this.boss);this.emit('sound','boss');}
 bossThink(e,dt){let phase=e.hp/e.maxHp<.32?3:e.hp/e.maxHp<.65?2:1;if(phase>e.phase){e.phase=phase;this.emit('toast',`${e.name} · Fase ${phase}`);for(let i=0;i<phase;i++){let a=i*Math.PI*2/phase,m=makeEnemy(this.zoneId===1?'wolf':this.zoneId===2?'spider':this.zoneId===3?'imp':'knight',e.x+Math.cos(a)*110,e.y+Math.sin(a)*110,this.zoneId,`summon-${this.seconds}-${i}`);m.summon=true;this.enemies.push(m);}}
  const d=dist(e,this.p),a=Math.atan2(this.p.y-e.y,this.p.x-e.x);e.angle=a;
  if(e.bossCharge>0){e.bossCharge-=dt;this.move(e,Math.cos(e.chargeAim)*420*dt,Math.sin(e.chargeAim)*420*dt);if(d<e.radius+20)this.hurt(e.damage);return;}
  if(e.bossWind>0){e.bossWind-=dt;if(e.bossWind<=0)e.bossCharge=.65;return;}
  if(e.cd<=0){e.cd=3.7-e.phase*.35;e.pattern++;const pattern=e.pattern%3,id=this.zoneId;
   if(id===1&&pattern===0){e.chargeAim=a;e.bossWind=1;this.emit('toast','O cervo prepara uma investida!');}
   else if(pattern===0){const count=id===2?3+e.phase:4+e.phase;for(let i=0;i<count;i++){const an=i*Math.PI*2/count;this.hazards.push({x:this.p.x+Math.cos(an)*(id===2?100:70),y:this.p.y+Math.sin(an)*(id===2?100:70),r:id===2?82:65,life:id===2?1.6:1.15,damage:e.damage,kind:id===2?'poison':'blast'});}}
   else if(pattern===1){if(id===3){for(let i=1;i<=5;i++)this.hazards.push({x:e.x+Math.cos(a)*i*83,y:e.y+Math.sin(a)*i*83,r:63,life:.75+i*.18,damage:e.damage+8,kind:'blast'});}else this.hazards.push({x:e.x,y:e.y,r:id===1?165:id===2?210:230,life:1.15,damage:e.damage+8,kind:'ring'});}
   else {const count=id===1?7:id===2?10:id===3?5:10+e.phase*4;for(let i=0;i<count;i++){let an=id===3?a+(i-2)*.28:i*Math.PI*2/count;this.projectiles.push({x:e.x,y:e.y,vx:Math.cos(an)*(id===3?235:145+e.phase*20),vy:Math.sin(an)*(id===3?235:145+e.phase*20),life:3,damage:e.damage*.7,r:id===3?13:9,friendly:false});}}
  }
  if(d>100&&d<800)this.move(e,Math.cos(a)*e.speed*dt,Math.sin(a)*e.speed*dt);if(d<e.radius+18)this.hurt(e.damage*.65);
 }
 update(dt,input={}){if(this.paused)return;dt=Math.min(dt,.05);this.seconds+=dt;this.saveTimer+=dt;if(this.saveTimer>12){this.saveTimer=0;this.save();}
  this.attackCD=Math.max(0,this.attackCD-dt);this.dashCD=Math.max(0,this.dashCD-dt);this.spellCD=Math.max(0,this.spellCD-dt);this.swing=Math.max(0,this.swing-dt);this.invuln=Math.max(0,this.invuln-dt);this.shake=Math.max(0,this.shake-dt);this.p.stamina=Math.min(100,this.p.stamina+dt*(this.attackCD>0?5:28));
  let dx=input.x||0,dy=input.y||0,n=Math.hypot(dx,dy);if(n){dx/=n;dy/=n;}if(input.aim!==undefined)this.p.angle=input.aim;else if(n&&!this.swing)this.p.angle=Math.atan2(dy,dx);
  if(this.dash>0){this.dash-=dt;this.move(this.p,Math.cos(this.p.angle)*640*dt,Math.sin(this.p.angle)*640*dt);this.effects.push({x:this.p.x,y:this.p.y,life:.18,full:.18,ghost:true,color:'#d2b376'});}else{this.move(this.p,dx*190*dt,dy*190*dt);}this.moving=n>0;
  if(input.attack){if(input.aim===undefined){let t=this.target();if(t)this.p.angle=Math.atan2(t.y-this.p.y,t.x-this.p.x);}this.attack();}
  for(const e of this.enemies){if(e.dead)continue;e.cd-=dt;e.flash=Math.max(0,e.flash-dt);e.stun=Math.max(0,e.stun-dt);if(e.stun>0)continue;if(e.boss){this.bossThink(e,dt);continue;}
   let d=dist(e,this.p),a=Math.atan2(this.p.y-e.y,this.p.x-e.x);e.angle=a;
   if(e.wind>0){e.wind-=dt;if(e.wind<=0){if(e.type==='ranged'){this.projectiles.push({x:e.x,y:e.y,vx:Math.cos(e.aim)*225,vy:Math.sin(e.aim)*225,life:2.5,damage:e.damage,r:7,friendly:false});}else if(e.type==='charge'){e.charging=.36;}else if(d<e.radius+55)this.hurt(e.damage);}continue;}
   if(e.charging>0){e.charging-=dt;this.move(e,Math.cos(e.aim)*350*dt,Math.sin(e.aim)*350*dt);if(d<e.radius+20)this.hurt(e.damage);continue;}
   if(d<(e.ritual||e.summon?900:440)){
    let reach=e.type==='ranged'?285:e.type==='charge'?180:e.radius+42;
    if(d<reach&&e.cd<=0){e.aim=a;e.wind=e.type==='heavy'?.85:e.type==='ranged'?.65:.48;e.cd=e.type==='ranged'?2.5:e.type==='heavy'?2.3:1.8;}
    else if(d>reach*.7){this.move(e,Math.cos(a)*e.speed*dt,Math.sin(a)*e.speed*dt);}else if(e.type==='ranged'&&d<130)this.move(e,-Math.cos(a)*e.speed*dt,-Math.sin(a)*e.speed*dt);
   }
   // Avoid enemies stacking into an unreadable single target.
   for(const other of this.enemies){if(other===e||other.dead||other.boss)continue;let sep=dist(e,other),r=e.radius+other.radius;if(sep>0&&sep<r*.8){this.move(e,(e.x-other.x)/sep*20*dt,(e.y-other.y)/sep*20*dt);}}
  }
  for(const b of this.projectiles){b.x+=b.vx*dt;b.y+=b.vy*dt;b.life-=dt;if(this.blocked(b.x,b.y,3))b.life=0;if(b.friendly){for(const e of this.enemies){if(!e.dead&&dist(b,e)<e.radius+b.r){this.hitEnemy(e,b.damage);b.life=0;break;}}}else if(dist(b,this.p)<b.r+13){this.hurt(b.damage);b.life=0;}}
  this.projectiles=this.projectiles.filter(b=>b.life>0);
  for(const h of this.hazards){h.life-=dt;if(h.life<=0&&!h.hit){h.hit=true;if(dist(h,this.p)<h.r)this.hurt(h.damage);this.effects.push({...h,blast:true,life:.4,full:.4,color:'#eb8d76'});}}
  this.hazards=this.hazards.filter(h=>h.life>0);
  this.effects.forEach(f=>{f.life-=dt;f.x+=(f.vx||0)*dt;f.y+=(f.vy||0)*dt;});this.effects=this.effects.filter(f=>f.life>0);
  if(this.ritual&&!this.enemies.some(e=>e.ritual&&!e.dead)){this.ritual.timer-=dt;if(this.ritual.timer<=0){if(this.ritual.wave<3)this.spawnWave();else{this.flags.done.push(this.ritual.object.id);this.addXP(100+this.zoneId*20);this.p.potions+=2;this.p.hp=Math.min(this.maxHp,this.p.hp+this.maxHp*.3);this.emit('toast',`${this.ritual.object.name} acesa! +2 poções`);this.ritual=null;this.save();}}}
  this.near=this.nearest();
 }
 questText(){const seals=this.flags.seals.filter(x=>x<4).length;if(this.ended)return['O amanhecer voltou','O vale está livre. Explore o que ficou para trás.'];if(!this.flags.intro)return['Uma luz na escuridão','Fale com Iara no centro de Valverde.'];if(this.zoneId===0){return seals<3?[['A primeira chama','Vozes sob a água','O sol partido'][seals],`Entre em ${ZONES[seals+1].name}. O mapa indica o caminho.`]:['O coração da noite','Entre na Cidadela, a oeste de Valverde.'];}if(this.flags.seals.includes(this.zoneId))return['Farol restaurado','Volte a Valverde pelo portal ou por uma fogueira.'];let done=this.zone.objects.filter(o=>o.kind==='shrine'&&this.ritualDone(o)).length;return done<3?[this.zoneId===4?'As memórias do rei':'Reacenda os santuários',`${done}/3 chamas acesas. ${this.ritual?`Defenda a chama · onda ${this.ritual.wave}/3.`:'Encontre os losangos no mapa e pressione E.'}`]:['Enfrente o guardião',`${ZONES[this.zoneId].boss} aguarda no farol. Pressione E junto a ele.`];}
}
