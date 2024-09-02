import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: true
    },
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },
    comment: {
      type: String,
      trim: true,
      required: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },{timestamps:true});
export const Feedback = mongoose.model('Feedback', feedbackSchema)  