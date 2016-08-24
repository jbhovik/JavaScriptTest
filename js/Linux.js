Linux.prototype = Object.create(Os.prototype);

function Linux(message, mascot) {
  this.mascot = mascot;
  Os.call(this, message);
}

Linux.create = function(){
  return new Linux('Linux is open source!', 'Tux the Linux penguin.');
}

Linux.prototype.printMascot = function(){
  alert(this.mascot);
}
