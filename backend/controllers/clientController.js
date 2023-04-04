const Client = require("../models/client");

exports.addClient = async (req, res) => {
  try {
    const { clientID, clientName, companyName, mobileNumber, emailID } =
      req.body;

    const info = await Client.create({
      clientID,
      clientName,
      companyName,
      mobileNumber,
      emailID,
      user: req.user._id,
    });

    res.status(200).json({
      info,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getClient = async (req, res) => {
  try {
    const info = await Client.find({ user: req.user._id });
    res.status(200).json({
      info,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
