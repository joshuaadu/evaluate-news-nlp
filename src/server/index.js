var path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


//  formdata.append('key', process.env.MeaningCloudAPI);
//  formdata.append('url', url);
//  formdata.append('lang', 'en');  // 2-letter code, like en es fr ...


app.post('/result', async (req, res) => {
    const apiKey = process.env.MeaningCloudAPI
    const lang = 'en'
    console.log(req.body, apiKey)
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${req.body.text}&lang=en`);
    try {
        // console.log(response.json())
        const result = await response.json()
        console.log(result.confidence)
        res.send(result)
    } catch (error) {
        console.log('error', error)
    }


})
