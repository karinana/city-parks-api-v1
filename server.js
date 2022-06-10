const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


const parks = {
    'edmonds_city_park': {
        'address': '3rd Ave South & Howell Way',
        'address link': 'https://goo.gl/maps/1RHYGDLLS3NjJcLH9',
        'parking': 'Parking Lot',
        'hiking trails': true,
        'restrooms': true,
        'playground': true,
        'beach accesss': false
    },
    'yost_park': {
        'address': '96th Ave W & Bowdoin Way',
        'address link': 'https://goo.gl/maps/K9xe5Lh1cHEqBUY17',
        'parking': 'Parking Lot',
        'hiking trails': true,
        'restrooms': true,
        'playground': true,
        'beach access': false
    },
    'sierra_park': {
        'address': '81st Ave W & 190th St SW',
        'address link': 'https://goo.gl/maps/JPjLMBeqqqhzrzPY9',
        'parking': 'Parking Lot',
        'hiking trails': false,
        'restrooms': true,
        'playground': false,
        'beach access': false
    },
    'seaview_park': {
        'address': '80th Ave W & 186th St SW',
        'address link': 'https://goo.gl/maps/C5EgkZw56B8i1GhB8',
        'parking': 'Parking Lot',
        'hiking trails': false,
        'restrooms': true,
        'playground': true,
        'beach access': false
    },
    'pine_ridge_park': {
        'address': '20330 83rd Avenue West',
        'address link': 'https://goo.gl/maps/e7bcPPpmZaqkHKrCA',
        'parking': 'Parking Lot',
        'hiking trails': true,
        'restrooms': false,
        'playground': false,
        'beach access': false
    },
    'olympic_beach': {
        'address': '200 Admiral Way',
        'address link': 'https://goo.gl/maps/HjXSXCz3DoyvpK2fA',
        'parking': 'Parking Lot - Free 3 Hour Parking',
        'hiking trails': false,
        'restrooms': true,
        'playground': false,
        'beach access': true
    },
    'unknown': {
        'address': 'Unknown',
        'address link': 'Unknown',
        'parking': 'Unknown',
        'hiking trails': false,
        'restrooms': false,
        'playground': false,
        'beach access': false
    },
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const parkName = request.params.name.toLowerCase()
    if (parks[parkName]) {
        response.json(parks[parkName])
    } else {
        response.json(parks['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`SERVER IS RUNNING :)`)
})