let form = document.querySelector("form")
let getLS = JSON.parse(localStorage.getItem("signup")) || []
// console.log(getLS)
form.addEventListener("submit",function(event){
    event.preventDefault()
    if(getLS.length === 0){
        alert("No user until now")
        return
    }
    let obj = {
        userEmail:document.querySelector("#email").value,
        userPassword:document.querySelector("#password").value,
    }

    let flag = false;
    getLS.forEach(function(ele) {
        if(ele.userEmail === obj.userEmail && ele.userPassword === obj.userPassword){
            flag = true;
            localStorage.setItem("signin",JSON.stringify(ele))
            // console.log(obj);
            alert("Sign up Succesfull")
            window.location.href="index.html"
        }
    });
    if(flag === false){
        alert("User does not Exist")
    }
       
})