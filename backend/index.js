const express = require('express')
const cors = require('cors')
const app = express()

const { createMinecraftFunction } = require('grabcraft-function-generator')

app.use(cors())

app.get('/', async (req, res) => {
  const url = req.query.url
  const mc_version = req.query.mc_version
  if (url && mc_version) {
    res.send(await createMinecraftFunction(url, { mc_version }))
  } else {
    res.status(401).send('Send and url and a minecraft version')
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
