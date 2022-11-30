const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodeIndex = require('./routes/episodeIndex');
const episodeLookup = require('./routes/episodeLookup');

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex);
router.get("/episode-lookup/:code", episodeLookup);

module.exports = router;

