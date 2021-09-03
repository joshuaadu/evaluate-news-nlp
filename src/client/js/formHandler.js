function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    document.querySelector('.table-body').style.display = 'none'
    let formText = document.getElementById('text').value
    if(Client.checkForName(formText)) {
        const data = {text: formText}
        console.log(!Client.serverRequest(data))// document.querySelector('.result-error-message').style.display = 'none'
        console.log("::: Form Submitted :::")

    }else {
        alert('Please enter a valid url!')
    }
    

}






export { handleSubmit }
