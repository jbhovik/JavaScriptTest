Windows.prototype = Object.create(Os.prototype);

function Windows(message, theBallmer) {
  this.theBallmer = theBallmer;
  Os.call(this, message);
}

Windows.prototype.printTheBallmer = function(){
  alert(this.theBallmer);
}
