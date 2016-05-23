/*  Begin suggested demo by page.js */
page();
page('/', index);
page('/contact', contact);


function index() {
    document.querySelector('p')
      .textContent = "Index page generated on the client!";
};

function contact() {
  document.querySelector('p')
    .textContent = "Contact page generated on the client!";
};
