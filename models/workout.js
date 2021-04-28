const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter a workout name"
      },
      type: {
        type: String,
        trim: true,
        required: "Enter a type of workout"
      },
      duration: {
        type: Number,
        required: true
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
