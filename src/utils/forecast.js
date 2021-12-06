const request=require('postman-request')
const forecast =(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=2d538cd40234945411191174cd75ab0d&query='+latitude+','+longitude
 request({url,json:true},(error,{body})=>{
    if(error)
        {
            callback('internet is not connected',undefined)
        }
        else if(body.error)
        {
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined,{
                weather_descriptions:body.current.weather_descriptions[0],
                        temprature: body.current.temperature,
                        feelslike:  body.current.feelslike,
                        observation_time:body.current.observation_time
                    })
 }
 })
}

module.exports=forecast
