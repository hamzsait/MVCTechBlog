document.querySelector("#signupButton").addEventListener("click", async () => {
    const username = (document.querySelector("#floatingInput").value)
    const password = (document.querySelector("#floatingPassword").value)
    const confirmPassword = (document.querySelector("#confirmPassword").value)
    console.log(username)
    console.log(password)
    console.log(confirmPassword)
    if(username && password && confirmPassword){

       const response =  await fetch('/api/users/signup',{
            method: 'POST',
            body: JSON.stringify({username,password,confirmPassword}),
            headers: { 'Content-Type': 'application/json' },
       })

       if (response.ok) {
        document.location.replace('/loginConfirm');
       } else {
        alert('Failed to sign up.');
       }

    }

})