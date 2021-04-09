const router = require('express').Router();
const workout = require('../models/workout.js');
const path = require('path');

// CURD;
//get
// added aggregate to show the duration
router.get('/api/workouts', (req, res) => {
  workout
    .aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

// need another get. NOT SURE. READ up online
router.get('/api/workouts/range', (req, res) => {
  workout
    .aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
    .sort({ day: -1 })
    .limit(7)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

//UPDATE > put. Double check
// tutor helped. id each workout
// https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose
router.put('/api/workouts/:id', (req, res) => {
  workout
    .update({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PersonModel.update(
//   { _id: person._id },
//   { $push: { friends: friend } },
//   done
// );

//CREATE > post ✅
// need /api for front end
// need workouts with s
router.post('/api/workouts', ({ body }, res) => {
  workout
    .create({ body })
    .then((user) => {
      res.json(user);
    })
    .catch(({ err }) => {
      console.log(err);
    });
});

// send files to html page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;
