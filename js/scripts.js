$(document).ready(function () {
  $(".anchor").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $('.ui.sidebar').sidebar({
    context: $('#front-content'),
    transition: 'overlay'
  }).sidebar('attach events', '#mobile_item');

  $('.ui.checkbox')
    .checkbox()
    ;

  $('.ui.accordion')
    .accordion()
    ;
})