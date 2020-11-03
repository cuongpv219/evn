$('.ui.sidebar').sidebar({
  context: $('#front-content'),
  transition: 'overlay'
}).sidebar('attach events', '#mobile_item');

$('.ui.checkbox')
  .checkbox()
  ;