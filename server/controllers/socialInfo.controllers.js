const socialInfoData = require('../data/socialInfo.json');

const getSocialInfo = async (req, res, next) => {
  try {
    const socialInfo = await socialInfoData;
    res.status(200).json({
      data: socialInfo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: 'Could not find info',
    });
  }
};

module.exports = {
  getSocialInfo,
};
