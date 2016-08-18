function Linux() {
  this.message = 'Linux message';
}

Linux.prototype = Object.create(Os.prototype);

Linux.prototype.printLinuxMessage = function(){
  alert(this.message);
};


