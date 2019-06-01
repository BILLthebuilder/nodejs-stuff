const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYmlsbHRoZWJ1aWxkZXIiLCJhIjoiY2pvdjFwN2xmMGRndjNwb2R3MGd0cjQ0OCJ9.hK0qBzo0pr40UjBDcLuEFQ&limit=1`;
    request({ url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to map service! Please check your internet connection!');
        }
        else if (res.body.features.length === 0) {
            callback('Invalid City! Try again');
        }
        else {
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            })
        }


    });
}

module.exports = {
    geocode
};
