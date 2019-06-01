const command = process.argv[2];

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (!command) {
    return console.log('Invalid command');   
} else {
    geocode.geocode(command, (err, {latitude,longitude,location}) => {
        if (err) {
            return console.log(err);
        }
        forecast.forecast(latitude, longitude, (err, forecastData) => {
            if (err) {
                return console.log(err);
            }

            console.log(location);
            console.log(forecastData);

        })
    });
}
