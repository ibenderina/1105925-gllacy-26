var call_back_wrapper = document.querySelector(".call-back--wrapper");
call_back_wrapper.addEventListener("click", function (evt) {
  var el = evt.target;
  if (!(el && evt.target.closest("form"))) {
    call_back_wrapper.classList.remove("active");
  }
});

var address__button = document.querySelector(".address__button");
address__button.addEventListener("click", function (evt) {
  evt.preventDefault();
  call_back_wrapper.classList.add("active");
});
















