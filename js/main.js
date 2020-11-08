/* Hamburger Menu Icon */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/* Contact Form  */
$(document).ready(function () {
  $("submit").click(function (event) {
    var name = $(".name").val();
    var company = $(".company").val();
    var email = $(".email").val();
    var phone = $(".phone").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (name  >= 1) {
      statusElm.append("<div>Name is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div> Name is not valid</div>");
    }

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Email is not valid</div>");
    }

    if (phone>= 8) {
      statusElm.append("<div>Phone Number is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Phone Number is not valid</div>");
    }

    if (company.length >= 1) {
      statusElm.append("<div>Company Name is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Comapny Name is not valid</div>");
    }

    if (message.length >= 5) {
      statusElm.append("<div>Message is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Message is not valid</div>");
    }
  });
});
