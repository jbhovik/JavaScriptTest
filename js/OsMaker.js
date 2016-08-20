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
    myLinux = new Linux('Linux is open source!', 'Tux the Linux penguin.');
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
    myMac = new Mac('Think different.', 'Behold the Apple Watch!');
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
    myWindows = new Windows('We don\'t have a slogan, but we have Xbox!' , 'Others may have a lot, but we\'ve got Steve Ballmer!');
  }
}

printWindowsMessage = function(){
  myWindows.printMessage();
}

printWindowsStarPlayer = function(){
  myWindows.printTheBallmer();
}