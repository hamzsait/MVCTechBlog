buttons = document.querySelectorAll(".btn")

for (button of buttons){
    button.addEventListener("click",async(res) => {
        const response =  await fetch(`/api/projects/${(res.target.id).split(" ")[1]}`,{
            method: 'DELETE',
       })
    })
}