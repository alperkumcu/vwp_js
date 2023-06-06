/******************* 
 * Vwp_Online Test *
 *******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'vwp_online';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introductionRoutineBegin());
flowScheduler.add(introductionRoutineEachFrame());
flowScheduler.add(introductionRoutineEnd());
flowScheduler.add(span_insRoutineBegin());
flowScheduler.add(span_insRoutineEachFrame());
flowScheduler.add(span_insRoutineEnd());
const blocks_spanLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocks_spanLoopBegin(blocks_spanLoopScheduler));
flowScheduler.add(blocks_spanLoopScheduler);
flowScheduler.add(blocks_spanLoopEnd);
flowScheduler.add(span_endRoutineBegin());
flowScheduler.add(span_endRoutineEachFrame());
flowScheduler.add(span_endRoutineEnd());
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
flowScheduler.add(training_readyRoutineBegin());
flowScheduler.add(training_readyRoutineEachFrame());
flowScheduler.add(training_readyRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(tr_congratsRoutineBegin());
flowScheduler.add(tr_congratsRoutineEachFrame());
flowScheduler.add(tr_congratsRoutineEnd());
flowScheduler.add(exp_rulesRoutineBegin());
flowScheduler.add(exp_rulesRoutineEachFrame());
flowScheduler.add(exp_rulesRoutineEnd());
flowScheduler.add(you_readyRoutineBegin());
flowScheduler.add(you_readyRoutineEachFrame());
flowScheduler.add(you_readyRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var introductionClock;
var intro_text;
var key_resp_intro;
var span_insClock;
var digit_span_ins;
var key_resp_ins;
var span_taskClock;
var fixation;
var pres_text;
var span_recallClock;
var recall_txt;
var textbox;
var key_resp;
var allResponses;
var feedbackClock;
var feedback_text;
var span_endClock;
var thank_you;
var span_key;
var welcomeClock;
var welcome_text;
var welcome_key;
var instructionClock;
var instruction_text;
var instruction_key;
var training_readyClock;
var text_training_ready;
var key_training_ready;
var training_sesClock;
var image_rect_1;
var image1_t;
var image_rect_2;
var image2_t;
var image_rect_3;
var image3_t;
var image_rect_4;
var image4_t;
var sound_t;
var mouse_t;
var tr_congratsClock;
var text_tr_congrats;
var key_resp_session;
var exp_rulesClock;
var text_rules;
var key_resp_rules;
var you_readyClock;
var text_youready;
var key_resp_ready;
var experimentClock;
var image_rect;
var image1;
var image2_rect;
var image2;
var image3_rect;
var image3;
var image4_rect;
var image4;
var sound1;
var mouse;
var exp_congratsClock;
var text_congrats;
var key_resp_congrats;
var EndClock;
var end_text;
var end_key;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "introduction"
  introductionClock = new util.Clock();
  intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text',
    text: 'Deneyimize Hoş Geldiniz! \n\nBu deney iki aşamadan oluşmaktadır. Her deney ile ilgili bilgi deney öncesinde ekranda sunulacaktır.  \n\nİki deneyin de doğru bir biçimde tamamlanabilmesi için deneyler boyunca BİLGİSAYARINIZI KAPATMAYIN ve DENEY SAYFASINDAN ÇIKMAYINIZ.  \n\nHazırsanız, Boşluk [Space] tuşuna basınız.\n\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_intro = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "span_ins"
  span_insClock = new util.Clock();
  digit_span_ins = new visual.TextStim({
    win: psychoJS.window,
    name: 'digit_span_ins',
    text: 'Birinci Deneyimize Hoş Geldiniz!\n\nBu deneyde sizden ekranda gördüğünüz rakamları aklınızda tutmanız ve daha sonra bu rakamları sırasıyla klavye ile yazmanız istenmektedir.\n\nDeney 3 rakam ile başlamakta ve siz doğru yanıt verdikçe birer rakam artmaktadır. Yazdığınız rakamı silmek isterseniz [Backspace] tuşunu kullanabilirsiniz. Üst üste iki kere yanlış yanıt verdiğinizde test sona erecektir.\n\nRakamları yazdıktan sonra bir sonraki sayı dizisine geçmek için [Boşluk] tuşunu kullanınız.\n\nDeneye başlamak için [Boşluk] tuşuna basabilirsiniz.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_ins = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "span_task"
  span_taskClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  pres_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'pres_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "span_recall"
  span_recallClock = new util.Clock();
  recall_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_txt',
    text: 'Gördüğünüz Rakamları Yazın!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    font: 'Arial',
    pos: [0, 0], letterHeight: 0.1,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from span_code
  allResponses = [];
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "span_end"
  span_endClock = new util.Clock();
  thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you',
    text: 'Birinci deney tamamlanmıştır!\n\nTeşekkür ederiz!\n\nİkinci deneye başlamak için Boşluk [Space] tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  span_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'İkinci Deneyimize Hoş Geldiniz!\n\nDeneye başlamadan önce sessiz bir ortamda olduğunuzdan ve kulaklıklarınızın yanınızda olduğundan emin olunuz.\n\n[Boşluk] tuşuna basarak ilerleyebilirsiniz.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welcome_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text',
    text: 'İkinci deney 4 oturumdan oluşmaktadır ve her oturum yaklaşık 15-20 dakika sürmektedir. Her oturum tamamlandığında size ekranda bilgi verilecektir. Bu sürelerde dinlenebilirsiniz.\n\nİlerlemek için [Boşluk] tuşuna basınız.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training_ready"
  training_readyClock = new util.Clock();
  text_training_ready = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_training_ready',
    text: 'Bu deneyde kulaklıkla cümleler duyacak ve aynı zamanda ekranda resimler göreceksiniz. Sizden istenen duyduğunuz cümle ile en alakalı olduğunu düşündüğünüz resme en kısa sürede mouse ile tıklamanız.\n\nDeneyden önce kısa bir alıştırma yapılacaktır.\n\nAlıştırmaya başlamak için [Boşluk] tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_training_ready = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training_ses"
  training_sesClock = new util.Clock();
  image_rect_1 = new visual.Rect ({
    win: psychoJS.window, name: 'image_rect_1', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  image1_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image1_t', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_rect_2 = new visual.Rect ({
    win: psychoJS.window, name: 'image_rect_2', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  image2_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image2_t', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_rect_3 = new visual.Rect ({
    win: psychoJS.window, name: 'image_rect_3', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  image3_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image3_t', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  image_rect_4 = new visual.Rect ({
    win: psychoJS.window, name: 'image_rect_4', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  image4_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image4_t', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  sound_t = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_t.setVolume(1.0);
  mouse_t = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_t.mouseClock = new util.Clock();
  // Initialize components for Routine "tr_congrats"
  tr_congratsClock = new util.Clock();
  text_tr_congrats = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_tr_congrats',
    text: 'Alıştırma tamamlanmıştır. Teşekkür ederiz!\n\nDeneye başlamadan önce hatırlatma ekranına geçmek için [Boşluk] tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_session = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp_rules"
  exp_rulesClock = new util.Clock();
  text_rules = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_rules',
    text: 'Deney 4 oturumdan oluşmaktadır ve her oturum yaklaşık 15-20 dakika sürmektedir. Her oturum tamamlandığında size ekranda bilgi verilecektir. Bu sürelerde dinlenebilirsiniz. \n\nBu deneyde kulaklıkla cümleler duyacak ve aynı zamanda ekranda resimler göreceksiniz. Sizden istenen duyduğunuz cümle ile en alakalı olduğunu düşündüğünüz resme en kısa sürede mouse ile tıklamanız.\n\nDeneyin  doğru bir biçimde tamamlanabilmesi için deneyler boyunca BİLGİSAYARINIZI KAPATMAYIN ve DENEY SAYFASINDAN ÇIKMAYINIZ.  \n\nHazırsanız, Boşluk [Space] tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 1, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_rules = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "you_ready"
  you_readyClock = new util.Clock();
  text_youready = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_youready',
    text: 'Hazır hissettiğinizde [Boşluk] tuşuna basarak deneye başlayabilirsiniz.\n\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 2, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_ready = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "experiment"
  experimentClock = new util.Clock();
  image_rect = new visual.Rect ({
    win: psychoJS.window, name: 'image_rect', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image2_rect = new visual.Rect ({
    win: psychoJS.window, name: 'image2_rect', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image3_rect = new visual.Rect ({
    win: psychoJS.window, name: 'image3_rect', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  image3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  image4_rect = new visual.Rect ({
    win: psychoJS.window, name: 'image4_rect', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  image4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  sound1 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound1.setVolume(1.0);
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "exp_congrats"
  exp_congratsClock = new util.Clock();
  text_congrats = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_congrats',
    text: 'Bu oturumu tamamladınız!\n\nBir sonraki oturuma başlamadan önce dinlenebilir veya yeni oturuma hemen başlayabilirsiniz.\n\nDevam etmek için [Boşluk] tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 2, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 0,
    depth: 0.0 
  });
  
  key_resp_congrats = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Deney tamamlanmıştır!\n\nKatılımınız için çok teşekkür ederiz :)\n\nDeneyle ilgili sorularınız için selincaliiskan@gmail.com mail adresine yazabilirsiniz.\n\nDeneyden çıkmak için [Boşluk] tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_intro_allKeys;
var introductionComponents;
function introductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'introduction' ---
    t = 0;
    introductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_intro.keys = undefined;
    key_resp_intro.rt = undefined;
    _key_resp_intro_allKeys = [];
    // keep track of which components have finished
    introductionComponents = [];
    introductionComponents.push(intro_text);
    introductionComponents.push(key_resp_intro);
    
    for (const thisComponent of introductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introductionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'introduction' ---
    // get current time
    t = introductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text* updates
    if (t >= 0.0 && intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text.tStart = t;  // (not accounting for frame time here)
      intro_text.frameNStart = frameN;  // exact frame index
      
      intro_text.setAutoDraw(true);
    }

    
    // *key_resp_intro* updates
    if (t >= 0.0 && key_resp_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro.tStart = t;  // (not accounting for frame time here)
      key_resp_intro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.clearEvents(); });
    }

    if (key_resp_intro.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_intro_allKeys = _key_resp_intro_allKeys.concat(theseKeys);
      if (_key_resp_intro_allKeys.length > 0) {
        key_resp_intro.keys = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro.rt = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introductionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introductionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'introduction' ---
    for (const thisComponent of introductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_intro.corr, level);
    }
    psychoJS.experiment.addData('key_resp_intro.keys', key_resp_intro.keys);
    if (typeof key_resp_intro.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_intro.rt', key_resp_intro.rt);
        routineTimer.reset();
        }
    
    key_resp_intro.stop();
    // the Routine "introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_ins_allKeys;
var span_insComponents;
function span_insRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'span_ins' ---
    t = 0;
    span_insClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_ins.keys = undefined;
    key_resp_ins.rt = undefined;
    _key_resp_ins_allKeys = [];
    // keep track of which components have finished
    span_insComponents = [];
    span_insComponents.push(digit_span_ins);
    span_insComponents.push(key_resp_ins);
    
    for (const thisComponent of span_insComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function span_insRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'span_ins' ---
    // get current time
    t = span_insClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *digit_span_ins* updates
    if (t >= 0.0 && digit_span_ins.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      digit_span_ins.tStart = t;  // (not accounting for frame time here)
      digit_span_ins.frameNStart = frameN;  // exact frame index
      
      digit_span_ins.setAutoDraw(true);
    }

    
    // *key_resp_ins* updates
    if (t >= 0.0 && key_resp_ins.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_ins.tStart = t;  // (not accounting for frame time here)
      key_resp_ins.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_ins.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ins.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ins.clearEvents(); });
    }

    if (key_resp_ins.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_ins.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_ins_allKeys = _key_resp_ins_allKeys.concat(theseKeys);
      if (_key_resp_ins_allKeys.length > 0) {
        key_resp_ins.keys = _key_resp_ins_allKeys[_key_resp_ins_allKeys.length - 1].name;  // just the last key pressed
        key_resp_ins.rt = _key_resp_ins_allKeys[_key_resp_ins_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of span_insComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function span_insRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'span_ins' ---
    for (const thisComponent of span_insComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_ins.corr, level);
    }
    psychoJS.experiment.addData('key_resp_ins.keys', key_resp_ins.keys);
    if (typeof key_resp_ins.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_ins.rt', key_resp_ins.rt);
        routineTimer.reset();
        }
    
    key_resp_ins.stop();
    // the Routine "span_ins" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blocks_span;
function blocks_spanLoopBegin(blocks_spanLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks_span = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'choose_digitSpan.xlsx',
      seed: undefined, name: 'blocks_span'
    });
    psychoJS.experiment.addLoop(blocks_span); // add the loop to the experiment
    currentLoop = blocks_span;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlocks_span of blocks_span) {
      snapshot = blocks_span.getSnapshot();
      blocks_spanLoopScheduler.add(importConditions(snapshot));
      const trials_spanLoopScheduler = new Scheduler(psychoJS);
      blocks_spanLoopScheduler.add(trials_spanLoopBegin(trials_spanLoopScheduler, snapshot));
      blocks_spanLoopScheduler.add(trials_spanLoopScheduler);
      blocks_spanLoopScheduler.add(trials_spanLoopEnd);
      blocks_spanLoopScheduler.add(blocks_spanLoopEndIteration(blocks_spanLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_span;
function trials_spanLoopBegin(trials_spanLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_span = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: condition_file,
      seed: undefined, name: 'trials_span'
    });
    psychoJS.experiment.addLoop(trials_span); // add the loop to the experiment
    currentLoop = trials_span;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_span of trials_span) {
      snapshot = trials_span.getSnapshot();
      trials_spanLoopScheduler.add(importConditions(snapshot));
      const digitLoopLoopScheduler = new Scheduler(psychoJS);
      trials_spanLoopScheduler.add(digitLoopLoopBegin(digitLoopLoopScheduler, snapshot));
      trials_spanLoopScheduler.add(digitLoopLoopScheduler);
      trials_spanLoopScheduler.add(digitLoopLoopEnd);
      trials_spanLoopScheduler.add(span_recallRoutineBegin(snapshot));
      trials_spanLoopScheduler.add(span_recallRoutineEachFrame());
      trials_spanLoopScheduler.add(span_recallRoutineEnd(snapshot));
      trials_spanLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trials_spanLoopScheduler.add(feedbackRoutineEachFrame());
      trials_spanLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trials_spanLoopScheduler.add(trials_spanLoopEndIteration(trials_spanLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var digitLoop;
function digitLoopLoopBegin(digitLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    digitLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: digitSpan, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'digitLoop'
    });
    psychoJS.experiment.addLoop(digitLoop); // add the loop to the experiment
    currentLoop = digitLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDigitLoop of digitLoop) {
      snapshot = digitLoop.getSnapshot();
      digitLoopLoopScheduler.add(importConditions(snapshot));
      digitLoopLoopScheduler.add(span_taskRoutineBegin(snapshot));
      digitLoopLoopScheduler.add(span_taskRoutineEachFrame());
      digitLoopLoopScheduler.add(span_taskRoutineEnd(snapshot));
      digitLoopLoopScheduler.add(digitLoopLoopEndIteration(digitLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function digitLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(digitLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function digitLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_spanLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_span);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_spanLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocks_spanLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks_span);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocks_spanLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'training.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(training_sesRoutineBegin(snapshot));
      trialsLoopScheduler.add(training_sesRoutineEachFrame());
      trialsLoopScheduler.add(training_sesRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'blocks.csv',
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      const trials_expLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trials_expLoopBegin(trials_expLoopScheduler, snapshot));
      blocksLoopScheduler.add(trials_expLoopScheduler);
      blocksLoopScheduler.add(trials_expLoopEnd);
      blocksLoopScheduler.add(exp_congratsRoutineBegin(snapshot));
      blocksLoopScheduler.add(exp_congratsRoutineEachFrame());
      blocksLoopScheduler.add(exp_congratsRoutineEnd(snapshot));
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_exp;
function trials_expLoopBegin(trials_expLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_exp = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: CondsFile,
      seed: undefined, name: 'trials_exp'
    });
    psychoJS.experiment.addLoop(trials_exp); // add the loop to the experiment
    currentLoop = trials_exp;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_exp of trials_exp) {
      snapshot = trials_exp.getSnapshot();
      trials_expLoopScheduler.add(importConditions(snapshot));
      trials_expLoopScheduler.add(experimentRoutineBegin(snapshot));
      trials_expLoopScheduler.add(experimentRoutineEachFrame());
      trials_expLoopScheduler.add(experimentRoutineEnd(snapshot));
      trials_expLoopScheduler.add(trials_expLoopEndIteration(trials_expLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_expLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_exp);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_expLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var span_taskComponents;
function span_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'span_task' ---
    t = 0;
    span_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    pres_text.setText(digits.toString()[digitLoop.thisN]);
    // keep track of which components have finished
    span_taskComponents = [];
    span_taskComponents.push(fixation);
    span_taskComponents.push(pres_text);
    
    for (const thisComponent of span_taskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function span_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'span_task' ---
    // get current time
    t = span_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *pres_text* updates
    if (t >= 1 && pres_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pres_text.tStart = t;  // (not accounting for frame time here)
      pres_text.frameNStart = frameN;  // exact frame index
      
      pres_text.setAutoDraw(true);
    }

    frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pres_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pres_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of span_taskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function span_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'span_task' ---
    for (const thisComponent of span_taskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var span_recallComponents;
function span_recallRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'span_recall' ---
    t = 0;
    span_recallClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox.setText('');
    textbox.refresh();
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // this is a temporary fix to allow editable textbox to be used on several trials
    textbox.refresh()
    // keep track of which components have finished
    span_recallComponents = [];
    span_recallComponents.push(recall_txt);
    span_recallComponents.push(textbox);
    span_recallComponents.push(key_resp);
    
    for (const thisComponent of span_recallComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function span_recallRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'span_recall' ---
    // get current time
    t = span_recallClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *recall_txt* updates
    if (t >= 0 && recall_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_txt.tStart = t;  // (not accounting for frame time here)
      recall_txt.frameNStart = frameN;  // exact frame index
      
      recall_txt.setAutoDraw(true);
    }

    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of span_recallComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var correct;
var fbTxt;
function span_recallRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'span_recall' ---
    for (const thisComponent of span_recallComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox.text',textbox.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // Run 'End Routine' code from span_code
    if ((textbox.text === digits.toString())) {
        correct = 1;
        fbTxt = "Correct!";
    } else {
        correct = 0;
        fbTxt = "Incorrect";
    }
    psychoJS.experiment.addData("correct", correct);
    allResponses.push(correct);
    
    // the Routine "span_recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    feedback_text.setText(fbTxt);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from feedback_code
    if (((allResponses.length >= 2) && (util.sum(allResponses.slice((- 2))) === 0))) {
        trials_span.finished = true;
        blocks_span.finished = true;
    } else {
        if ((util.sum(allResponses.slice((- 2))) === 2)) {
            trials_span.finished = true;
            allResponses = [];
        }
    }
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _span_key_allKeys;
var span_endComponents;
function span_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'span_end' ---
    t = 0;
    span_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    span_key.keys = undefined;
    span_key.rt = undefined;
    _span_key_allKeys = [];
    // keep track of which components have finished
    span_endComponents = [];
    span_endComponents.push(thank_you);
    span_endComponents.push(span_key);
    
    for (const thisComponent of span_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function span_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'span_end' ---
    // get current time
    t = span_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thank_you* updates
    if (t >= 0.0 && thank_you.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thank_you.tStart = t;  // (not accounting for frame time here)
      thank_you.frameNStart = frameN;  // exact frame index
      
      thank_you.setAutoDraw(true);
    }

    
    // *span_key* updates
    if (t >= 0.0 && span_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      span_key.tStart = t;  // (not accounting for frame time here)
      span_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { span_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { span_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { span_key.clearEvents(); });
    }

    if (span_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = span_key.getKeys({keyList: ['space'], waitRelease: false});
      _span_key_allKeys = _span_key_allKeys.concat(theseKeys);
      if (_span_key_allKeys.length > 0) {
        span_key.keys = _span_key_allKeys[_span_key_allKeys.length - 1].name;  // just the last key pressed
        span_key.rt = _span_key_allKeys[_span_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of span_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function span_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'span_end' ---
    for (const thisComponent of span_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(span_key.corr, level);
    }
    psychoJS.experiment.addData('span_key.keys', span_key.keys);
    if (typeof span_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('span_key.rt', span_key.rt);
        routineTimer.reset();
        }
    
    span_key.stop();
    // the Routine "span_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _welcome_key_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    welcome_key.keys = undefined;
    welcome_key.rt = undefined;
    _welcome_key_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    welcomeComponents.push(welcome_key);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }

    
    // *welcome_key* updates
    if (t >= 0.0 && welcome_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_key.tStart = t;  // (not accounting for frame time here)
      welcome_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcome_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcome_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcome_key.clearEvents(); });
    }

    if (welcome_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcome_key.getKeys({keyList: ['space'], waitRelease: false});
      _welcome_key_allKeys = _welcome_key_allKeys.concat(theseKeys);
      if (_welcome_key_allKeys.length > 0) {
        welcome_key.keys = _welcome_key_allKeys[_welcome_key_allKeys.length - 1].name;  // just the last key pressed
        welcome_key.rt = _welcome_key_allKeys[_welcome_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(welcome_key.corr, level);
    }
    psychoJS.experiment.addData('welcome_key.keys', welcome_key.keys);
    if (typeof welcome_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welcome_key.rt', welcome_key.rt);
        routineTimer.reset();
        }
    
    welcome_key.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instruction_key_allKeys;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instruction_key.keys = undefined;
    instruction_key.rt = undefined;
    _instruction_key_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instruction_text);
    instructionComponents.push(instruction_key);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text* updates
    if (t >= 0.0 && instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text.tStart = t;  // (not accounting for frame time here)
      instruction_text.frameNStart = frameN;  // exact frame index
      
      instruction_text.setAutoDraw(true);
    }

    
    // *instruction_key* updates
    if (t >= 0.0 && instruction_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_key.tStart = t;  // (not accounting for frame time here)
      instruction_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_key.clearEvents(); });
    }

    if (instruction_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_key.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_key_allKeys = _instruction_key_allKeys.concat(theseKeys);
      if (_instruction_key_allKeys.length > 0) {
        instruction_key.keys = _instruction_key_allKeys[_instruction_key_allKeys.length - 1].name;  // just the last key pressed
        instruction_key.rt = _instruction_key_allKeys[_instruction_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction_key.corr, level);
    }
    psychoJS.experiment.addData('instruction_key.keys', instruction_key.keys);
    if (typeof instruction_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_key.rt', instruction_key.rt);
        routineTimer.reset();
        }
    
    instruction_key.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_training_ready_allKeys;
var training_readyComponents;
function training_readyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_ready' ---
    t = 0;
    training_readyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_training_ready.keys = undefined;
    key_training_ready.rt = undefined;
    _key_training_ready_allKeys = [];
    // keep track of which components have finished
    training_readyComponents = [];
    training_readyComponents.push(text_training_ready);
    training_readyComponents.push(key_training_ready);
    
    for (const thisComponent of training_readyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_readyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_ready' ---
    // get current time
    t = training_readyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_training_ready* updates
    if (t >= 0.0 && text_training_ready.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_training_ready.tStart = t;  // (not accounting for frame time here)
      text_training_ready.frameNStart = frameN;  // exact frame index
      
      text_training_ready.setAutoDraw(true);
    }

    
    // *key_training_ready* updates
    if (t >= 0.0 && key_training_ready.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_training_ready.tStart = t;  // (not accounting for frame time here)
      key_training_ready.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_training_ready.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_training_ready.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_training_ready.clearEvents(); });
    }

    if (key_training_ready.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_training_ready.getKeys({keyList: ['space'], waitRelease: false});
      _key_training_ready_allKeys = _key_training_ready_allKeys.concat(theseKeys);
      if (_key_training_ready_allKeys.length > 0) {
        key_training_ready.keys = _key_training_ready_allKeys[_key_training_ready_allKeys.length - 1].name;  // just the last key pressed
        key_training_ready.rt = _key_training_ready_allKeys[_key_training_ready_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_readyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_readyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_ready' ---
    for (const thisComponent of training_readyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_training_ready.corr, level);
    }
    psychoJS.experiment.addData('key_training_ready.keys', key_training_ready.keys);
    if (typeof key_training_ready.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_training_ready.rt', key_training_ready.rt);
        routineTimer.reset();
        }
    
    key_training_ready.stop();
    // the Routine "training_ready" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gotValidClick;
var training_sesComponents;
function training_sesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_ses' ---
    t = 0;
    training_sesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    image1_t.setImage(topright_image);
    image2_t.setImage(topleft_image);
    image3_t.setImage(bottomright_image);
    image4_t.setImage(bottomleft_image);
    sound_t = new sound.Sound({
    win: psychoJS.window,
    value: audiofile,
    secs: 7.0,
    });
    sound_t.secs=7.0;
    sound_t.setVolume(1.0);
    // setup some python lists for storing info about the mouse_t
    // current position of the mouse:
    mouse_t.x = [];
    mouse_t.y = [];
    mouse_t.leftButton = [];
    mouse_t.midButton = [];
    mouse_t.rightButton = [];
    mouse_t.time = [];
    mouse_t.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    training_sesComponents = [];
    training_sesComponents.push(image_rect_1);
    training_sesComponents.push(image1_t);
    training_sesComponents.push(image_rect_2);
    training_sesComponents.push(image2_t);
    training_sesComponents.push(image_rect_3);
    training_sesComponents.push(image3_t);
    training_sesComponents.push(image_rect_4);
    training_sesComponents.push(image4_t);
    training_sesComponents.push(sound_t);
    training_sesComponents.push(mouse_t);
    
    for (const thisComponent of training_sesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function training_sesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_ses' ---
    // get current time
    t = training_sesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_rect_1* updates
    if (t >= 1.0 && image_rect_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_rect_1.tStart = t;  // (not accounting for frame time here)
      image_rect_1.frameNStart = frameN;  // exact frame index
      
      image_rect_1.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_rect_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_rect_1.setAutoDraw(false);
    }
    
    // *image1_t* updates
    if (t >= 1.0 && image1_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image1_t.tStart = t;  // (not accounting for frame time here)
      image1_t.frameNStart = frameN;  // exact frame index
      
      image1_t.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image1_t.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image1_t.setAutoDraw(false);
    }
    
    // *image_rect_2* updates
    if (t >= 1.0 && image_rect_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_rect_2.tStart = t;  // (not accounting for frame time here)
      image_rect_2.frameNStart = frameN;  // exact frame index
      
      image_rect_2.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_rect_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_rect_2.setAutoDraw(false);
    }
    
    // *image2_t* updates
    if (t >= 1.0 && image2_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image2_t.tStart = t;  // (not accounting for frame time here)
      image2_t.frameNStart = frameN;  // exact frame index
      
      image2_t.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image2_t.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image2_t.setAutoDraw(false);
    }
    
    // *image_rect_3* updates
    if (t >= 1.0 && image_rect_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_rect_3.tStart = t;  // (not accounting for frame time here)
      image_rect_3.frameNStart = frameN;  // exact frame index
      
      image_rect_3.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_rect_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_rect_3.setAutoDraw(false);
    }
    
    // *image3_t* updates
    if (t >= 1.0 && image3_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image3_t.tStart = t;  // (not accounting for frame time here)
      image3_t.frameNStart = frameN;  // exact frame index
      
      image3_t.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image3_t.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image3_t.setAutoDraw(false);
    }
    
    // *image_rect_4* updates
    if (t >= 1.0 && image_rect_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_rect_4.tStart = t;  // (not accounting for frame time here)
      image_rect_4.frameNStart = frameN;  // exact frame index
      
      image_rect_4.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_rect_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_rect_4.setAutoDraw(false);
    }
    
    // *image4_t* updates
    if (t >= 1.0 && image4_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image4_t.tStart = t;  // (not accounting for frame time here)
      image4_t.frameNStart = frameN;  // exact frame index
      
      image4_t.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image4_t.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image4_t.setAutoDraw(false);
    }
    // start/stop sound_t
    if (t >= 1.0 && sound_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_t.tStart = t;  // (not accounting for frame time here)
      sound_t.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_t.play(); });  // screen flip
      sound_t.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_t.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (7.0 > 0.5) {
        sound_t.stop();  // stop the sound (if longer than duration)
      }
      sound_t.status = PsychoJS.Status.FINISHED;
    }
    // *mouse_t* updates
    if (t >= 1.0 && mouse_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_t.tStart = t;  // (not accounting for frame time here)
      mouse_t.frameNStart = frameN;  // exact frame index
      
      mouse_t.status = PsychoJS.Status.STARTED;
      mouse_t.mouseClock.reset();
      prevButtonState = mouse_t.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_t.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_t.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_t.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_t.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image1_t, image2_t, image3_t, image4_t]) {
            if (obj.contains(mouse_t)) {
              gotValidClick = true;
              mouse_t.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_t.getPos();
            mouse_t.x.push(_mouseXYs[0]);
            mouse_t.y.push(_mouseXYs[1]);
            mouse_t.leftButton.push(_mouseButtons[0]);
            mouse_t.midButton.push(_mouseButtons[1]);
            mouse_t.rightButton.push(_mouseButtons[2]);
            mouse_t.time.push(mouse_t.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_sesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_sesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_ses' ---
    for (const thisComponent of training_sesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound_t.stop();  // ensure sound has stopped at end of routine
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_t.x) {  psychoJS.experiment.addData('mouse_t.x', mouse_t.x[0])};
    if (mouse_t.y) {  psychoJS.experiment.addData('mouse_t.y', mouse_t.y[0])};
    if (mouse_t.leftButton) {  psychoJS.experiment.addData('mouse_t.leftButton', mouse_t.leftButton[0])};
    if (mouse_t.midButton) {  psychoJS.experiment.addData('mouse_t.midButton', mouse_t.midButton[0])};
    if (mouse_t.rightButton) {  psychoJS.experiment.addData('mouse_t.rightButton', mouse_t.rightButton[0])};
    if (mouse_t.time) {  psychoJS.experiment.addData('mouse_t.time', mouse_t.time[0])};
    if (mouse_t.clicked_name) {  psychoJS.experiment.addData('mouse_t.clicked_name', mouse_t.clicked_name[0])};
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_session_allKeys;
var tr_congratsComponents;
function tr_congratsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tr_congrats' ---
    t = 0;
    tr_congratsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_session.keys = undefined;
    key_resp_session.rt = undefined;
    _key_resp_session_allKeys = [];
    // keep track of which components have finished
    tr_congratsComponents = [];
    tr_congratsComponents.push(text_tr_congrats);
    tr_congratsComponents.push(key_resp_session);
    
    for (const thisComponent of tr_congratsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function tr_congratsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tr_congrats' ---
    // get current time
    t = tr_congratsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_tr_congrats* updates
    if (t >= 0.0 && text_tr_congrats.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_tr_congrats.tStart = t;  // (not accounting for frame time here)
      text_tr_congrats.frameNStart = frameN;  // exact frame index
      
      text_tr_congrats.setAutoDraw(true);
    }

    
    // *key_resp_session* updates
    if (t >= 0.0 && key_resp_session.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_session.tStart = t;  // (not accounting for frame time here)
      key_resp_session.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_session.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_session.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_session.clearEvents(); });
    }

    if (key_resp_session.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_session.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_session_allKeys = _key_resp_session_allKeys.concat(theseKeys);
      if (_key_resp_session_allKeys.length > 0) {
        key_resp_session.keys = _key_resp_session_allKeys[_key_resp_session_allKeys.length - 1].name;  // just the last key pressed
        key_resp_session.rt = _key_resp_session_allKeys[_key_resp_session_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of tr_congratsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tr_congratsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tr_congrats' ---
    for (const thisComponent of tr_congratsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_session.corr, level);
    }
    psychoJS.experiment.addData('key_resp_session.keys', key_resp_session.keys);
    if (typeof key_resp_session.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_session.rt', key_resp_session.rt);
        routineTimer.reset();
        }
    
    key_resp_session.stop();
    // the Routine "tr_congrats" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_rules_allKeys;
var exp_rulesComponents;
function exp_rulesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_rules' ---
    t = 0;
    exp_rulesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_rules.keys = undefined;
    key_resp_rules.rt = undefined;
    _key_resp_rules_allKeys = [];
    // keep track of which components have finished
    exp_rulesComponents = [];
    exp_rulesComponents.push(text_rules);
    exp_rulesComponents.push(key_resp_rules);
    
    for (const thisComponent of exp_rulesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_rulesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_rules' ---
    // get current time
    t = exp_rulesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_rules* updates
    if (t >= 0.0 && text_rules.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_rules.tStart = t;  // (not accounting for frame time here)
      text_rules.frameNStart = frameN;  // exact frame index
      
      text_rules.setAutoDraw(true);
    }

    
    // *key_resp_rules* updates
    if (t >= 0.0 && key_resp_rules.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_rules.tStart = t;  // (not accounting for frame time here)
      key_resp_rules.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_rules.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_rules.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_rules.clearEvents(); });
    }

    if (key_resp_rules.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_rules.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_rules_allKeys = _key_resp_rules_allKeys.concat(theseKeys);
      if (_key_resp_rules_allKeys.length > 0) {
        key_resp_rules.keys = _key_resp_rules_allKeys[_key_resp_rules_allKeys.length - 1].name;  // just the last key pressed
        key_resp_rules.rt = _key_resp_rules_allKeys[_key_resp_rules_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_rulesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_rulesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_rules' ---
    for (const thisComponent of exp_rulesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_rules.corr, level);
    }
    psychoJS.experiment.addData('key_resp_rules.keys', key_resp_rules.keys);
    if (typeof key_resp_rules.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_rules.rt', key_resp_rules.rt);
        routineTimer.reset();
        }
    
    key_resp_rules.stop();
    // the Routine "exp_rules" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_ready_allKeys;
var you_readyComponents;
function you_readyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'you_ready' ---
    t = 0;
    you_readyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_ready.keys = undefined;
    key_resp_ready.rt = undefined;
    _key_resp_ready_allKeys = [];
    // keep track of which components have finished
    you_readyComponents = [];
    you_readyComponents.push(text_youready);
    you_readyComponents.push(key_resp_ready);
    
    for (const thisComponent of you_readyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function you_readyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'you_ready' ---
    // get current time
    t = you_readyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_youready* updates
    if (t >= 0.0 && text_youready.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_youready.tStart = t;  // (not accounting for frame time here)
      text_youready.frameNStart = frameN;  // exact frame index
      
      text_youready.setAutoDraw(true);
    }

    
    // *key_resp_ready* updates
    if (t >= 0.0 && key_resp_ready.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_ready.tStart = t;  // (not accounting for frame time here)
      key_resp_ready.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_ready.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ready.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ready.clearEvents(); });
    }

    if (key_resp_ready.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_ready.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_ready_allKeys = _key_resp_ready_allKeys.concat(theseKeys);
      if (_key_resp_ready_allKeys.length > 0) {
        key_resp_ready.keys = _key_resp_ready_allKeys[_key_resp_ready_allKeys.length - 1].name;  // just the last key pressed
        key_resp_ready.rt = _key_resp_ready_allKeys[_key_resp_ready_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of you_readyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function you_readyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'you_ready' ---
    for (const thisComponent of you_readyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_ready.corr, level);
    }
    psychoJS.experiment.addData('key_resp_ready.keys', key_resp_ready.keys);
    if (typeof key_resp_ready.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_ready.rt', key_resp_ready.rt);
        routineTimer.reset();
        }
    
    key_resp_ready.stop();
    // the Routine "you_ready" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var experimentComponents;
function experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'experiment' ---
    t = 0;
    experimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    image1.setImage(topright_image);
    image2.setImage(topleft_image);
    image3.setImage(bottomright_image);
    image4.setImage(bottomleft_image);
    sound1 = new sound.Sound({
    win: psychoJS.window,
    value: audiofile,
    secs: 7.0,
    });
    sound1.secs=7.0;
    sound1.setVolume(1.0);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    experimentComponents = [];
    experimentComponents.push(image_rect);
    experimentComponents.push(image1);
    experimentComponents.push(image2_rect);
    experimentComponents.push(image2);
    experimentComponents.push(image3_rect);
    experimentComponents.push(image3);
    experimentComponents.push(image4_rect);
    experimentComponents.push(image4);
    experimentComponents.push(sound1);
    experimentComponents.push(mouse);
    
    for (const thisComponent of experimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'experiment' ---
    // get current time
    t = experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_rect* updates
    if (t >= 1.0 && image_rect.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_rect.tStart = t;  // (not accounting for frame time here)
      image_rect.frameNStart = frameN;  // exact frame index
      
      image_rect.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_rect.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_rect.setAutoDraw(false);
    }
    
    // *image1* updates
    if (t >= 1.0 && image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image1.tStart = t;  // (not accounting for frame time here)
      image1.frameNStart = frameN;  // exact frame index
      
      image1.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image1.setAutoDraw(false);
    }
    
    // *image2_rect* updates
    if (t >= 1.0 && image2_rect.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image2_rect.tStart = t;  // (not accounting for frame time here)
      image2_rect.frameNStart = frameN;  // exact frame index
      
      image2_rect.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image2_rect.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image2_rect.setAutoDraw(false);
    }
    
    // *image2* updates
    if (t >= 1.0 && image2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image2.tStart = t;  // (not accounting for frame time here)
      image2.frameNStart = frameN;  // exact frame index
      
      image2.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image2.setAutoDraw(false);
    }
    
    // *image3_rect* updates
    if (t >= 1.0 && image3_rect.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image3_rect.tStart = t;  // (not accounting for frame time here)
      image3_rect.frameNStart = frameN;  // exact frame index
      
      image3_rect.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image3_rect.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image3_rect.setAutoDraw(false);
    }
    
    // *image3* updates
    if (t >= 1.0 && image3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image3.tStart = t;  // (not accounting for frame time here)
      image3.frameNStart = frameN;  // exact frame index
      
      image3.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image3.setAutoDraw(false);
    }
    
    // *image4_rect* updates
    if (t >= 1.0 && image4_rect.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image4_rect.tStart = t;  // (not accounting for frame time here)
      image4_rect.frameNStart = frameN;  // exact frame index
      
      image4_rect.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image4_rect.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image4_rect.setAutoDraw(false);
    }
    
    // *image4* updates
    if (t >= 1.0 && image4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image4.tStart = t;  // (not accounting for frame time here)
      image4.frameNStart = frameN;  // exact frame index
      
      image4.setAutoDraw(true);
    }

    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image4.setAutoDraw(false);
    }
    // start/stop sound1
    if (t >= 1.0 && sound1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound1.tStart = t;  // (not accounting for frame time here)
      sound1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound1.play(); });  // screen flip
      sound1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (7.0 > 0.5) {
        sound1.stop();  // stop the sound (if longer than duration)
      }
      sound1.status = PsychoJS.Status.FINISHED;
    }
    // *mouse* updates
    if (t >= 1.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 1.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse.status = PsychoJS.Status.FINISHED;
  }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image1, image2, image3, image4]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse.getPos();
            mouse.x.push(_mouseXYs[0]);
            mouse.y.push(_mouseXYs[1]);
            mouse.leftButton.push(_mouseButtons[0]);
            mouse.midButton.push(_mouseButtons[1]);
            mouse.rightButton.push(_mouseButtons[2]);
            mouse.time.push(mouse.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of experimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'experiment' ---
    for (const thisComponent of experimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound1.stop();  // ensure sound has stopped at end of routine
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_congrats_allKeys;
var exp_congratsComponents;
function exp_congratsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_congrats' ---
    t = 0;
    exp_congratsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_congrats.keys = undefined;
    key_resp_congrats.rt = undefined;
    _key_resp_congrats_allKeys = [];
    // keep track of which components have finished
    exp_congratsComponents = [];
    exp_congratsComponents.push(text_congrats);
    exp_congratsComponents.push(key_resp_congrats);
    
    for (const thisComponent of exp_congratsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_congratsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_congrats' ---
    // get current time
    t = exp_congratsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_congrats* updates
    if (t >= 0.0 && text_congrats.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_congrats.tStart = t;  // (not accounting for frame time here)
      text_congrats.frameNStart = frameN;  // exact frame index
      
      text_congrats.setAutoDraw(true);
    }

    
    // *key_resp_congrats* updates
    if (t >= 0.0 && key_resp_congrats.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_congrats.tStart = t;  // (not accounting for frame time here)
      key_resp_congrats.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_congrats.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_congrats.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_congrats.clearEvents(); });
    }

    if (key_resp_congrats.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_congrats.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_congrats_allKeys = _key_resp_congrats_allKeys.concat(theseKeys);
      if (_key_resp_congrats_allKeys.length > 0) {
        key_resp_congrats.keys = _key_resp_congrats_allKeys[_key_resp_congrats_allKeys.length - 1].name;  // just the last key pressed
        key_resp_congrats.rt = _key_resp_congrats_allKeys[_key_resp_congrats_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_congratsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_congratsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_congrats' ---
    for (const thisComponent of exp_congratsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_congrats.corr, level);
    }
    psychoJS.experiment.addData('key_resp_congrats.keys', key_resp_congrats.keys);
    if (typeof key_resp_congrats.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_congrats.rt', key_resp_congrats.rt);
        routineTimer.reset();
        }
    
    key_resp_congrats.stop();
    // the Routine "exp_congrats" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_key_allKeys;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_key.keys = undefined;
    end_key.rt = undefined;
    _end_key_allKeys = [];
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(end_text);
    EndComponents.push(end_key);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    
    // *end_key* updates
    if (t >= 0.0 && end_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_key.tStart = t;  // (not accounting for frame time here)
      end_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_key.clearEvents(); });
    }

    if (end_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_key.getKeys({keyList: ['space'], waitRelease: false});
      _end_key_allKeys = _end_key_allKeys.concat(theseKeys);
      if (_end_key_allKeys.length > 0) {
        end_key.keys = _end_key_allKeys[_end_key_allKeys.length - 1].name;  // just the last key pressed
        end_key.rt = _end_key_allKeys[_end_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_key.corr, level);
    }
    psychoJS.experiment.addData('end_key.keys', end_key.keys);
    if (typeof end_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_key.rt', end_key.rt);
        routineTimer.reset();
        }
    
    end_key.stop();
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
