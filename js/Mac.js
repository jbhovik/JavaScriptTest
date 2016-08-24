Mac.prototype = Object.create(Os.prototype);

function Mac(message, appleWatch) {
  this.appleWatch = appleWatch;
  Os.call(this, message);
}

Mac.create = function(){
  return new Mac('Think different.', 'Behold the Apple Watch!');
}

Mac.prototype.showAppleWatch = function(){
  alert(this.appleWatch);
}
