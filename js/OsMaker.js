createOs = function(typeOfOs){
  if (typeOfOs === 'Os') {
    var myOs = Os.create();
    return myOs;
  }
  else if (typeOfOs === 'Linux'){
    var myLinux = Linux.create();
    return myLinux;
  }
  else if (typeOfOs === 'Mac'){
    var myMac = Mac.create();
    return myMac;
  }
  else if (typeOfOs === 'Windows'){
    var myWindows = Windows.create();
    return myWindows;
  }
}

