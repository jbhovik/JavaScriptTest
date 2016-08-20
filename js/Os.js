function Os(message) {
  this.message = message;
}

Os.prototype.printMessage = function(){
  alert(this.message);
};