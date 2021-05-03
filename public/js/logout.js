async function logOut(){
    const response =  await fetch('/api/users/logout',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
}
document.querySelector("#logoutButton").addEventListener("click",logOut)
