const db = require("../models");

const mongoose = require("mongoose");

module.exports = (app) => {

    //make workout

    app.post("/api/workouts", (req, res) => {


        db.Workout.create({}).then(data => res.json(data))


            .catch(err => {

                console.log("error", err);

                res.json(err);

            });
    });

    //add exercise

    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findByIdAndUpdate(req.params.id,

            { $push: { exercises: req.body } },
        )

            .then(data => res.json(data))

            .catch(err => {

                console.log("error", err);

                res.json(err);

            });

    });

    //get all workouts in a range
    app.get("/api/workouts/range", (req, res) => {


        db.Workout.find({}).then(data =>
            res.json(data))


            .catch(err => {

                console.log("error", err);

                res.json(err);

            });

    });
 //get recent workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => res.json(data))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });

    });

    app.get("*", (req, res) => {

        res.redirect("/");

    });

};
