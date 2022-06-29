/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "robohash.org",
      "static-cdn.jtvnw.net",
      "https://s3.console.aws.amazon.com",
      "disney-clone-emg-storage-d71154a9162231-staging.s3.amazonaws.com",
    ],
  },
};
