createOs = function(typeOfOs){
  if (typeOfOs === 'Os') {
    return Os.create();
  }
  else if (typeOfOs === 'Linux'){
    return Linux.create();
  }
  else if (typeOfOs === 'Mac'){
    return Mac.create();
  }
  else if (typeOfOs === 'Windows'){
    return Windows.create();
  }
}

