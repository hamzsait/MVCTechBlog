document.querySelector("#signupButton").addEventListener("click", async () => {
    const username = (document.querySelector("#floatingInput").value)
    const password = (document.querySelector("#floatingPassword").value)
    const confirmPassword = (document.querySelector("#confirmPassword").value)
    console.log(username)
    console.log(password)
    console.log(confirmPassword)
    if(username && password && confirmPassword){
        if(password != confirmPassword){
            alert("Passwords do not match")
        }
        if(password.length < 8){
            alert("Password is too short")
        }
        else{
            const response =  await fetch('/api/users/signup',{
                    method: 'POST',
                    body: JSON.stringify({username,password,confirmPassword}),
                    headers: { 'Content-Type': 'application/json' },
            })

            if (response.ok) {
                document.location.replace('/signupConfirm');
            } else if(response.status == 403) {
                alert("User already exits!")
            } else {
                alert('Failed to sign up.');
            }
        }
    }
    else{
        alert("Please fill out all fields below")
    }
})