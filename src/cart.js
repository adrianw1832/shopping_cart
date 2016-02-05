function Cart() {
  this.contents = {};
}

Cart.prototype.addItem = function(item, amount) {
  typeof this.contents[item] === 'undefined' ? this.contents[item] = amount : this.contents[item] += amount;
};

Cart.prototype.removeItem = function(item, amount) {
  if (typeof this.contents[item] === 'undefined') throw new Error('Not possible');
  if (this.contents[item] < amount) throw new Error('Not possible');
  this.contents[item] -= amount;
};
