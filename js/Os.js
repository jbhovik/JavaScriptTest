function Os(message) {
  this.message = message;
}

Os.create = function(){
  return new Os('Welcome to the generic OS! I have no attribute.');
}

Os.prototype.printMessage = function(){
  alert(this.message);
};