Mac.prototype = Object.create(Os.prototype);

function Mac(message, appleWatch) {
  this.appleWatch = appleWatch;
  Os.call(this, message);
}

Mac.prototype.showAppleWatch = function(){
  alert(this.appleWatch);
}
