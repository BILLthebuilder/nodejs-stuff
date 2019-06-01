const request = require('request');
const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/2897d4faf00d69bbe24fcf8d86d5f675/${encodeURIComponent(lat)},${encodeURIComponent(long)}?units=si`;
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to weather service! Please check your internet connection!');
        }
        else if (res.body.error) {
            callback('Invalid location! Try again');
        }
        else {
            callback(undefined, {
                Forecast_Summary: res.body.daily.data[0].summary,
                Temperature: `${res.body.currently.temperature} degrees celsius`,
                Timezone: res.body.timezone,
                Rain_Probability: `${res.body.currently.precipProbability}%`

            })
        }
    });
}

module.exports = {
    forecast
}
