async function main() {
    const items = await getApi();

    const randomItem = items[Math.floor(Math.random() * items.length)]
    console.log(randomItem)

    document.getElementById("skinImage").src = randomItem.image
}

async function getApi() {
    response = await fetch('https://bymykel.github.io/CSGO-API/api/en/skins_not_grouped.json', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
    })
  
    const json = await response.json()
    return json
}

main()