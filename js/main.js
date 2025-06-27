document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section--show");
      }
    });
  }, {
    threshold: 0.2,
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

 function versturen(){
      const formulier = document.querySelector('.contact__form');
      const mailtoValue = formulier.querySelector('input[name="send_to_mail"]').value;
      const mailCCValue = formulier.querySelector('input[name="email"]').value;
      const naam = formulier.querySelector('input[name="naam"]').value;
      const bericht = formulier.querySelector('textarea[name="bericht"]').value;

      const subject = `Bericht van ${encodeURIComponent(naam)}`;
      const body = `Beste ${encodeURIComponent(naam)}%0D%0A${encodeURIComponent(bericht)}`;

      const mailtoLink = `mailto:${mailtoValue}?cc=${mailCCValue}&subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    }