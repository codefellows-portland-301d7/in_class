$('div').hide()
$('.one').show()

page('/one', function() {
  $('div').hide()
  $('.one').show()
})

page('/two', function() {
  $('div').hide()
  $('.two').show()
})
page()
