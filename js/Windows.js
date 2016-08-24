Windows.prototype = Object.create(Os.prototype);

function Windows(message, theBallmer) {
  this.theBallmer = theBallmer;
  this.childMessage = 'The Windows child message';
  Os.call(this, message);
}

Windows.create = function(){
  return new Windows('We don\'t have a slogan, but we have Xbox!' , 'Others may have a lot, but we\'ve got Steve Ballmer!');
}

Windows.prototype.printTheBallmer = function(){
  alert(this.theBallmer);
}

Windows.prototype.printMessage = function(){
  alert(this.childMessage);
  Os.prototype.printMessage.call(this);
};
