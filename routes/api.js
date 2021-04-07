const router = require('express').Router();
const Workout = require('../models/workout.js');
const path = require('path');

// CLASS ACTIVITY
// router.get("/api/workout", (req, res) => {
//     Transaction.find({})
//       .sort({ date: -1 })
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

// activitu 11
// app.post("/submit", ({ body }, res) => {
//     User.create(body)
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

// ACTIVITY 14
// app.get("/books", (req, res) => {
//     db.Book.find({})
//       .then(dbBook => {
//         res.json(dbBook);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

CURD;
//get
app.get('/workout', (req, res) => {
  Workout.find({})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

//UPDATE > put

//CREATE > post
router.post('/workouts', ({ body }, res) => {
  Workout.create({ body })
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
