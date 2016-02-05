function ItemList() {
  this.items = {};
}

ItemList.prototype.loadData = function() {
  var mock = [
             [ 'Almond Toe Court Shoes, Patent Black', "Women's Footwear", '£99.00', '5'],
             [ 'Suede Shoes, Blue', "Women's Footwear", '£42.00', '4'],
             [ 'Leather Driver Saddle Loafers, Tan', "Men's Footwear", '£34.00', '12'],
             [ 'Flip Flops, Red', "Men's Footwear", '£19.00', '6'],
             [ 'Flip Flops, Blue', "Men's Footwear", '£19.00', '0'],
             [ 'Gold Button Cardigan, Black', "Women's Casualwear", '£167.00', '6'],
             [ 'Cotton Shorts, Medium Red', "Women's Casualwear", '£30', '5'],
             [ 'Fine Stripe Short Sleeve Shirt, Grey', "Men's Casualwear", '£49.99', '9'],
             [ 'Fine Stripe Short Sleeve Shirt, Green', "Men's Casualwear", '£39.99', '3'],
             [ 'Sharkskin Waistcoat, Charcoal', "Men's Formalwear", '£75.00', '2'],
             [ 'Lightweight Patch Pocket Blazar, Deer', "Men's Formalwear", '£175.00', '1'],
             [ 'Bird Print Dress, Black', "Women's Formalwear", '£270.00',  '10'],
             [ 'Mid Twist Cut-out Dress, Pink', "Women's Formalwear", '£540.00', '5']
             ];
  var tags = ['category', 'price', 'stock'];
  for (var i = 0; i < mock.length; i++) {
    var data = {};
    for (var j = 0; j < tags.length; j++) {
      data[tags[j]] = mock[i][j + 1];
    }
    this.items[mock[i][0]]= data;
  }
};
