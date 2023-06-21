module.exports = {
  PORT: process.env.PORT || 3500,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/myapp",
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key",
  SMTP_HOST: process.env.SMTP_HOST || "smtp.mailtrap.io",
  SMTP_PORT: process.env.SMTP_PORT || 2525,
  SMTP_USERNAME: process.env.SMTP_USERNAME || "your-smtp-username",
  SMTP_PASSWORD: process.env.SMTP_PASSWORD || "your-smtp-password",
  TWILIO_SID: "AC9881a3201c3f15863952b231353c65cc",
  TWILIO_AUTH_TOKEN: "51e1012d567bb1989df5f7cdaaa5d7e9",
};
