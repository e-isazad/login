let emailInp = document.querySelector("#email");
let passwordInp = document.querySelector("#password");
let siginInp = document.querySelector(".submit");
let warning = document.querySelector(".warning");

siginInp.addEventListener("click", function () {
  fetch(" http://localhost:3000/login")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        if (
          emailInp.value == user.email &&
          passwordInp.value == user.password
        ) {
        } else if (
          emailInp.value.trim().length<1  ||
          passwordInp.value.trim().length<1
        ) {
          alert("bos qala bilmez");
        } else {
          warning.innerHTML = `
                    <a target="_blank" href="./sign.htm">sign in</a>
                    `;
        }
        emailInp.value = "";
        passwordInp.value = "";
      });
    });
});
