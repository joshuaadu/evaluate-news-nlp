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
        return result
    } catch (error) {
        console.log('error', error)
    }
    

}

export {meaningCloudRequest}