const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const username=form.Username.value
    const password=form.password.value
    const autheticet =authentication(username,password)
        if (autheticet) {

           window.location.href="Admin.html"
            
        }else{
            // alert("worng")
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something Went Wrong! Username Password Is Incorrect",
              });
        }
    
})

// function cheking username and password

function authentication(username,password){
    if(username==="swappy"&& password==="9765917495"){
        return true
    }
    else{
        return false
    }
}