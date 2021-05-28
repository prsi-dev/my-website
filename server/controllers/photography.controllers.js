const photographyData = require('../data/photography.json');

const getPhotography = async (req, res, next) => {
  try {
    const photography = await photographyData;
    res.status(200).json(photography);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: 'Could not find info',
    });
  }
};

module.exports = {
  getPhotography,
};
