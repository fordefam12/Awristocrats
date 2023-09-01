const mongoose = require('mongoose');

const {Schema}= mongoose;

const watchSchema = new Schema ({
referenceNumber:{
    type: String,
    required: true,
    unique: true
},
watchName: {
    type: String,
    required: true,
},
gender: {
    type: String,
    required: true
},
watchDescription: {
    type: String,
    required: true
},
brandName: {
    type: String,
    required: true
},
brandLogo: {
    type: String,
},
caliberImage: {
    type: String,
},
imageURL: {
    type: String,
},
price: {
    type: Number,
    required: true
}

});

const Watch = mongoose.model('Watch', watchSchema);

module.exports = Watch;
