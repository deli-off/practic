const data = [
    {
        preTitle: 'GET READY',
        title: 'Save time at iPhone pre-order',
        description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
        img: '1',
    },
    {
        preTitle: 'PRE-ORDER 9.17',
        title: 'iPhone 13 Pro. Oh. So. Pro.',
        description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
        img: '2',
    },
    {
        preTitle: 'IPAD MINI',
        title: 'Mega power. Mini sized. ',
        description: 'From $499 or $41.58/mo. for 12 mo.',
        img: '3',
    }
]

let cont = document.querySelector('.container')

for (let item of data) {
    let card = document.createElement('div')
    let card__characters = document.createElement('div')
    let card__pretitle = document.createElement('span')
    let card__title = document.createElement('h2')
    let card__desc = document.createElement('p')
    let card__preview = document.createElement('div')
    let img = document.createElement('img')

    card.classList.add('card')
    card__characters.classList.add('card__characters')
    card__preview.classList.add('card__preview')

    img.src = `./img/${item.img + '.jpg'}`
    img.width = '300px'
    img.height = '300px'

    card__pretitle.innerHTML = item.preTitle
    card__title.innerHTML = item.title
    card__desc.innerHTML = item.description

    card__preview.append(img)
    card__characters.append(card__pretitle, card__title, card__desc)
    card.append(card__characters, card__preview)
    cont.append(card)
}