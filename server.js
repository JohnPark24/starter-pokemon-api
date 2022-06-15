const express = require('express')
const app = express()
const PORT = 8000

const starters = {
    'bulbasaur': {
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
          }
        },
        {
          "slot": 2,
          "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ],
      "abilities": [
        {
          "ability": {
            "name": "overgrow",
            "url": "https://pokeapi.co/api/v2/ability/65/"
          },
          "is_hidden": false,
          "slot": 1
        },
        {
          "ability": {
            "name": "chlorophyll",
            "url": "https://pokeapi.co/api/v2/ability/34/"
          },
          "is_hidden": true,
          "slot": 3
        }
      ]
    },
    "charmander": {
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "fire",
            "url": "https://pokeapi.co/api/v2/type/10/"
          }
        }
      ],
      "abilities": [
        {
          "ability": {
            "name": "blaze",
            "url": "https://pokeapi.co/api/v2/ability/66/"
          },
          "is_hidden": false,
          "slot": 1
        },
        {
          "ability": {
            "name": "solar-power",
            "url": "https://pokeapi.co/api/v2/ability/94/"
          },
          "is_hidden": true,
          "slot": 3
        }
      ]

    },
    "squirtle": {
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "water",
            "url": "https://pokeapi.co/api/v2/type/11/"
          }
        }
      ],
      "abilities": [
        {
          "ability": {
            "name": "torrent",
            "url": "https://pokeapi.co/api/v2/ability/67/"
          },
          "is_hidden": false,
          "slot": 1
        },
        {
          "ability": {
            "name": "rain-dish",
            "url": "https://pokeapi.co/api/v2/ability/44/"
          },
          "is_hidden": true,
          "slot": 3
        }
      ]
    },
    '???': {
        'types': '???',
        'abilities': '???'
    }
    
    

        
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const starterName = req.params.name.toLowerCase()
    if(starters[starterName]){
      res.json(starters[starterName])
    }else{
      res.json(starters['???'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`)
})