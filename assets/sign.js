let emailInp=document.querySelector('#email')
let passwordInp = document.querySelector("#password");
let siginInp = document.querySelector("#form")
emailInp.addEventListener('click',function(){
    fetch(" http://localhost:3000/login",{
        method:"POST"
        body : JSON.stringify ({
            userId: 1,
            title: "Fix my bugs",
            completed: false
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    .then((res) => res.json())
    .then((data) => {
        
    })
})