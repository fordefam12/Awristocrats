const db = require('../config/connection');
const { User, Order, Watch } = require('../models');
const cleanDB = require('./cleanDB');
const watchData = require('./data/master-data.json')
// console.log(watchData)
db.once('open', async () => {
    await cleanDB('Watch', 'watches');
    await cleanDB('Order', 'orders');
    await cleanDB('User', 'users');

    const parsedData = watchData.watches.map(watch => {
        // console.log(watch)
        return {
            referenceNumber: watch.reference_number,
            watchName: watch.name,
            gender: watch.gender,
            watchDescription: watch.description,
            brandName: watch.brand.name,
            brandLogo: watch.brand.logo,
            caliberImage: watch.caliber.image,
            imageURL: watch.images[0],
            price: watch.prices ? watch.prices[0].watch_price : Math.floor(Math.random()*(80000-4427)+4427).toFixed(0) 
        }
    })
    console.log(parsedData)

    const watches = await Watch.insertMany(parsedData)

    if (watches) {
        process.exit(0)
    }
})


