module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cc51c025012174dec64ab0a61995ba7f'),
  },
});
