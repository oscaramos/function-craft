const express = require('express')
const cors = require('cors')
const { createMinecraftFunction } = require('grabcraft-function-generator')

const app = express()

app.use(cors())

app.get('/', async (req, res) => {
  const url = req.query.url
  const mc_version = req.query.mc_version
  if (url && mc_version) {
    try {
      res.send(await createMinecraftFunction(url, { mc_version }))
    } catch (error) {
      res.send(401).send("Error on server: " + error)
    }
  } else {
    res.status(401).send('Send an url and a minecraft version')
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
