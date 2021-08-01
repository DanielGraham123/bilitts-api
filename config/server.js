module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("SERVER_URL"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9e857919ea90c55703a007b617529474"),
    },
  },
});
