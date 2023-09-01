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
            price: watch.prices ? watch.prices[0].watch_price : 0 //math.random? for null/0 prices in data
        }
    })
    console.log(parsedData)
    const temp = {
        referenceNumber: "",
        watchName: '',
        gender: '',
        watchDescription: '',
        brandName: '',
        brandLogo: '',
        caliberImage: '',
        imageURL: '',
        price: 0,
    }

    const watches = await Watch.insertMany(parsedData)
})


