const siteUrl = 'https://www.webcoding.info';

let policy = {
  userAgent: '*',
};
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [policy],
  },
  outDir: './out',
};
