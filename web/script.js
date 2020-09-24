const submit = document.getElementById('submit')
const url = document.getElementById('url')
const mcVersion = document.getElementById('mcversion')
const downloadLink = document.getElementById('download_link')
const loader = document.getElementById('loader')

const mcVersions = [
  "1.16.2",
  "1.16.1",
  "1.16",
  "1.15.2",
  "1.15.1",
  "1.15",
  "1.14.4",
  "1.14.3",
  "1.14.1",
  "1.14",
  "1.13.2",
  "1.13.1",
  "1.13",
  "1.12.2",
  "1.12.1",
  "1.12",
  "1.11.2",
  "1.11",
  "1.10.2",
  "1.10.1",
  "1.10",
  "1.9.4",
  "1.9.2",
  "1.9",
  "1.8.8",
  "1.7.10",
]

const downloadTxt = (text) => {
  const data = new Blob([text], { type: 'text/plain' })
  downloadLink.href = window.URL.createObjectURL(data)
  downloadLink.click()
}

submit.addEventListener('click', async () => {
  // Replaces submit button with loader
  submit.hidden = true
  loader.hidden = false

  const apiUrl = 'http://localhost:4000/?' + new URLSearchParams({
    url: url.value,
    mc_version: mcVersion.value
  })
  try {
    const data = await fetch(apiUrl)
    const minecraftFunction = await data.text()
    downloadTxt(minecraftFunction)
  } catch (error) {
    alert(error)
  } finally {
    // Replaces loader with submit button
    loader.hidden = true
    submit.hidden = false
  }
})

// On load
mcVersions.map(version => {
  const option = document.createElement('option')
  option.setAttribute('value', version)
  option.appendChild(document.createTextNode(version))

  mcVersion.appendChild(option)
})
