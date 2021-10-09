var weatherData=async () =>{
  const rawData= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=ludhiana&appid=6c012cb514923fae6d816d7b4af1cb73`)
  let readyData= await rawData.json()
  console.log(readyData)
  
} 
weatherData()