let form = document.querySelector("#form");
let email =  document.querySelector("#email");
let password = document.querySelector("#password");


form.addEventListener("submit",function(dets)
{ 
    dets.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let email_test = emailRegex.test(email.value);
    let password_test = passwordRegex.test(email.value);

    if(!email_test)
    {
        document.querySelector("#email_error").textContent = "Email incorrect";
        document.querySelector("#email_error").style.visibility = "visible"; 
    }

    if(!password_test)
    {
        document.querySelector("#password_error").textContent = "Password incorrect";
        document.querySelector("#password_error").style.visibility = "visible";
    }
})