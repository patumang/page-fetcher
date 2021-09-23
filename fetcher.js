const fs = require('fs');
const axios = require('axios');

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log("Invalid Input!");
  process.exit();
}

axios.get(args[0])
  .then(function (response) {
    // handle success
    const content = response.data;

    fs.writeFile(args[1], content, err => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
      //We can count file size in bytes by counting characters in a file 1 character = 1 byte
      console.log(`Downloaded and saved ${content.length} bytes to ${args[1]}`);

      /* // Read file stats
      fs.stat('./index.html', (err, stats) => {
        if (err) {
          console.log(`File doesn't exist.`);
        } else {
          console.log(`Downloaded and saved ${stats.size} bytes to ./index.html`);
        }
      }); */
    });
  })
  .catch(function (error) {
    // handle error
    console.log("FAILED: Getting content from given URL is Unsuccessful!");
  })
  .then(function () {
    // always executed
  });