const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: 

    {

        type: Date,
        default: Date.now,

    },

    exercises: [

        {

            type: {
                type: String,
                unique: false
            },
            name: {
                type: String
            },
            duration: {
                type: Number,
                required: true
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }

        },
    ]

//virtuals strategy from source: https://mongoosejs.com/docs/tutorials/virtuals.html#virtuals-in-json

},{ toJSON: { virtuals: true }} );

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise)=>{
        return total + exercise.duration
    },0);
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout; 