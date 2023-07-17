const twilio = require("twilio");
const { TWILIO_AUTH_TOKEN, TWILIO_SID } = require("../config/config");

const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);
module.exports = {
  client,
};
