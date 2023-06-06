#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.4),
    on Haziran 06, 2023, at 14:18
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.4'
expName = 'deneme'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\Asus\\OneDrive\\Desktop\\PsychoPy\\vwp_online_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1360, 768], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "introduction" ---
intro_text = visual.TextStim(win=win, name='intro_text',
    text='Deneyimize Hoş Geldiniz! \n\nBu deney iki aşamadan oluşmaktadır. Her deney ile ilgili bilgi deney öncesinde ekranda sunulacaktır.  \n\nİki deneyin de doğru bir biçimde tamamlanabilmesi için deneyler boyunca BİLGİSAYARINIZI KAPATMAYIN ve DENEY SAYFASINDAN ÇIKMAYINIZ.  \n\nHazırsanız, Boşluk [Space] tuşuna basınız.\n\n\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_intro = keyboard.Keyboard()

# --- Initialize components for Routine "span_ins" ---
digit_span_ins = visual.TextStim(win=win, name='digit_span_ins',
    text='Birinci Deneyimize Hoş Geldiniz!\n\nBu deneyde sizden ekranda gördüğünüz rakamları aklınızda tutmanız ve daha sonra bu rakamları sırasıyla klavye ile yazmanız istenmektedir.\n\nDeney 3 rakam ile başlamakta ve siz doğru yanıt verdikçe birer rakam artmaktadır. Yazdığınız rakamı silmek isterseniz [Backspace] tuşunu kullanabilirsiniz. Üst üste iki kere yanlış yanıt verdiğinizde test sona erecektir.\n\nRakamları yazdıktan sonra bir sonraki sayı dizisine geçmek için [Boşluk] tuşunu kullanınız.\n\nDeneye başlamak için [Boşluk] tuşuna basabilirsiniz.\n\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_ins = keyboard.Keyboard()

# --- Initialize components for Routine "span_task" ---
fixation = visual.TextStim(win=win, name='fixation',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
pres_text = visual.TextStim(win=win, name='pres_text',
    text='',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "span_recall" ---
recall_txt = visual.TextStim(win=win, name='recall_txt',
    text='Gördüğünüz Rakamları Yazın!',
    font='Arial',
    pos=(0, 0.25), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
textbox = visual.TextBox2(
     win, text=None, font='Arial',
     pos=(0, 0),     letterHeight=0.1,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='textbox',
     autoLog=True,
)
key_resp = keyboard.Keyboard()
# Run 'Begin Experiment' code from span_code
# Store responses
allResponses = []

# --- Initialize components for Routine "feedback" ---
feedback_text = visual.TextStim(win=win, name='feedback_text',
    text='',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "span_end" ---
thank_you = visual.TextStim(win=win, name='thank_you',
    text='Birinci deney tamamlanmıştır!\n\nTeşekkür ederiz!\n\nİkinci deneye başlamak için Boşluk [Space] tuşuna basınız.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
span_key = keyboard.Keyboard()

# --- Initialize components for Routine "welcome" ---
welcome_text = visual.TextStim(win=win, name='welcome_text',
    text='İkinci Deneyimize Hoş Geldiniz!\n\nDeneye başlamadan önce sessiz bir ortamda olduğunuzdan ve kulaklıklarınızın yanınızda olduğundan emin olunuz.\n\n[Boşluk] tuşuna basarak ilerleyebilirsiniz.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
welcome_key = keyboard.Keyboard()

# --- Initialize components for Routine "instruction" ---
instruction_text = visual.TextStim(win=win, name='instruction_text',
    text='İkinci deney 4 oturumdan oluşmaktadır ve her oturum yaklaşık 15-20 dakika sürmektedir. Her oturum tamamlandığında size ekranda bilgi verilecektir. Bu sürelerde dinlenebilirsiniz.\n\nİlerlemek için [Boşluk] tuşuna basınız.\n\n',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
instruction_key = keyboard.Keyboard()

# --- Initialize components for Routine "training_ready" ---
text_training_ready = visual.TextStim(win=win, name='text_training_ready',
    text='Bu deneyde kulaklıkla cümleler duyacak ve aynı zamanda ekranda resimler göreceksiniz. Sizden istenen duyduğunuz cümle ile en alakalı olduğunu düşündüğünüz resme en kısa sürede mouse ile tıklamanız.\n\nDeneyden önce kısa bir alıştırma yapılacaktır.\n\nAlıştırmaya başlamak için [Boşluk] tuşuna basınız.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_training_ready = keyboard.Keyboard()

# --- Initialize components for Routine "training_ses" ---
image_rect_1 = visual.Rect(
    win=win, name='image_rect_1',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0.0, pos=(0, 0), anchor='top-right',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor='white',
    opacity=None, depth=0.0, interpolate=True)
image1_t = visual.ImageStim(
    win=win,
    name='image1_t', 
    image='sin', mask=None, anchor='top-right',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image_rect_2 = visual.Rect(
    win=win, name='image_rect_2',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0.0, pos=(0, 0), anchor='top-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor='white',
    opacity=None, depth=-2.0, interpolate=True)
image2_t = visual.ImageStim(
    win=win,
    name='image2_t', 
    image='sin', mask=None, anchor='top-left',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
image_rect_3 = visual.Rect(
    win=win, name='image_rect_3',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0.0, pos=(0, 0), anchor='bottom-right',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor='white',
    opacity=None, depth=-4.0, interpolate=True)
image3_t = visual.ImageStim(
    win=win,
    name='image3_t', 
    image='sin', mask=None, anchor='bottom-right',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
image_rect_4 = visual.Rect(
    win=win, name='image_rect_4',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0.0, pos=(0, 0), anchor='bottom-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
image4_t = visual.ImageStim(
    win=win,
    name='image4_t', 
    image='sin', mask=None, anchor='bottom-left',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
sound_t = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='sound_t')
sound_t.setVolume(1.0)
mouse_t = event.Mouse(win=win)
x, y = [None, None]
mouse_t.mouseClock = core.Clock()

# --- Initialize components for Routine "tr_congrats" ---
text_tr_congrats = visual.TextStim(win=win, name='text_tr_congrats',
    text='Alıştırma tamamlanmıştır. Teşekkür ederiz!\n\nDeneye başlamadan önce hatırlatma ekranına geçmek için [Boşluk] tuşuna basınız.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_session = keyboard.Keyboard()

# --- Initialize components for Routine "exp_rules" ---
text_rules = visual.TextStim(win=win, name='text_rules',
    text='Deney 4 oturumdan oluşmaktadır ve her oturum yaklaşık 15-20 dakika sürmektedir. Her oturum tamamlandığında size ekranda bilgi verilecektir. Bu sürelerde dinlenebilirsiniz. \n\nBu deneyde kulaklıkla cümleler duyacak ve aynı zamanda ekranda resimler göreceksiniz. Sizden istenen duyduğunuz cümle ile en alakalı olduğunu düşündüğünüz resme en kısa sürede mouse ile tıklamanız.\n\nDeneyin  doğru bir biçimde tamamlanabilmesi için deneyler boyunca BİLGİSAYARINIZI KAPATMAYIN ve DENEY SAYFASINDAN ÇIKMAYINIZ.  \n\nHazırsanız, Boşluk [Space] tuşuna basınız.',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=1, ori=0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_rules = keyboard.Keyboard()

# --- Initialize components for Routine "you_ready" ---
text_youready = visual.TextStim(win=win, name='text_youready',
    text='Hazır hissettiğinizde [Boşluk] tuşuna basarak deneye başlayabilirsiniz.\n\n\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=2, ori=0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_ready = keyboard.Keyboard()

# --- Initialize components for Routine "experiment" ---
image_rect = visual.Rect(
    win=win, name='image_rect',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0.0, pos=(0, 0), anchor='top-right',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor='white',
    opacity=None, depth=0.0, interpolate=True)
image1 = visual.ImageStim(
    win=win,
    name='image1', 
    image='sin', mask=None, anchor='top-right',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image2_rect = visual.Rect(
    win=win, name='image2_rect',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0.0, pos=(0, 0), anchor='top-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor='white',
    opacity=None, depth=-2.0, interpolate=True)
image2 = visual.ImageStim(
    win=win,
    name='image2', 
    image='sin', mask=None, anchor='top-left',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
image3_rect = visual.Rect(
    win=win, name='image3_rect',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0.0, pos=(0, 0), anchor='bottom-right',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor='white',
    opacity=None, depth=-4.0, interpolate=True)
image3 = visual.ImageStim(
    win=win,
    name='image3', 
    image='sin', mask=None, anchor='bottom-right',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
image4_rect = visual.Rect(
    win=win, name='image4_rect',
    width=(0.5, 0.5)[0], height=(0.5, 0.5)[1],
    ori=0.0, pos=(0, 0), anchor='bottom-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
image4 = visual.ImageStim(
    win=win,
    name='image4', 
    image='sin', mask=None, anchor='bottom-left',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
sound1 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='sound1')
sound1.setVolume(1.0)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# --- Initialize components for Routine "exp_congrats" ---
text_congrats = visual.TextStim(win=win, name='text_congrats',
    text='Bu oturumu tamamladınız!\n\nBir sonraki oturuma başlamadan önce dinlenebilir veya yeni oturuma hemen başlayabilirsiniz.\n\nDevam etmek için [Boşluk] tuşuna basınız.',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=2, ori=0, 
    color='white', colorSpace='rgb', opacity=0, 
    languageStyle='LTR',
    depth=0.0);
key_resp_congrats = keyboard.Keyboard()

# --- Initialize components for Routine "End" ---
end_text = visual.TextStim(win=win, name='end_text',
    text='Deney tamamlanmıştır!\n\nKatılımınız için çok teşekkür ederiz :)\n\nDeneyle ilgili sorularınız için selincaliiskan@gmail.com mail adresine yazabilirsiniz.\n\nDeneyden çıkmak için [Boşluk] tuşuna basınız.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_key = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "introduction" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_intro.keys = []
key_resp_intro.rt = []
_key_resp_intro_allKeys = []
# keep track of which components have finished
introductionComponents = [intro_text, key_resp_intro]
for thisComponent in introductionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "introduction" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *intro_text* updates
    if intro_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        intro_text.frameNStart = frameN  # exact frame index
        intro_text.tStart = t  # local t and not account for scr refresh
        intro_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intro_text, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'intro_text.started')
        intro_text.setAutoDraw(True)
    
    # *key_resp_intro* updates
    waitOnFlip = False
    if key_resp_intro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_intro.frameNStart = frameN  # exact frame index
        key_resp_intro.tStart = t  # local t and not account for scr refresh
        key_resp_intro.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_intro, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_intro.started')
        key_resp_intro.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_intro.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_intro.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_intro.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_intro.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_intro_allKeys.extend(theseKeys)
        if len(_key_resp_intro_allKeys):
            key_resp_intro.keys = _key_resp_intro_allKeys[-1].name  # just the last key pressed
            key_resp_intro.rt = _key_resp_intro_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in introductionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "introduction" ---
for thisComponent in introductionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_intro.keys in ['', [], None]:  # No response was made
    key_resp_intro.keys = None
thisExp.addData('key_resp_intro.keys',key_resp_intro.keys)
if key_resp_intro.keys != None:  # we had a response
    thisExp.addData('key_resp_intro.rt', key_resp_intro.rt)
thisExp.nextEntry()
# the Routine "introduction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "span_ins" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_ins.keys = []
key_resp_ins.rt = []
_key_resp_ins_allKeys = []
# keep track of which components have finished
span_insComponents = [digit_span_ins, key_resp_ins]
for thisComponent in span_insComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "span_ins" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *digit_span_ins* updates
    if digit_span_ins.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        digit_span_ins.frameNStart = frameN  # exact frame index
        digit_span_ins.tStart = t  # local t and not account for scr refresh
        digit_span_ins.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(digit_span_ins, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'digit_span_ins.started')
        digit_span_ins.setAutoDraw(True)
    
    # *key_resp_ins* updates
    waitOnFlip = False
    if key_resp_ins.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_ins.frameNStart = frameN  # exact frame index
        key_resp_ins.tStart = t  # local t and not account for scr refresh
        key_resp_ins.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_ins, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_ins.started')
        key_resp_ins.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_ins.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_ins.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_ins.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_ins.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_ins_allKeys.extend(theseKeys)
        if len(_key_resp_ins_allKeys):
            key_resp_ins.keys = _key_resp_ins_allKeys[-1].name  # just the last key pressed
            key_resp_ins.rt = _key_resp_ins_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in span_insComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "span_ins" ---
for thisComponent in span_insComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_ins.keys in ['', [], None]:  # No response was made
    key_resp_ins.keys = None
thisExp.addData('key_resp_ins.keys',key_resp_ins.keys)
if key_resp_ins.keys != None:  # we had a response
    thisExp.addData('key_resp_ins.rt', key_resp_ins.rt)
thisExp.nextEntry()
# the Routine "span_ins" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks_span = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('choose_digitSpan.xlsx'),
    seed=None, name='blocks_span')
thisExp.addLoop(blocks_span)  # add the loop to the experiment
thisBlocks_span = blocks_span.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlocks_span.rgb)
if thisBlocks_span != None:
    for paramName in thisBlocks_span:
        exec('{} = thisBlocks_span[paramName]'.format(paramName))

for thisBlocks_span in blocks_span:
    currentLoop = blocks_span
    # abbreviate parameter names if possible (e.g. rgb = thisBlocks_span.rgb)
    if thisBlocks_span != None:
        for paramName in thisBlocks_span:
            exec('{} = thisBlocks_span[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    trials_span = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(condition_file),
        seed=None, name='trials_span')
    thisExp.addLoop(trials_span)  # add the loop to the experiment
    thisTrials_span = trials_span.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_span.rgb)
    if thisTrials_span != None:
        for paramName in thisTrials_span:
            exec('{} = thisTrials_span[paramName]'.format(paramName))
    
    for thisTrials_span in trials_span:
        currentLoop = trials_span
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_span.rgb)
        if thisTrials_span != None:
            for paramName in thisTrials_span:
                exec('{} = thisTrials_span[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        digitLoop = data.TrialHandler(nReps=digitSpan, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='digitLoop')
        thisExp.addLoop(digitLoop)  # add the loop to the experiment
        thisDigitLoop = digitLoop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisDigitLoop.rgb)
        if thisDigitLoop != None:
            for paramName in thisDigitLoop:
                exec('{} = thisDigitLoop[paramName]'.format(paramName))
        
        for thisDigitLoop in digitLoop:
            currentLoop = digitLoop
            # abbreviate parameter names if possible (e.g. rgb = thisDigitLoop.rgb)
            if thisDigitLoop != None:
                for paramName in thisDigitLoop:
                    exec('{} = thisDigitLoop[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "span_task" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            pres_text.setText(str(digits)[digitLoop.thisN])
            # keep track of which components have finished
            span_taskComponents = [fixation, pres_text]
            for thisComponent in span_taskComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "span_task" ---
            while continueRoutine and routineTimer.getTime() < 2.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *fixation* updates
                if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    fixation.frameNStart = frameN  # exact frame index
                    fixation.tStart = t  # local t and not account for scr refresh
                    fixation.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fixation.started')
                    fixation.setAutoDraw(True)
                if fixation.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > fixation.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        fixation.tStop = t  # not accounting for scr refresh
                        fixation.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'fixation.stopped')
                        fixation.setAutoDraw(False)
                
                # *pres_text* updates
                if pres_text.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    pres_text.frameNStart = frameN  # exact frame index
                    pres_text.tStart = t  # local t and not account for scr refresh
                    pres_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(pres_text, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'pres_text.started')
                    pres_text.setAutoDraw(True)
                if pres_text.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > pres_text.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        pres_text.tStop = t  # not accounting for scr refresh
                        pres_text.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'pres_text.stopped')
                        pres_text.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in span_taskComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "span_task" ---
            for thisComponent in span_taskComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-2.000000)
            thisExp.nextEntry()
            
        # completed digitSpan repeats of 'digitLoop'
        
        
        # --- Prepare to start Routine "span_recall" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        textbox.reset()
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # keep track of which components have finished
        span_recallComponents = [recall_txt, textbox, key_resp]
        for thisComponent in span_recallComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "span_recall" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *recall_txt* updates
            if recall_txt.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                recall_txt.frameNStart = frameN  # exact frame index
                recall_txt.tStart = t  # local t and not account for scr refresh
                recall_txt.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(recall_txt, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'recall_txt.started')
                recall_txt.setAutoDraw(True)
            
            # *textbox* updates
            if textbox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                textbox.frameNStart = frameN  # exact frame index
                textbox.tStart = t  # local t and not account for scr refresh
                textbox.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(textbox, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'textbox.started')
                textbox.setAutoDraw(True)
            
            # *key_resp* updates
            waitOnFlip = False
            if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp.started')
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in span_recallComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "span_recall" ---
        for thisComponent in span_recallComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials_span.addData('textbox.text',textbox.text)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
        trials_span.addData('key_resp.keys',key_resp.keys)
        if key_resp.keys != None:  # we had a response
            trials_span.addData('key_resp.rt', key_resp.rt)
        # Run 'End Routine' code from span_code
        if textbox.text == str(digits):
            correct = 1
            fbTxt = 'Correct!'
        else:
            correct = 0
            fbTxt = 'Incorrect'
        thisExp.addData('correct', correct)
        
        # Store each response in list
        allResponses.append(correct)
        # the Routine "span_recall" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "feedback" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        feedback_text.setText(fbTxt)
        # keep track of which components have finished
        feedbackComponents = [feedback_text]
        for thisComponent in feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "feedback" ---
        while continueRoutine and routineTimer.getTime() < 1.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *feedback_text* updates
            if feedback_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feedback_text.frameNStart = frameN  # exact frame index
                feedback_text.tStart = t  # local t and not account for scr refresh
                feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feedback_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'feedback_text.started')
                feedback_text.setAutoDraw(True)
            if feedback_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > feedback_text.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    feedback_text.tStop = t  # not accounting for scr refresh
                    feedback_text.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'feedback_text.stopped')
                    feedback_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "feedback" ---
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from feedback_code
        # for incorrect, check that two responses exist
        # and that their sum of last two responses is zero
        if len(allResponses) >= 2 and sum(allResponses[-2:]) == 0:
            trials_span.finished = True
            blocks_span.finished = True
        # If sum of last two responses is 2, move to next sequence
        elif sum(allResponses[-2:]) == 2:
            trials_span.finished = True
            allResponses = []
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials_span'
    
# completed 1.0 repeats of 'blocks_span'


# --- Prepare to start Routine "span_end" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
span_key.keys = []
span_key.rt = []
_span_key_allKeys = []
# keep track of which components have finished
span_endComponents = [thank_you, span_key]
for thisComponent in span_endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "span_end" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thank_you* updates
    if thank_you.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thank_you.frameNStart = frameN  # exact frame index
        thank_you.tStart = t  # local t and not account for scr refresh
        thank_you.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thank_you, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'thank_you.started')
        thank_you.setAutoDraw(True)
    
    # *span_key* updates
    waitOnFlip = False
    if span_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        span_key.frameNStart = frameN  # exact frame index
        span_key.tStart = t  # local t and not account for scr refresh
        span_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(span_key, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'span_key.started')
        span_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(span_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(span_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if span_key.status == STARTED and not waitOnFlip:
        theseKeys = span_key.getKeys(keyList=['space'], waitRelease=False)
        _span_key_allKeys.extend(theseKeys)
        if len(_span_key_allKeys):
            span_key.keys = _span_key_allKeys[-1].name  # just the last key pressed
            span_key.rt = _span_key_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in span_endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "span_end" ---
for thisComponent in span_endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if span_key.keys in ['', [], None]:  # No response was made
    span_key.keys = None
thisExp.addData('span_key.keys',span_key.keys)
if span_key.keys != None:  # we had a response
    thisExp.addData('span_key.rt', span_key.rt)
thisExp.nextEntry()
# the Routine "span_end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "welcome" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
welcome_key.keys = []
welcome_key.rt = []
_welcome_key_allKeys = []
# keep track of which components have finished
welcomeComponents = [welcome_text, welcome_key]
for thisComponent in welcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "welcome" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *welcome_text* updates
    if welcome_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_text.frameNStart = frameN  # exact frame index
        welcome_text.tStart = t  # local t and not account for scr refresh
        welcome_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_text, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'welcome_text.started')
        welcome_text.setAutoDraw(True)
    
    # *welcome_key* updates
    waitOnFlip = False
    if welcome_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_key.frameNStart = frameN  # exact frame index
        welcome_key.tStart = t  # local t and not account for scr refresh
        welcome_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_key, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'welcome_key.started')
        welcome_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(welcome_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(welcome_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if welcome_key.status == STARTED and not waitOnFlip:
        theseKeys = welcome_key.getKeys(keyList=['space'], waitRelease=False)
        _welcome_key_allKeys.extend(theseKeys)
        if len(_welcome_key_allKeys):
            welcome_key.keys = _welcome_key_allKeys[-1].name  # just the last key pressed
            welcome_key.rt = _welcome_key_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "welcome" ---
for thisComponent in welcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if welcome_key.keys in ['', [], None]:  # No response was made
    welcome_key.keys = None
thisExp.addData('welcome_key.keys',welcome_key.keys)
if welcome_key.keys != None:  # we had a response
    thisExp.addData('welcome_key.rt', welcome_key.rt)
thisExp.nextEntry()
# the Routine "welcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instruction" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
instruction_key.keys = []
instruction_key.rt = []
_instruction_key_allKeys = []
# keep track of which components have finished
instructionComponents = [instruction_text, instruction_key]
for thisComponent in instructionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instruction" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text* updates
    if instruction_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text.frameNStart = frameN  # exact frame index
        instruction_text.tStart = t  # local t and not account for scr refresh
        instruction_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instruction_text.started')
        instruction_text.setAutoDraw(True)
    
    # *instruction_key* updates
    waitOnFlip = False
    if instruction_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_key.frameNStart = frameN  # exact frame index
        instruction_key.tStart = t  # local t and not account for scr refresh
        instruction_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_key, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instruction_key.started')
        instruction_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instruction_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instruction_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instruction_key.status == STARTED and not waitOnFlip:
        theseKeys = instruction_key.getKeys(keyList=['space'], waitRelease=False)
        _instruction_key_allKeys.extend(theseKeys)
        if len(_instruction_key_allKeys):
            instruction_key.keys = _instruction_key_allKeys[-1].name  # just the last key pressed
            instruction_key.rt = _instruction_key_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instruction" ---
for thisComponent in instructionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if instruction_key.keys in ['', [], None]:  # No response was made
    instruction_key.keys = None
thisExp.addData('instruction_key.keys',instruction_key.keys)
if instruction_key.keys != None:  # we had a response
    thisExp.addData('instruction_key.rt', instruction_key.rt)
thisExp.nextEntry()
# the Routine "instruction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "training_ready" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_training_ready.keys = []
key_training_ready.rt = []
_key_training_ready_allKeys = []
# keep track of which components have finished
training_readyComponents = [text_training_ready, key_training_ready]
for thisComponent in training_readyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "training_ready" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_training_ready* updates
    if text_training_ready.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_training_ready.frameNStart = frameN  # exact frame index
        text_training_ready.tStart = t  # local t and not account for scr refresh
        text_training_ready.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_training_ready, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_training_ready.started')
        text_training_ready.setAutoDraw(True)
    
    # *key_training_ready* updates
    waitOnFlip = False
    if key_training_ready.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_training_ready.frameNStart = frameN  # exact frame index
        key_training_ready.tStart = t  # local t and not account for scr refresh
        key_training_ready.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_training_ready, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_training_ready.started')
        key_training_ready.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_training_ready.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_training_ready.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_training_ready.status == STARTED and not waitOnFlip:
        theseKeys = key_training_ready.getKeys(keyList=['space'], waitRelease=False)
        _key_training_ready_allKeys.extend(theseKeys)
        if len(_key_training_ready_allKeys):
            key_training_ready.keys = _key_training_ready_allKeys[-1].name  # just the last key pressed
            key_training_ready.rt = _key_training_ready_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in training_readyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "training_ready" ---
for thisComponent in training_readyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_training_ready.keys in ['', [], None]:  # No response was made
    key_training_ready.keys = None
thisExp.addData('key_training_ready.keys',key_training_ready.keys)
if key_training_ready.keys != None:  # we had a response
    thisExp.addData('key_training_ready.rt', key_training_ready.rt)
thisExp.nextEntry()
# the Routine "training_ready" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('training.csv'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "training_ses" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    image1_t.setImage(topright_image)
    image2_t.setImage(topleft_image)
    image3_t.setImage(bottomright_image)
    image4_t.setImage(bottomleft_image)
    sound_t.setSound(audiofile, secs=7.0, hamming=True)
    sound_t.setVolume(1.0, log=False)
    # setup some python lists for storing info about the mouse_t
    mouse_t.x = []
    mouse_t.y = []
    mouse_t.leftButton = []
    mouse_t.midButton = []
    mouse_t.rightButton = []
    mouse_t.time = []
    mouse_t.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    training_sesComponents = [image_rect_1, image1_t, image_rect_2, image2_t, image_rect_3, image3_t, image_rect_4, image4_t, sound_t, mouse_t]
    for thisComponent in training_sesComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "training_ses" ---
    while continueRoutine and routineTimer.getTime() < 8.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_rect_1* updates
        if image_rect_1.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            image_rect_1.frameNStart = frameN  # exact frame index
            image_rect_1.tStart = t  # local t and not account for scr refresh
            image_rect_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_rect_1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_rect_1.started')
            image_rect_1.setAutoDraw(True)
        if image_rect_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_rect_1.tStartRefresh + 7.0-frameTolerance:
                # keep track of stop time/frame for later
                image_rect_1.tStop = t  # not accounting for scr refresh
                image_rect_1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_rect_1.stopped')
                image_rect_1.setAutoDraw(False)
        
        # *image1_t* updates
        if image1_t.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            image1_t.frameNStart = frameN  # exact frame index
            image1_t.tStart = t  # local t and not account for scr refresh
            image1_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image1_t, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image1_t.started')
            image1_t.setAutoDraw(True)
        if image1_t.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image1_t.tStartRefresh + 7.0-frameTolerance:
                # keep track of stop time/frame for later
                image1_t.tStop = t  # not accounting for scr refresh
                image1_t.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image1_t.stopped')
                image1_t.setAutoDraw(False)
        
        # *image_rect_2* updates
        if image_rect_2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            image_rect_2.frameNStart = frameN  # exact frame index
            image_rect_2.tStart = t  # local t and not account for scr refresh
            image_rect_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_rect_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_rect_2.started')
            image_rect_2.setAutoDraw(True)
        if image_rect_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_rect_2.tStartRefresh + 7.0-frameTolerance:
                # keep track of stop time/frame for later
                image_rect_2.tStop = t  # not accounting for scr refresh
                image_rect_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_rect_2.stopped')
                image_rect_2.setAutoDraw(False)
        
        # *image2_t* updates
        if image2_t.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            image2_t.frameNStart = frameN  # exact frame index
            image2_t.tStart = t  # local t and not account for scr refresh
            image2_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image2_t, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image2_t.started')
            image2_t.setAutoDraw(True)
        if image2_t.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image2_t.tStartRefresh + 7.0-frameTolerance:
                # keep track of stop time/frame for later
                image2_t.tStop = t  # not accounting for scr refresh
                image2_t.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image2_t.stopped')
                image2_t.setAutoDraw(False)
        
        # *image_rect_3* updates
        if image_rect_3.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            image_rect_3.frameNStart = frameN  # exact frame index
            image_rect_3.tStart = t  # local t and not account for scr refresh
            image_rect_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_rect_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_rect_3.started')
            image_rect_3.setAutoDraw(True)
        if image_rect_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_rect_3.tStartRefresh + 7.0-frameTolerance:
                # keep track of stop time/frame for later
                image_rect_3.tStop = t  # not accounting for scr refresh
                image_rect_3.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_rect_3.stopped')
                image_rect_3.setAutoDraw(False)
        
        # *image3_t* updates
        if image3_t.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            image3_t.frameNStart = frameN  # exact frame index
            image3_t.tStart = t  # local t and not account for scr refresh
            image3_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image3_t, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image3_t.started')
            image3_t.setAutoDraw(True)
        if image3_t.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image3_t.tStartRefresh + 7.0-frameTolerance:
                # keep track of stop time/frame for later
                image3_t.tStop = t  # not accounting for scr refresh
                image3_t.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image3_t.stopped')
                image3_t.setAutoDraw(False)
        
        # *image_rect_4* updates
        if image_rect_4.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            image_rect_4.frameNStart = frameN  # exact frame index
            image_rect_4.tStart = t  # local t and not account for scr refresh
            image_rect_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_rect_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_rect_4.started')
            image_rect_4.setAutoDraw(True)
        if image_rect_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_rect_4.tStartRefresh + 7.0-frameTolerance:
                # keep track of stop time/frame for later
                image_rect_4.tStop = t  # not accounting for scr refresh
                image_rect_4.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_rect_4.stopped')
                image_rect_4.setAutoDraw(False)
        
        # *image4_t* updates
        if image4_t.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            image4_t.frameNStart = frameN  # exact frame index
            image4_t.tStart = t  # local t and not account for scr refresh
            image4_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image4_t, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image4_t.started')
            image4_t.setAutoDraw(True)
        if image4_t.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image4_t.tStartRefresh + 7.0-frameTolerance:
                # keep track of stop time/frame for later
                image4_t.tStop = t  # not accounting for scr refresh
                image4_t.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image4_t.stopped')
                image4_t.setAutoDraw(False)
        # start/stop sound_t
        if sound_t.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            sound_t.frameNStart = frameN  # exact frame index
            sound_t.tStart = t  # local t and not account for scr refresh
            sound_t.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_t.started', tThisFlipGlobal)
            sound_t.play(when=win)  # sync with win flip
        if sound_t.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_t.tStartRefresh + 7.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_t.tStop = t  # not accounting for scr refresh
                sound_t.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_t.stopped')
                sound_t.stop()
        # *mouse_t* updates
        if mouse_t.status == NOT_STARTED and t >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_t.frameNStart = frameN  # exact frame index
            mouse_t.tStart = t  # local t and not account for scr refresh
            mouse_t.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_t, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse_t.started', t)
            mouse_t.status = STARTED
            mouse_t.mouseClock.reset()
            prevButtonState = mouse_t.getPressed()  # if button is down already this ISN'T a new click
        if mouse_t.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mouse_t.tStartRefresh + 7.0-frameTolerance:
                # keep track of stop time/frame for later
                mouse_t.tStop = t  # not accounting for scr refresh
                mouse_t.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.addData('mouse_t.stopped', t)
                mouse_t.status = FINISHED
        if mouse_t.status == STARTED:  # only update if started and not finished!
            buttons = mouse_t.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter([image1_t, image2_t, image3_t, image4_t])
                        clickableList = [image1_t, image2_t, image3_t, image4_t]
                    except:
                        clickableList = [[image1_t, image2_t, image3_t, image4_t]]
                    for obj in clickableList:
                        if obj.contains(mouse_t):
                            gotValidClick = True
                            mouse_t.clicked_name.append(obj.name)
                    if gotValidClick:
                        x, y = mouse_t.getPos()
                        mouse_t.x.append(x)
                        mouse_t.y.append(y)
                        buttons = mouse_t.getPressed()
                        mouse_t.leftButton.append(buttons[0])
                        mouse_t.midButton.append(buttons[1])
                        mouse_t.rightButton.append(buttons[2])
                        mouse_t.time.append(mouse_t.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # abort routine on response
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in training_sesComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "training_ses" ---
    for thisComponent in training_sesComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    sound_t.stop()  # ensure sound has stopped at end of routine
    # store data for trials (TrialHandler)
    trials.addData('mouse_t.x', mouse_t.x)
    trials.addData('mouse_t.y', mouse_t.y)
    trials.addData('mouse_t.leftButton', mouse_t.leftButton)
    trials.addData('mouse_t.midButton', mouse_t.midButton)
    trials.addData('mouse_t.rightButton', mouse_t.rightButton)
    trials.addData('mouse_t.time', mouse_t.time)
    trials.addData('mouse_t.clicked_name', mouse_t.clicked_name)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-8.000000)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# --- Prepare to start Routine "tr_congrats" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_session.keys = []
key_resp_session.rt = []
_key_resp_session_allKeys = []
# keep track of which components have finished
tr_congratsComponents = [text_tr_congrats, key_resp_session]
for thisComponent in tr_congratsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "tr_congrats" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_tr_congrats* updates
    if text_tr_congrats.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_tr_congrats.frameNStart = frameN  # exact frame index
        text_tr_congrats.tStart = t  # local t and not account for scr refresh
        text_tr_congrats.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_tr_congrats, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_tr_congrats.started')
        text_tr_congrats.setAutoDraw(True)
    
    # *key_resp_session* updates
    waitOnFlip = False
    if key_resp_session.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_session.frameNStart = frameN  # exact frame index
        key_resp_session.tStart = t  # local t and not account for scr refresh
        key_resp_session.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_session, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_session.started')
        key_resp_session.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_session.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_session.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_session.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_session.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_session_allKeys.extend(theseKeys)
        if len(_key_resp_session_allKeys):
            key_resp_session.keys = _key_resp_session_allKeys[-1].name  # just the last key pressed
            key_resp_session.rt = _key_resp_session_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in tr_congratsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "tr_congrats" ---
for thisComponent in tr_congratsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_session.keys in ['', [], None]:  # No response was made
    key_resp_session.keys = None
thisExp.addData('key_resp_session.keys',key_resp_session.keys)
if key_resp_session.keys != None:  # we had a response
    thisExp.addData('key_resp_session.rt', key_resp_session.rt)
thisExp.nextEntry()
# the Routine "tr_congrats" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "exp_rules" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_rules.keys = []
key_resp_rules.rt = []
_key_resp_rules_allKeys = []
# keep track of which components have finished
exp_rulesComponents = [text_rules, key_resp_rules]
for thisComponent in exp_rulesComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "exp_rules" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_rules* updates
    if text_rules.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_rules.frameNStart = frameN  # exact frame index
        text_rules.tStart = t  # local t and not account for scr refresh
        text_rules.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_rules, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_rules.started')
        text_rules.setAutoDraw(True)
    
    # *key_resp_rules* updates
    waitOnFlip = False
    if key_resp_rules.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_rules.frameNStart = frameN  # exact frame index
        key_resp_rules.tStart = t  # local t and not account for scr refresh
        key_resp_rules.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_rules, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_rules.started')
        key_resp_rules.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_rules.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_rules.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_rules.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_rules.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_rules_allKeys.extend(theseKeys)
        if len(_key_resp_rules_allKeys):
            key_resp_rules.keys = _key_resp_rules_allKeys[-1].name  # just the last key pressed
            key_resp_rules.rt = _key_resp_rules_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in exp_rulesComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "exp_rules" ---
for thisComponent in exp_rulesComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_rules.keys in ['', [], None]:  # No response was made
    key_resp_rules.keys = None
thisExp.addData('key_resp_rules.keys',key_resp_rules.keys)
if key_resp_rules.keys != None:  # we had a response
    thisExp.addData('key_resp_rules.rt', key_resp_rules.rt)
thisExp.nextEntry()
# the Routine "exp_rules" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "you_ready" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_ready.keys = []
key_resp_ready.rt = []
_key_resp_ready_allKeys = []
# keep track of which components have finished
you_readyComponents = [text_youready, key_resp_ready]
for thisComponent in you_readyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "you_ready" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_youready* updates
    if text_youready.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_youready.frameNStart = frameN  # exact frame index
        text_youready.tStart = t  # local t and not account for scr refresh
        text_youready.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_youready, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_youready.started')
        text_youready.setAutoDraw(True)
    
    # *key_resp_ready* updates
    waitOnFlip = False
    if key_resp_ready.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_ready.frameNStart = frameN  # exact frame index
        key_resp_ready.tStart = t  # local t and not account for scr refresh
        key_resp_ready.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_ready, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_ready.started')
        key_resp_ready.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_ready.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_ready.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_ready.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_ready.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_ready_allKeys.extend(theseKeys)
        if len(_key_resp_ready_allKeys):
            key_resp_ready.keys = _key_resp_ready_allKeys[-1].name  # just the last key pressed
            key_resp_ready.rt = _key_resp_ready_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in you_readyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "you_ready" ---
for thisComponent in you_readyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_ready.keys in ['', [], None]:  # No response was made
    key_resp_ready.keys = None
thisExp.addData('key_resp_ready.keys',key_resp_ready.keys)
if key_resp_ready.keys != None:  # we had a response
    thisExp.addData('key_resp_ready.rt', key_resp_ready.rt)
thisExp.nextEntry()
# the Routine "you_ready" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('blocks.csv'),
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    trials_exp = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(CondsFile),
        seed=None, name='trials_exp')
    thisExp.addLoop(trials_exp)  # add the loop to the experiment
    thisTrials_exp = trials_exp.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_exp.rgb)
    if thisTrials_exp != None:
        for paramName in thisTrials_exp:
            exec('{} = thisTrials_exp[paramName]'.format(paramName))
    
    for thisTrials_exp in trials_exp:
        currentLoop = trials_exp
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_exp.rgb)
        if thisTrials_exp != None:
            for paramName in thisTrials_exp:
                exec('{} = thisTrials_exp[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "experiment" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        image1.setImage(topright_image)
        image2.setImage(topleft_image)
        image3.setImage(bottomright_image)
        image4.setImage(bottomleft_image)
        sound1.setSound(audiofile, secs=7.0, hamming=True)
        sound1.setVolume(1.0, log=False)
        # setup some python lists for storing info about the mouse
        mouse.x = []
        mouse.y = []
        mouse.leftButton = []
        mouse.midButton = []
        mouse.rightButton = []
        mouse.time = []
        mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        experimentComponents = [image_rect, image1, image2_rect, image2, image3_rect, image3, image4_rect, image4, sound1, mouse]
        for thisComponent in experimentComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "experiment" ---
        while continueRoutine and routineTimer.getTime() < 8.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_rect* updates
            if image_rect.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                image_rect.frameNStart = frameN  # exact frame index
                image_rect.tStart = t  # local t and not account for scr refresh
                image_rect.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_rect, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_rect.started')
                image_rect.setAutoDraw(True)
            if image_rect.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_rect.tStartRefresh + 7.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image_rect.tStop = t  # not accounting for scr refresh
                    image_rect.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_rect.stopped')
                    image_rect.setAutoDraw(False)
            
            # *image1* updates
            if image1.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                image1.frameNStart = frameN  # exact frame index
                image1.tStart = t  # local t and not account for scr refresh
                image1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image1.started')
                image1.setAutoDraw(True)
            if image1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image1.tStartRefresh + 7.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image1.tStop = t  # not accounting for scr refresh
                    image1.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image1.stopped')
                    image1.setAutoDraw(False)
            
            # *image2_rect* updates
            if image2_rect.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                image2_rect.frameNStart = frameN  # exact frame index
                image2_rect.tStart = t  # local t and not account for scr refresh
                image2_rect.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image2_rect, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image2_rect.started')
                image2_rect.setAutoDraw(True)
            if image2_rect.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image2_rect.tStartRefresh + 7.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image2_rect.tStop = t  # not accounting for scr refresh
                    image2_rect.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image2_rect.stopped')
                    image2_rect.setAutoDraw(False)
            
            # *image2* updates
            if image2.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                image2.frameNStart = frameN  # exact frame index
                image2.tStart = t  # local t and not account for scr refresh
                image2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image2.started')
                image2.setAutoDraw(True)
            if image2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image2.tStartRefresh + 7.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image2.tStop = t  # not accounting for scr refresh
                    image2.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image2.stopped')
                    image2.setAutoDraw(False)
            
            # *image3_rect* updates
            if image3_rect.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                image3_rect.frameNStart = frameN  # exact frame index
                image3_rect.tStart = t  # local t and not account for scr refresh
                image3_rect.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image3_rect, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image3_rect.started')
                image3_rect.setAutoDraw(True)
            if image3_rect.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image3_rect.tStartRefresh + 7.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image3_rect.tStop = t  # not accounting for scr refresh
                    image3_rect.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image3_rect.stopped')
                    image3_rect.setAutoDraw(False)
            
            # *image3* updates
            if image3.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                image3.frameNStart = frameN  # exact frame index
                image3.tStart = t  # local t and not account for scr refresh
                image3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image3.started')
                image3.setAutoDraw(True)
            if image3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image3.tStartRefresh + 7.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image3.tStop = t  # not accounting for scr refresh
                    image3.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image3.stopped')
                    image3.setAutoDraw(False)
            
            # *image4_rect* updates
            if image4_rect.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                image4_rect.frameNStart = frameN  # exact frame index
                image4_rect.tStart = t  # local t and not account for scr refresh
                image4_rect.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image4_rect, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image4_rect.started')
                image4_rect.setAutoDraw(True)
            if image4_rect.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image4_rect.tStartRefresh + 7.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image4_rect.tStop = t  # not accounting for scr refresh
                    image4_rect.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image4_rect.stopped')
                    image4_rect.setAutoDraw(False)
            
            # *image4* updates
            if image4.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                image4.frameNStart = frameN  # exact frame index
                image4.tStart = t  # local t and not account for scr refresh
                image4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image4.started')
                image4.setAutoDraw(True)
            if image4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image4.tStartRefresh + 7.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image4.tStop = t  # not accounting for scr refresh
                    image4.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image4.stopped')
                    image4.setAutoDraw(False)
            # start/stop sound1
            if sound1.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                sound1.frameNStart = frameN  # exact frame index
                sound1.tStart = t  # local t and not account for scr refresh
                sound1.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound1.started', tThisFlipGlobal)
                sound1.play(when=win)  # sync with win flip
            if sound1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound1.tStartRefresh + 7.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound1.tStop = t  # not accounting for scr refresh
                    sound1.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound1.stopped')
                    sound1.stop()
            # *mouse* updates
            if mouse.status == NOT_STARTED and t >= 1.0-frameTolerance:
                # keep track of start time/frame for later
                mouse.frameNStart = frameN  # exact frame index
                mouse.tStart = t  # local t and not account for scr refresh
                mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse.started', t)
                mouse.status = STARTED
                mouse.mouseClock.reset()
                prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
            if mouse.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mouse.tStartRefresh + 7.0-frameTolerance:
                    # keep track of stop time/frame for later
                    mouse.tStop = t  # not accounting for scr refresh
                    mouse.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.addData('mouse.stopped', t)
                    mouse.status = FINISHED
            if mouse.status == STARTED:  # only update if started and not finished!
                buttons = mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        try:
                            iter([image1, image2, image3, image4])
                            clickableList = [image1, image2, image3, image4]
                        except:
                            clickableList = [[image1, image2, image3, image4]]
                        for obj in clickableList:
                            if obj.contains(mouse):
                                gotValidClick = True
                                mouse.clicked_name.append(obj.name)
                        if gotValidClick:
                            x, y = mouse.getPos()
                            mouse.x.append(x)
                            mouse.y.append(y)
                            buttons = mouse.getPressed()
                            mouse.leftButton.append(buttons[0])
                            mouse.midButton.append(buttons[1])
                            mouse.rightButton.append(buttons[2])
                            mouse.time.append(mouse.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # abort routine on response
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in experimentComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "experiment" ---
        for thisComponent in experimentComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        sound1.stop()  # ensure sound has stopped at end of routine
        # store data for trials_exp (TrialHandler)
        trials_exp.addData('mouse.x', mouse.x)
        trials_exp.addData('mouse.y', mouse.y)
        trials_exp.addData('mouse.leftButton', mouse.leftButton)
        trials_exp.addData('mouse.midButton', mouse.midButton)
        trials_exp.addData('mouse.rightButton', mouse.rightButton)
        trials_exp.addData('mouse.time', mouse.time)
        trials_exp.addData('mouse.clicked_name', mouse.clicked_name)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-8.000000)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials_exp'
    
    
    # --- Prepare to start Routine "exp_congrats" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    key_resp_congrats.keys = []
    key_resp_congrats.rt = []
    _key_resp_congrats_allKeys = []
    # keep track of which components have finished
    exp_congratsComponents = [text_congrats, key_resp_congrats]
    for thisComponent in exp_congratsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "exp_congrats" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_congrats* updates
        if text_congrats.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_congrats.frameNStart = frameN  # exact frame index
            text_congrats.tStart = t  # local t and not account for scr refresh
            text_congrats.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_congrats, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_congrats.started')
            text_congrats.setAutoDraw(True)
        
        # *key_resp_congrats* updates
        waitOnFlip = False
        if key_resp_congrats.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_congrats.frameNStart = frameN  # exact frame index
            key_resp_congrats.tStart = t  # local t and not account for scr refresh
            key_resp_congrats.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_congrats, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_congrats.started')
            key_resp_congrats.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_congrats.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_congrats.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_congrats.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_congrats.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_congrats_allKeys.extend(theseKeys)
            if len(_key_resp_congrats_allKeys):
                key_resp_congrats.keys = _key_resp_congrats_allKeys[-1].name  # just the last key pressed
                key_resp_congrats.rt = _key_resp_congrats_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in exp_congratsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "exp_congrats" ---
    for thisComponent in exp_congratsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_congrats.keys in ['', [], None]:  # No response was made
        key_resp_congrats.keys = None
    blocks.addData('key_resp_congrats.keys',key_resp_congrats.keys)
    if key_resp_congrats.keys != None:  # we had a response
        blocks.addData('key_resp_congrats.rt', key_resp_congrats.rt)
    # the Routine "exp_congrats" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1.0 repeats of 'blocks'


# --- Prepare to start Routine "End" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
end_key.keys = []
end_key.rt = []
_end_key_allKeys = []
# keep track of which components have finished
EndComponents = [end_text, end_key]
for thisComponent in EndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "End" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *end_text* updates
    if end_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_text.frameNStart = frameN  # exact frame index
        end_text.tStart = t  # local t and not account for scr refresh
        end_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_text, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'end_text.started')
        end_text.setAutoDraw(True)
    
    # *end_key* updates
    waitOnFlip = False
    if end_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_key.frameNStart = frameN  # exact frame index
        end_key.tStart = t  # local t and not account for scr refresh
        end_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_key, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'end_key.started')
        end_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_key.status == STARTED and not waitOnFlip:
        theseKeys = end_key.getKeys(keyList=['space'], waitRelease=False)
        _end_key_allKeys.extend(theseKeys)
        if len(_end_key_allKeys):
            end_key.keys = _end_key_allKeys[-1].name  # just the last key pressed
            end_key.rt = _end_key_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "End" ---
for thisComponent in EndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if end_key.keys in ['', [], None]:  # No response was made
    end_key.keys = None
thisExp.addData('end_key.keys',end_key.keys)
if end_key.keys != None:  # we had a response
    thisExp.addData('end_key.rt', end_key.rt)
thisExp.nextEntry()
# the Routine "End" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
