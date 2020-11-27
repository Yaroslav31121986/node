const rp = require('request-promise')

module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Имя города не можить быть пустым')
    }

    const KEY = 'bc5e6bc15b5cc41327fbc2d913154803'
    const uri = 'http://api.openweathermap.org/data/2.5/weather '

    // console.log('City:', city)
    const option = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: "imperial"
        },
        json: true
    }

    try {
        const data = await rp(option)
        const celsius = (data.main.temp - 32) * 5/9

        return {weather: `${data.name}: ${celsius.toFixed(0)}`, error: null}
    } catch (e) {
        // console.log(e)
        return {weather: null, error: e.error.message}
    }
}