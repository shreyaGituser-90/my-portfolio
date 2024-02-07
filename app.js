(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  // document.body.classList.add("sbmt-txt");
  // var element = document.querySelectorAll(".main-btn");
  // element.classList.add("sbmt-txt");
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  document.getElementById("sbmt").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Send the email
    emailjs
      .sendForm(
        "service_b9oozlp",
        "template_oa28jfv",
        form.current,
        "CBWhojjersGoi5TSt"
      )
      .then(
        function (response) {
          console.log("Success!", response.status, response.text);
        },
        function (error) {
          console.log("Failed...", error);
        }
      );
  });
})();
function handleButtonClick() {
  emailjs
    .sendForm(
      "service_b9oozlp",
      "template_oa28jfv",
      form.current,
      "CBWhojjersGoi5TSt"
    )
    .then(
      function (response) {
        console.log("Success!", response.status, response.text);
      },
      function (error) {
        console.log("Failed...", error);
      }
    );
}
