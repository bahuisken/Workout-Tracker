const router = require("express").Router();
const Workout = require("../models/workout");

//All Workouts
router.get("/api/workouts", (req, res) => {
  //include field for total duration
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// New Workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Update Workout
router.put("/api/workouts/:id", ({ params, body }, res) => {
  Workout.findByIdAndUpdate(params.id, {
    $push: {
      exercises: body,
    },
  })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Past 7 Workouts for Dashboard
router.get("/api/workouts/range", (req, res) => {
  //include field for total duration, limit to 7 days
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
    {
      $limit: 7,
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
module.exports = router;
