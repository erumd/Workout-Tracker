const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Type of workout',
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter a name of workout',
      },
      duration: {
        type: Number,
        required: 'Minutes exercised?',
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

// exercises: [
//   {
//     type: "resistance",
//     name: "Bicep Curl",
//     duration: 20,
//     weight: 100,
//     reps: 10,
//     sets: 4
//   }
// ]

// exercises: [
//   {
//     type: "cardio",
//     name: "Running",
//     duration: 25,
//     distance: 4
//   }
// ]

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;
