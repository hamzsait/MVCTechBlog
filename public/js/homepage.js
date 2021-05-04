buttons = document.querySelectorAll(".btn-primary")

for (button of buttons){
    button.addEventListener("click",async(res) => {
        window.location.href = "edit/" + button.id.split(" ")[1]
    })
}