// models/Note.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const noteSchema = new Schema({
  title: {
    type: String,
    required: true
},
content: {
    type: String,
    required: true
},
datePosted: {
    type: Date,
    default: Date.now
},
user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

})
noteSchema.virtual('formattedDate').get(function() {
const date = new Date(this.datePosted)
const day = date.getDate()
const month = date.toLocaleString('default', { month: 'long' })
const year = date.getFullYear()
return `${day} ${month} ${year}`
})

module.exports = mongoose.model('Note', noteSchema);