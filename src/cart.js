function Cart() {
  this.contents = {};
  this.total = 0;
  var items = new ItemList();
  items.loadData();
  this.catalogue = items;
}

Cart.prototype.addItem = function(item, amount) {
  typeof this.contents[item] === 'undefined' ? this.contents[item] = amount : this.contents[item] += amount;
  this.calculateTotal();
};

Cart.prototype.removeItem = function(item, amount) {
  if (typeof this.contents[item] === 'undefined') throw new Error('Not possible');
  if (this.contents[item] < amount) throw new Error('Not possible');
  this.contents[item] -= amount;
  this.calculateTotal();
};

Cart.prototype.calculateTotal = function() {
  var priceArray = [], amountArray = [], sum = 0;
  for (var key in this.contents) {
    priceArray.push(this.catalogue.items[key].price.substring(1) * 1);
    amountArray.push(this.contents[key]);
  }
  for(var i = 0; i < priceArray.length; i++) {
    sum += priceArray[i] * amountArray[i];
  }
  this.total = sum;
};

Cart.prototype.resetTotal = function() {
  this.contents = {};
  this.calculateTotal();
};

Cart.prototype.applyVoucher = function(code) {
  this._applyVoucherCodes(code);
};

Cart.prototype._applyVoucherCodes = function(code) {
  if (code === 'voucher1') this._applyVoucherOne();
};

Cart.prototype._applyVoucherOne = function() {
  this.total -= 5;
};

