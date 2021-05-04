document.querySelector("#deleteButton").addEventListener("click", async function(){
    id = document.querySelector("#projectId").innerHTML.trim()
    console.log(id)
    await fetch(`/api/projects/${id}`,{
        method: 'DELETE',
    }).then(response => window.location.href = "/")
})

document.querySelector("#saveButton").addEventListener("click", async function(){
    id = document.querySelector("#projectId").innerHTML.trim()
    projectName = document.querySelector("#projectName").value
    projectDescription = document.querySelector("#projectDescription").innerHTML
    user = document.querySelector("#username").innerHTML.trim()

    output = {
        id:id,
        name:projectName,
        description:projectDescription,
        user:user
    }
    console.log(output)
    await fetch(`api/projects/${id}`,{
        method:'PUT',
        body:output
    })
})