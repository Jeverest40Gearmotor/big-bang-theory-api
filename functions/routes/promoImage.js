const bbt = require('big-bang-theory');

const promoImage = (req, res) => {
  const parsed = bbt._embedded.episodes.filter(episode => episode.season + "x" + episode.number === req.params.code
                                       .replace(req.params.code
                                       .split("x")[1],req.params.code
                                       .split("x")[1]
                                       .replace(/^0/, "")))
                                       
  if(parsed.length > 0){
    res.status(200).json({
    success: true,
    data: parsed
  })
  } else {
    res.status(400).json({
    success: false,
    message: "Not a valid range. Please try again."
  })
  }
}

module.exports = promoImage;

