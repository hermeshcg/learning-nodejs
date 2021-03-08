const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  return res.send('Touchdown Confirmed, we are safe on mars');
});

router.get('/specific', (req, res) => {
  return res.send('To , we are safe on mars');
});

module.exports = router;
