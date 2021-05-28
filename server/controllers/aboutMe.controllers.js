const aboutMeData = require("../data/aboutMe.json");

const getAboutMe = async (req, res, next) => {
  try {
    const aboutMe = await aboutMeData;
    res.status(200).json({
      data: aboutMe,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: "Could not find info",
    });
  }
};

module.exports = {
  getAboutMe,
};
