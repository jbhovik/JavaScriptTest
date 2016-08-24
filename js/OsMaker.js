var myLinux;
var myMac;
var myWindows;
var myOs;

createOs = function(){
  if (myOs instanceof Os === false) {
    myOs = new Os('Welcome to the generic OS! I have no attribute.');
  }
}

printOsMessage = function(){
  myOs.printMessage();
}

createLinuxOs = function(){
  if (myLinux instanceof Os === false) {
    myLinux = Linux.create();
  }
}

printLinuxMessage = function(){
  myLinux.printMessage();
}

printLinuxMascot = function(){
  myLinux.printMascot();
}

createMacOs = function(){
  if (myMac instanceof Os === false) {
    myMac = Mac.create();
  }
}

printMacMessage = function(){
  myMac.printMessage();
}

printMacAttribute = function(){
  myMac.showAppleWatch();
}

createWindowsOs = function(){
  if (myWindows instanceof Os === false) {
    myWindows = Windows.create();
  }
}

printWindowsMessage = function(){
  myWindows.printMessage();
}

printWindowsStarPlayer = function(){
  myWindows.printTheBallmer();
}