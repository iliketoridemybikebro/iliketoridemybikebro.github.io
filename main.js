skinLink = document.getElementById("skinLink")

async function main() {
    const items = await getApi();

    const randomItem = items[Math.floor(Math.random() * items.length)]
    console.log(randomItem)
    console.log(randomItem.market_hash_name)
    console.log(randomItem.name)
    console.log(encodeURI(`https://csgoskins.gg/?query=${randomItem.market_hash_name}`))

    //document.getElementById("skinImage").src = randomItem.image
    skinLink.href = encodeURI("https://csgoskins.gg/?query=" + randomItem.name) + "%20(Factory%20New)"
    skinLink.textContent = randomItem.name
    skinLink.style.color = randomItem.rarity.color

}

async function getApi() {
    response = await fetch('https://bymykel.github.io/CSGO-API/api/en/skins.json', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
    })
  
    const json = await response.json()
    return json
}

main()