const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  product: {
    type: String,
    required: [true, 'Please select a product'],
    enum: ['Laptop', 'Desktop', 'Tablet', 'Smartphone', 'Printer', 'Accessories', 'Software', 'Login', 'Network', 'Other']
  },
  description: {
    type: String,
    required: [true, 'Please enter a description of the issue'],
  },
  status: {
    type: String,
    required: true,
    enum: ['New', 'Open', 'Closed'],
    default: false, 
  },
},
{
  timestamps: true,  
})

module.exports = mongoose.model('Ticket', ticketSchema)
