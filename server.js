const express = require('express')
const cors = require('cors')
const app = express()
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.use(cors)


const mountains = {

'Denali': {
    'location': 'Alaska',
    'rangeName': 'Alaska Range',
    'elevationFeet': 20310,
    'coolFact': 'highest peak in North America'
},

'Mount Whitney': {
    'location': 'California',
    'rangeName': 'Sierra Nevada',
    'elevationFeet': 14505,
    'coolFact': 'highest mountain in contiguous United States'
},

'Mount Elbert': {
    'location': 'Colorado',
    'rangeName': 'Sawatch Range',
    'elevationFeet': 14440,
    'coolFact': 'referred to as the "gentle giant" due to easy climbing routes'
},

'Mount Rainier': {
    'location': 'Washington',
    'rangeName': 'Cascade Range',
    'elevationFeet': 14411,
    'coolFact': 'considered one of the most dangerous volcanoes in the world due to its high probability of eruption in the near future'
},

'Mount Saint Elias': {
    'location': 'Yukon and Alaska border',
    'rangeName': 'Saint Elias Mountains',
    'elevationFeet': 18008,
    'coolFact': 'summit rises 18,008 feet vertically in just 10 miles'
},

'unknown': {
    'location': 'unknown',
    'rangeName': 'unknown',
    'elevationFeet': 0,
    'coolFact': 'never heard of this mountain'
}

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
    const mountainName = request.params.name.toLowerCase()
    
    if( mountains[mountainName]) {
        response.json(mountains[mountainName])
    } else {
        response.json(mountains['unknown'])
    }   

})

app.listen(port, () =>{
    console.log(`The server is now running on port ${port}!`)
})