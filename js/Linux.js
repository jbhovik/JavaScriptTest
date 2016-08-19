Linux.prototype = Object.create(Os.prototype);

function Linux(message, mascot) {
  this.mascot = mascot;
  Os.call(this, message);
}

Linux.prototype.printMascot = function(){
  alert(this.mascot);
}


