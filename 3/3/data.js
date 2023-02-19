const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

let cont = document.querySelector('.container')

for (let item of data) {
    let column = document.createElement('div')
    let column__preview = document.createElement('div')
    let previewImg = document.createElement('img')
    let mac__title = document.createElement('h2')
    let mac__price = document.createElement('p')
    let mac__colors = document.createElement('div')
    let colorsSpanOne = document.createElement('span')
    let colorsSpanTwo = document.createElement('span')
    let colorsSpanThree = document.createElement('span')
    let mac__buy = document.createElement('button')
    let mac__line = document.createElement('hr')
    let column__characters = document.createElement('div')
    let sizeBox = document.createElement('div')
    let sizebox__preTitle = document.createElement('h3')
    let sizeBox__title = document.createElement('span')
    let chipBox = document.createElement('div')
    let chipBox__img = document.createElement('img')
    let chipBox__title = document.createElement('span')
    let chipBox__desc = document.createElement('p')
    let memoryBox = document.createElement('div')
    let memoryBox__img = document.createElement('img')
    let memoryBox__title = document.createElement('span')
    let memoryBox__desc = document.createElement('p')
    let TbBox = document.createElement('div')
    let TbBox__pretitle = document.createElement('h3')
    let TbBox__title = document.createElement('span')
    let BatteryBox = document.createElement('div')
    let BatteryBox__img = document.createElement('img')
    let BatteryBox__title = document.createElement('span')
    let VidieoBox = document.createElement('div')
    let VidieoBox__img = document.createElement('img')
    let VidieoBox__title = document.createElement('span')
    let VidieoBox__desc = document.createElement('p')
    let WeightBox = document.createElement('div')
    let WeightBox__pretitle = document.createElement('h3')
    let WeightBox__title = document.createElement('span')
    let TouchBox = document.createElement('div')
    let TouchBox__img = document.createElement('img')
    let TouchBox__title = document.createElement('span')
    let MacLine = document.createElement('hr')
    let mac__learn = document.createElement('h4')

    mac__learn.classList.add('mac__learn')
    MacLine.classList.add('mac__line')
    column.classList.add('column')
    column__preview.classList.add('column__preview')
    mac__title.classList.add('mac__title')
    mac__price.classList.add('mac__price')
    mac__colors.classList.add('mac__colors')
    mac__buy.classList.add('mac__buy')
    mac__line.classList.add('mac__line')
    sizeBox.classList.add('box')
    sizebox__preTitle.classList.add('box__pretitle')
    sizeBox__title.classList.add('box__title')
    chipBox.classList.add('box')
    chipBox__img.classList.add('box__img')
    chipBox__title.classList.add('box__title')
    chipBox__desc.classList.add('box__desc')
    memoryBox.classList.add('box')
    memoryBox__img.classList.add('box__img')
    memoryBox__title.classList.add('box__title')
    memoryBox__desc.classList.add('box__desc')
    TbBox.classList.add('box')
    TbBox__pretitle.classList.add('box__pretitle')
    TbBox__title.classList.add('box__title')
    BatteryBox.classList.add('box')
    BatteryBox__img.classList.add('box__img')
    BatteryBox__title.classList.add('box__title')
    VidieoBox.classList.add('box')
    VidieoBox__img.classList.add('box__img')
    VidieoBox__title.classList.add('box__title')
    VidieoBox__desc.classList.add('box__desc')
    WeightBox.classList.add('box')
    WeightBox__pretitle.classList.add('box__pretitle')
    WeightBox__title.classList.add('box__title')
    TouchBox.classList.add('box')
    TouchBox__img.classList.add('box__img')
    TouchBox__title.classList.add('box__title')

    mac__title.innerHTML = item.title
    mac__price.innerHTML = 'From $' + item.price
    mac__buy.innerHTML = 'Buy'
    sizebox__preTitle.innerHTML = item.specs.display.size
    sizeBox__title.innerHTML = item.specs.display.title
    chipBox__title.innerHTML = item.specs.chip.title
    chipBox__desc.innerHTML = item.specs.chip.description
    memoryBox__title.innerHTML = item.specs.ram.title
    memoryBox__desc.innerHTML = item.specs.ram.description
    TbBox__pretitle.innerHTML = item.specs.memory.size + 'TB'
    TbBox__title.innerHTML = 'Maximum configurabla storage'
    BatteryBox__title.innerHTML = 'Up to ' + item.specs.battery + ' hours battey life'
    VidieoBox__title.innerHTML = item.specs.camera.title
    VidieoBox__desc.innerHTML = item.specs.camera.description
    WeightBox__pretitle.innerHTML = item.specs.weight + ' Ib'
    WeightBox__title.innerHTML = 'Weight'
    TouchBox__title.innerHTML = 'Touch ID'
    mac__learn.innerHTML = 'Learn more >'

    previewImg.src = './img/macbook13.png'
    chipBox__img.src = './img/m1.png'
    memoryBox__img.src = './img/memory.png'
    BatteryBox__img.src = './img/battery.png'
    VidieoBox__img.src = './img/video.png'
    TouchBox__img.src = './img/id.png'

    TouchBox.append(TouchBox__img, TouchBox__title)
    WeightBox.append(WeightBox__pretitle, WeightBox__title,)
    VidieoBox.append(VidieoBox__img, VidieoBox__title, VidieoBox__desc)
    BatteryBox.append(BatteryBox__img, BatteryBox__title)
    TbBox.append(TbBox__pretitle, TbBox__title,)
    memoryBox.append(memoryBox__img, memoryBox__title, memoryBox__desc)
    chipBox.append(chipBox__img, chipBox__title, chipBox__desc)
    sizeBox.append(sizebox__preTitle, sizeBox__title)
    column__characters.append(sizeBox, chipBox, memoryBox, TbBox, BatteryBox, VidieoBox, WeightBox, TouchBox)
    column__preview.append(colorsSpanOne, colorsSpanTwo, colorsSpanThree)
    column__preview.append(previewImg, mac__title, mac__price, mac__colors, mac__buy)
    column.append(column__preview, mac__line, column__characters, MacLine, mac__learn)
    cont.append(column)
}