const submitButton = document.getElementById('submit')
const urlInput = document.getElementById('url')
const mcVersionSelect = document.getElementById('mcversion')
const downloadLink = document.getElementById('download_link')
const loader = document.getElementById('loader')

const mcVersions = [
  '1.16.2',
  '1.16.1',
  '1.16',
  '1.15.2',
  '1.15.1',
  '1.15',
  '1.14.4',
  '1.14.3',
  '1.14.1',
  '1.14',
  '1.13.2',
  '1.13.1',
  '1.13',
  '1.12.2',
  '1.12.1',
  '1.12',
  '1.11.2',
  '1.11',
  '1.10.2',
  '1.10.1',
  '1.10',
  '1.9.4',
  '1.9.2',
  '1.9',
  '1.8.8',
  '1.7.10',
]

const downloadTxt = (text) => {
  const data = new Blob([text], { type: 'text/plain' })
  downloadLink.href = window.URL.createObjectURL(data)
  downloadLink.click()
}

function isValidHttpUrl(string) {
  let url

  try {
    url = new URL(string)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}

submitButton.addEventListener('click', async () => {
  // Replaces submit button with loader
  submitButton.hidden = true
  loader.hidden = false

  const url = urlInput.value
  const mc_version = mcVersionSelect.value

  const apiUrl = 'https://function-craft.herokuapp.com/?' + new URLSearchParams({
    url,
    mc_version,
  })

  try {
    if (!isValidHttpUrl(url)) {
      // change url input to error state
      urlInput.classList.add('invalid-url')
      throw new Error('Invalid Url')
    } else {
      // Downloads the minecraft function as .txt file
      const data = await fetch(apiUrl)
      const minecraftFunction = await data.text()
      downloadTxt(minecraftFunction)
      // Show an arrow to indicate where to download the file
      Arrow.show(5000);
      // Remove error state if it exists
      urlInput.classList.remove('invalid-url')
    }
  } catch (error) {
    alert(error)
  } finally {
    // Replaces loader with submit button
    loader.hidden = true
    submitButton.hidden = false
  }
})

// On load
mcVersions.map(version => {
  const option = document.createElement('option')
  option.setAttribute('value', version)
  option.appendChild(document.createTextNode(version))

  mcVersionSelect.appendChild(option)
})

