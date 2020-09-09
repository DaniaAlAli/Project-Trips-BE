const { Profile } = require("../db/models");

exports.updateProfile = async (req, res, next) => {
  try {
    console.log("0");
    const foundProfile = await Profile.findOne({
      where: { userId: req.user.id },
    });
    console.log("1");

    if (req.user.id === foundProfile.userId) {
      console.log("2");
      console.log("req.file", req.file);
      if (req.file) {
        console.log("3");

        req.body.image = `${req.protocol}://${req.get("host")}/media/${
          req.file.filename
        }`;
      }
      console.log("4");

      await foundProfile.update(req.body);
      console.log("5");

      res.status(204).end();
    } else {
      const err = new Error("Unauthorized");
      err.status = 404;
      next(err);
    }
  } catch (error) {
    console.log("6");

    next(error);
  }
};
