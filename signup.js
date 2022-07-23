let getLS = JSON.parse(localStorage.getItem("signup")) || []
let form = document.querySelector("form").addEventListener("submit",function(e){
    event.preventDefault()
    let obj={
        userName:document.querySelector("#name").value,
        userEmail:document.querySelector("#email").value,
        userPassword:document.querySelector("#password").value,
    }
    // console.log(obj)
    if(obj.userName == "" || obj.userEmail === "" ||obj.userPassword === ""){
        alert("Field Empty");
        return
    }
    getLS.push(obj)
    localStorage.setItem("signup",JSON.stringify(getLS))
    window.location.href="signin.html"
    
})