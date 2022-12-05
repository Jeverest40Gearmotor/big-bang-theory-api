const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodeIndex = require('./routes/episodeIndex');
const episodeLookup = require('./routes/episodeLookup');
const airedBetween = require('./routes/airedBetween');

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex);
router.get("/episode-lookup/:code", episodeLookup);
router.get("/aired-between/:date1/:date2", airedBetween);

module.exports = router;

