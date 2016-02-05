function Cart() {
  this.contents = {};
  this.total = 0;
  var items = new ItemList();
  items.loadData();
  this.catalogue = items;
  this.voucherCodes = ['voucher1', 'voucher2', 'voucher3'];
}

Cart.prototype.addItem = function(item, amount) {
  typeof this.contents[item] === 'undefined' ? this.contents[item] = amount : this.contents[item] += amount;
  this._calculateTotal();
  this._adjustStockLevel(item, amount);
};

Cart.prototype.removeItem = function(item, amount) {
  if (typeof this.contents[item] === 'undefined') throw new Error('Not possible');
  if (this.contents[item] < amount) throw new Error('Not possible');
  this.contents[item] -= amount;
  this._calculateTotal();
};

Cart.prototype._calculateTotal = function() {
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
  this._calculateTotal();
};

Cart.prototype.applyVoucher = function(code) {
  this._checkForEmptyCart();
  this._checkVoucherCodes(code);
  this._applyVoucherCodes(code);
};

Cart.prototype._checkForEmptyCart = function() {
  if (Object.keys(this.contents).length === 0) throw new Error('Please select items first');
};

Cart.prototype._checkVoucherCodes = function(code) {
  if (this.voucherCodes.indexOf(code) < 0) throw new Error('Wrong coupon code');
};

Cart.prototype._applyVoucherCodes = function(code) {
  if (code === 'voucher1') this._applyVoucherOne();
  if (code === 'voucher2') this._applyVoucherTwo();
  if (code === 'voucher3') this._applyVoucherThree();
};

Cart.prototype._applyVoucherOne = function() {
  this.total -= 5;
};

Cart.prototype._applyVoucherTwo = function() {
  if (this.total >= 50) {
    this.total -= 10;
  } else {
    throw new Error('Cannot use this discount');
  }
};

Cart.prototype._applyVoucherThree = function() {
  if (this.total >= 75 && this._checkForFootwear()) {
    this.total -= 15;
  } else {
    throw new Error('Cannot use this discount');
  }
};

Cart.prototype._checkForFootwear = function() {
  var categoryArray = [];
  for (var key in this.contents) {
    categoryArray.push(this.catalogue.items[key].category);
  }
  return checkAny(categoryArray, "Women's Footwear") || checkAny(categoryArray, "Men's Footwear");
};

function checkAny(array, value) {
  return array.some(function(arrayValue) {
    return value === arrayValue;
  });
}

Cart.prototype.showStock = function(item) {
  return this.catalogue.items[item].stock;
};

Cart.prototype._adjustStockLevel = function(item, amount) {
  var newAmount = String(this.catalogue.items[item].stock - amount);
  this.catalogue.items[item].stock = newAmount;
};
