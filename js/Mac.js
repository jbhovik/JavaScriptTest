Mac.prototype = Object.create(Os.prototype);

function Mac(message, appleWatch) {
  this.appleWatch = appleWatch;
  this.childMessage = 'The Mac child message';
  Os.call(this, message);
}

Mac.create = function(){
  return new Mac('Think different.', 'Behold the Apple Watch!');
}

Mac.prototype.showAppleWatch = function(){
  alert(this.appleWatch);
}

Mac.prototype.printMessage = function(){
  alert(this.childMessage);
  Os.prototype.printMessage.call(this);
};
