$(document).ready(function() {
  var cart = new Cart();
  var nameArray = Object.keys(cart.catalogue.items);

  var update = function() {
  var itemArray = [], amountArray = [];
  for (var key in cart.contents) {
    itemArray.push(key);
    amountArray.push(cart.contents[key]);
  }
    $('#contents').text(itemArray);
    $('#amounts').text(amountArray);
    $('#total').html(cart.total);
    for (var i = 0; i < nameArray.length; i++) {
      var name = nameArray[i];
      $('.item' + i).html(cart.catalogue.items[name].stock);
    }
  };

  var buildButtons = function() {
    for (i = 0; i < nameArray.length; i++) {
      var name = nameArray[i];
      var add = $('<input type="submit">').val('+').data('name', name)
      .on('click', $.proxy(addItem, this));
      var remove = $('<input type="submit">').val('-').data('name', name)
      .on('click', $.proxy(removeItem, this));
      var stock = $('<p>').addClass('item' + i);
      var li = $('<li>').append(remove).append(name).append(add).append(stock);
      $('.buttons').append(li);
    }
  };

  var addItem = function(button) {
    var value = $(button.currentTarget).data().name;
    cart.addItem(value, 1);
    update();
  };

  var removeItem = function(button) {
    var value = $(button.currentTarget).data().name;
    cart.removeItem(value, 1);
    update();
  };

  $('#enter').click(function() {
    var code = $('.form').val();
    cart.applyVoucher(code);
    update();
  });

  buildButtons();
  update();
});
