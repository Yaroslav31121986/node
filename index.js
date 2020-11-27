const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express()

//bc5e6bc15b5cc41327fbc2d913154803

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.render('index', {weather: null, error: null});
})

app.post('/', async (req, res) => {
    const {city} = req.body
    // console.log(city)
    const {weather, error} = await weatherRequest(city)
    // console.log('Weather', weather)
    // console.log('Error', error)
    res.render('index', {weather, error})
})

app.listen(3000, () => {
    console.log('чо то там ...!!!  Чо то добавил');
})