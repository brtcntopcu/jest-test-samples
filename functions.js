const axios = require('axios').default;

const functions = {
    sum : (x, y) => {
        if (x > 0 && y > 0) {
            return x + y
        } else {
            return null
        }
    },
    splitArray : (string) => {
        return string.split(" ")
    },
    promiseExamp : () => {
        return new Promise((resolve, reject) => {
            resolve('done');
            reject('error')
        })
    },
    fetchDataFromAPI : async () => {
        const response = await axios.get('https://reactnative.dev/movies.json')
        return response
    }
}
module.exports = functions;
