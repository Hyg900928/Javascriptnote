const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');


// 文件夹比较
async function getFilesInDirectoryRecursive(dir) {
  let results = [];
  const list = await fs.readdir(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(await getFilesInDirectoryRecursive(filePath));
    } else {
      results.push(filePath);
    }
  }
  return results;
}

function getFileHash(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);
    stream.on('data', data => hash.update(data));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
}

async function findModifiedFiles(dir1, dir2) {
  try {
    const filesDir1 = await getFilesInDirectoryRecursive(dir1);
    const filesDir2 = await getFilesInDirectoryRecursive(dir2);

    const relativeFilesDir1 = filesDir1.map(file => path.relative(dir1, file));
    const relativeFilesDir2 = filesDir2.map(file => path.relative(dir2, file));

    const allFiles = new Set([...relativeFilesDir1, ...relativeFilesDir2]);
    const modifiedFiles = [];

    for (const relativeFilePath of allFiles) {
      const filePathDir1 = path.join(dir1, relativeFilePath);
      const filePathDir2 = path.join(dir2, relativeFilePath);

      if (await fs.pathExists(filePathDir1) && await fs.pathExists(filePathDir2)) {
        const hashDir1 = await getFileHash(filePathDir1);
        const hashDir2 = await getFileHash(filePathDir2);
        if (hashDir1 !== hashDir2) {
          modifiedFiles.push(relativeFilePath);
        }
      } else {
        modifiedFiles.push(relativeFilePath);
      }
    }

    return modifiedFiles;
  } catch (err) {
    console.error('Error reading directories:', err);
  }
}

// 示例用法
const dir1 = './data';
const dir2 = './data2';

findModifiedFiles(dir1, dir2).then(modifiedFiles => {
  console.log('Modified files:', modifiedFiles);
});
