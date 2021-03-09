const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

router.get('/', (req, res) => {
  return res.send('Touchdown Confirmed, we are safe on mars');
});

router.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = router;
