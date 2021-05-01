document.querySelector("#loginButton").addEventListener("click", async () => {
    const username = (document.querySelector("#floatingInput").value)
    const password = (document.querySelector("#floatingPassword").value)
    console.log(username)
    console.log(password)
    if(username && password){

       const response =  await fetch('/api/users/login',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: { 'Content-Type': 'application/json' },
       })

       if (response.ok) {
        document.location.replace('/');
       } else {
        alert('Failed to log in.');
       }

    }

})