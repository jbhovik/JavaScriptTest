createLinuxOs = function(){
  var myLinux = new Linux('Linux is open source!', 'Tux the penguin');
  myLinux.printMessage();
  myLinux.printMascot();
}

createMacOs = function(){
  var myMac = new Mac('Think different', 'Behold the Apple Watch!');
  myMac.printMessage();
  myMac.showAppleWatch();
}

createWindowsOs = function(){
  var myWindows = new Windows('We don\'t have a slogan, but we have Xbox!' , 'Others may have a lot, but we\'ve got Steve Ballmer!');
  myWindows.printMessage();
  myWindows.printTheBallmer();
}
