var track = 0;

function preload() {  // preload() runs once
  soundJungle = loadSound('sound/jungle.mp3');
  soundThunderstorm = loadSound('sound/thunderstorm.wav');
  soundHighway = loadSound('sound/highway.wav');
  soundRiot = loadSound('sound/riot.wav');
  soundWar = loadSound('sound/war.wav');
}

function setup(){
  console.log("Ready to listen to Input -->");

  soundJungle.loop();
  soundJungle.setVolume(1);

  soundThunderstorm.setVolume(0);
  soundThunderstorm.loop();

  soundHighway.setVolume(0);
  soundHighway.loop();

  soundRiot.setVolume(0);
  soundRiot.loop();

  soundWar.setVolume(0);
  soundWar.loop();
}

function keyPressed() {
  if(keyCode == UP_ARROW){
    console.log("clicked on trigger_1");
    httpGet('/trigger_1');
    if(track < 5) {
      track++;
    }
    else {
      track = 1;
    }
    console.log(track);
    if(track == 1) {
      soundRiot.fade(0,3);
      soundWar.fade(0,3);
      soundJungle.setVolume(1);
    }
    else if(track == 2) {
      soundJungle.setVolume(.7);
      soundThunderstorm.fade(1,5);
    }
    else if(track == 3) {
      soundThunderstorm.fade(0,3);
      soundJungle.setVolume(.5);
      soundHighway.fade(1,5);
    }
    else if(track == 4) {
      soundHighway.fade(0,3);
      soundJungle.setVolume(.3);
      soundRiot.fade(1,5);
    }
    else if(track == 5) {
      soundRiot.fade(.3,3);
      soundJungle.setVolume(.1);
      soundWar.fade(1,5);
    }
  }
}
