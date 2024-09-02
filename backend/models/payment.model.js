import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['bank_transfer', 'upi', 'phonepay','paytm','razorpay','googlepay'],
    required: true
  },
  
},{timestamps: true});

export const Payment = mongoose.model('Payment', paymentSchema);

//Manages transactions between employers and students, if applicable.
