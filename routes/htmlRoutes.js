const router = require('express').Router();
const path = require('path');

// Home route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../public/index.html'));
  });
  
//Exercise Route
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname + '../public/exercise.html'));
  });

  //Dashboard Route
  router.get('/stats', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

  module.exports = router;