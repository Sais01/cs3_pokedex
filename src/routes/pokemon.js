require('dotenv').config({path: `${__dirname}/config/.env`})

const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const POKEMON_LIMIT = 649
const WANTED_ABILITIES = 5

router.post('/',(req,res) => {
  const {name} = req.body
  try {
    if (!req.body || Object.keys(req.body).length === 0 || !name) {
      throw new Error("Any name was received")
    }
    res.redirect(`/pokemon/${name}`)
  } catch(error) {
    res.status(400).send(error.message);
  }
})
router.get('/', (req, res) => {
  res.redirect('/')
})

router.get('/:id', async (req, res) => {
  const id = req.params.id.toLowerCase()
  try {
    if(typeof +id == "number" && +id > POKEMON_LIMIT) {
      throw new Error(`Error invalid Id`)
    }
    const response = await fetch(`${process.env.API_BASE_URL}pokemon/${id}`)
    if (!response.ok) {
      throw new Error(`API Response Error, Status: ${response.status}`)
    }
    const json = await response.json()
    const data = {
      id: json.id,
      name: json.forms[0].name,
      img_url: json.sprites.other.home.front_default,
      weight: json.weight / 10 + "kg",
      height: json.height / 10 + "m",
      types: json.types.map(({type}) => type.name),
      abilities: json.abilities.filter(({ability},i) => i < WANTED_ABILITIES ? ability.name : null)
    }

    res.render("pokemon", data)
  } catch (error) {
    res.redirect('/notFound')
  }
})

module.exports = router