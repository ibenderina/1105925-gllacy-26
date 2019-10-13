(function() {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();

(function() {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

// Выше реализация методов для IE, без нее глючит форма обратной связи, взяла с сайта learn JavaScript

var call_back_wrapper = document.querySelector(".call-back--wrapper");
call_back_wrapper.addEventListener("click", function (evt) {
  var el = evt.target;
  if (!(el && evt.target.closest("form"))) {
    call_back_wrapper.classList.remove("active");
  }
});

var address_button = document.querySelector(".address__button");
address_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  call_back_wrapper.classList.add("active");
});

var call_back_form = document.querySelector('.call-back__button');
call_back_form.addEventListener('click', function (evt) {
  var form = evt.target.closest('form');
  if (!form.checkValidity()) {
    var callback_window = form.closest('.call-back__window');
    callback_window.classList.add('call-back--error');
    setTimeout(function () {
      callback_window.classList.remove('call-back--error');
    }, 400);
  }
});












