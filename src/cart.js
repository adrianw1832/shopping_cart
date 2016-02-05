function Cart() {
  this.contents = {};
}

Cart.prototype.addItem = function(item, amount) {
  typeof this.contents[item] === 'undefined' ? this.contents[item] = amount : this.contents[item] += amount;
};

Cart.prototype.removeItem = function(item, amount) {
  this.contents[item] -= amount;
};
