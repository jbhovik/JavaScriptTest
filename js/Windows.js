Windows.prototype = Object.create(Os.prototype);

function Windows(message, theBallmer) {
  this.theBallmer = theBallmer;
  Os.call(this, message);
}

Windows.create = function(){
  return new Windows('We don\'t have a slogan, but we have Xbox!' , 'Others may have a lot, but we\'ve got Steve Ballmer!');
}

Windows.prototype.printTheBallmer = function(){
  alert(this.theBallmer);
}
