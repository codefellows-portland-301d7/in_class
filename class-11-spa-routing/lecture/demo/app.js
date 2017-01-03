function index() {
  // $('p').text('HOME PAGE');
  document.getElementById('content').textContent = 'HOME PAGE';
}

function contact() {
  document.getElementById('content').textContent = 'CONTACT INFO';
  setTimeout(function() {
    page('/users');
  }, 1000)
}

function users() {
  var c = document.getElementById('content');
  var list = '<ul><li>user one</li><li>user two</li></ul>';
  c.innerHTML = list;
}

page('/', index);
page('/contact', contact);
page('/users', users);

page();
