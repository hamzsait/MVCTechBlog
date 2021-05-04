document.querySelector("#deleteButton").addEventListener("click", async function(){
    id = document.querySelector("#projectId").innerHTML.trim()
    console.log(id)
    await fetch(`/api/projects/${id}`,{
        method: 'DELETE',
    }).then(response => window.location.href = "/")
})

getSavedData = async () => {
    id = document.querySelector("#projectId").innerHTML.trim()
    projectName = document.querySelector("#projectName").value
    projectDescription = document.querySelector("#projectDescription").value
    user = document.querySelector("#username").innerHTML.trim()

    output = {
        id:id,
        name:projectName,
        description:projectDescription,
        user:user
    }
    return output
}

document.querySelector("#saveButton").addEventListener("click", async function(){
    
    const body = await getSavedData()
    await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => window.location.href = "/")
})