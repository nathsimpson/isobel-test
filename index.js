// import the packages
const ISOBEL = require("@isobel/core");
const S3 = require("@isobel/s3");
const nasa = require("@isobel/nasa");

// initialise
const Isobel = new ISOBEL({
  cache: S3,
  services: [
    {
      name: "nasa", // the name of the cache artifact for the URL
      func: nasa.fetchPhotoOfTheDay, // which function will be run
      interval: 24 * 60 * 60 * 1000 // how often the cache will be refreshed
    }
  ]
});

Isobel.start().catch(error => {
  console.error("Error:", error);
  process.exit(1);
});
