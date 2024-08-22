const fs = require('fs');

function folderContainsFile(folderPath, fileName) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const isFilePresent = files.includes(fileName);
      resolve(isFilePresent);
    });
  });
}


(async () => {

  const isExist = await folderContainsFile('./', 'test4.js')
  console.log('isExist', isExist);
})()
