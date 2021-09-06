/**
 * Exercise: make School mongoose model
 */

 const mongoose = require('mongoose');

 const SchoolSchema = mongoose.Schema({
     name: {
         type: String,
         required: true
     },
     city: {
         type: String,
         required: true
     },
     street: {
         type: String,
         required: true
     },
     zipcode: {
         type: Number,
         default: 0,
         required: true
     },
     classroom: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Classroom',
         required: true
     }]
 }, {
     timeStamps: true
 });
 
 module.exports = mongoose.model('School', SchoolSchema);