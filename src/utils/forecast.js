const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ latitude +'&lon='+ longitude+ '&units=metric&appid=a971f05cfd48bd4de87eb5f0acf020c8'

    request({url, json:true},(error,{body})=>{
        
        if(error){
            callback('Unable to connect weather service',undefined)

        }else if(body.error){
            callback('Unable to find location',undefined)

        }else{
            callback(undefined,body.current.temp)

        }


    })

}

module.exports = forecast