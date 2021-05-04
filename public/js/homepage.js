buttons = document.querySelectorAll(".btn-primary")
buttons.forEach(async button =>{
    button.addEventListener("click",async(res) => {
        window.location.href = "edit/" + button.id.split(" ")[1]
    })
})