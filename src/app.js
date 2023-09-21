require('dotenv').config({ path: `${__dirname}/config/.env` })

const express = require('express')
const exphbs = require('express-handlebars')
const fetch = require('node-fetch')
const path = require('path')
const NodeCache = require('node-cache')
const cache = new NodeCache({ stdTTL: 5 * 60 })

const app = express()
const PORT = process.env.PORT || 3000

const WANTED_POKEMONS = 20

// Middleware to parse incoming JSON data and URL-encoded form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handlebars Config
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Static folder Config
app.use(express.static(path.join(__dirname, 'public')))

// Functions
async function renderPokemon(url) {

  const response = await fetch(url)
  const json = await response.json()
  const data = {
    id: json.id,
    name: json.forms[0].name,
    img_url: json.sprites.other.home.front_default,
    type: json.types[0].type.name,
  }

  return data
}

async function getPokemonData() {
  const cachedData = cache.get('pokemonData')
  if (cachedData) {
    return cachedData
  }
  
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${WANTED_POKEMONS}`)
  if (!response.ok) {
    throw new Error(`Error fetching Pokémon data, status: ${response.status}`)
  }
  const { results } = await response.json()
  const pokemonUrls = results.map(pokemon => pokemon.url)
  const pokemonDataArray = await Promise.all(pokemonUrls.map(renderPokemon))
  
  // Armazena todos os dados dos Pokémon em cache
  cache.set('pokemonData', pokemonDataArray)

  return pokemonDataArray
}

// Routes
app.get('/', async (req, res) => {
  try {
    const data = await getPokemonData()
    res.render('index', { data })
  } catch (error) {
    res.render('notFound')
  }
})

app.use('/pokemon', require('./routes/pokemon'))

app.get('/*', (req, res) => {
  res.render("notFound")
})

// Start Server
app.listen(PORT, () => {
  console.log("Server is runnig on port: " + PORT)
})

