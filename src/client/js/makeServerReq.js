require("regenerator-runtime/runtime")
// require("node-fetch")

const serverRequest = (url) => {
    meaningCloudRequest(url)
}

const meaningCloudRequest = async (url) => {
    
    

    const postInfo = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(url),
    }

    const response = await fetch('http://localhost:8081/result', postInfo)

    try {
        const result = await response.json()
        console.log(result)
        updateUI(result)
    } catch (error) {
        console.log('error', error)
    }
    

}

const updateUI = (data) => {
    document.querySelector('.table-body').style.display = 'block'
    document.getElementById('agreement').textContent = data.agreement
    document.getElementById('subjectivity').textContent = data.subjectivity
    document.getElementById('irony').textContent = data.irony
    document.getElementById('confidence').textContent = data.confidence
    document.getElementById('score-tag').textContent = data.score_tag



    // console.log(data)
    
    
}



export {serverRequest}