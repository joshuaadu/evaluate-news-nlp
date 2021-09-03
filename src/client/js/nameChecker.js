function checkForName(url) {
    const testUrl = new RegExp(/^(http|https):\/\/[^ "]+$/)
    return testUrl.test(urls)
}

export { checkForName }
