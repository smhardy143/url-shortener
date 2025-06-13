const express = require('express');
const router = express.Router();
const Url = require('../models/url');

//generate random short string
const generateShort = () => Math.random().toString(36).substring(2, 8);

// POST /api/shorten
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const short = generateShort();
  try {
    const newUrl = new Url({ short, long: longUrl });
    await newUrl.save();
    res.json({ short });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/:short
router.get('/:short', async (req, res) => {
  try {
    const url = await Url.findOne({ short: req.params.short });
    if (url) {
      return res.redirect(url.long);
    } else {
      res.status(404).send('URL not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
