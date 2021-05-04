getSavedData = async () => {
    projectName = document.querySelector("#projectName").value
    projectDescription = document.querySelector("#projectDescription").value
    user = document.querySelector("#username").innerHTML.trim()

    output = {
        name:projectName,
        description:projectDescription,
        user:user
    }
    return output
}

document.querySelector("#saveButton").addEventListener("click", async function(){
    
    const body = await getSavedData()
    await fetch(`/api/projects/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })//.then(response => window.location.href = "/")
})