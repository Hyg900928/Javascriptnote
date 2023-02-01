const compressing = require('compressing');
const fs = require("fs");
const path = require('path');
const rimraf = require("rimraf");

const readDirFiles = dir => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                return resolve([]);
            }

            resolve(files);
        });
    });
};
const pathName = './spec';
const targetFilePath = 'Cover Spine Specification.pdf';

function doUnCompress(dirPath) {
    readDirFiles(dirPath).then(files => {
        for (let i = 0; i < files.length; i++) {
            const filPath = path.join(dirPath, files[i]);
            console.log('dirPath', dirPath, 'filePath===>', filPath, 'isExist', fs.existsSync(filPath))
            const fileName = files[i].split('.zip')[0];
            // 将压缩包解压到  文件夹中
            if(fs.existsSync(filPath) && filPath.indexOf('.zip') !== -1) {
                compressing.zip.uncompress(filPath, dirPath).then(() => {
                    console.log(`${filPath}解压完成`)
                    fs.unlinkSync(filPath)
                    console.log(`${filPath}删除成功`)
                }).catch((err) => {
                    console.log(`${filPath}解压失败`, err)
                })
            }
        }
    });


    // const newFiles = await readDirFiles(pathName);
    // return newFiles;
}
//解压
function unCompress() {
    readDirFiles(pathName).then(dirs =>{
        const ingoreIndex = dirs.findIndex(el => el === '.DS_Store');
        if(ingoreIndex !== -1) {
            dirs.splice(ingoreIndex, 1);
        }
        console.log('dirs===>', dirs)
        for (let i = 0; i < dirs.length; i++) {
            const dirPath = path.join(pathName, dirs[i]);
            console.log('dirPath===>', dirPath)
            doUnCompress(dirPath);
        }
    });


}

function doMove(dirPath) {
    readDirFiles(dirPath).then(files => {
        const ingoreIndex = files.findIndex(el => el === '__MACOSX');
        if(ingoreIndex !== -1) {
            files.splice(ingoreIndex, 1);
        }
        for (let i = 0; i < files.length; i++) {
            const targetDirPath = path.join(dirPath, files[i]);
            const currentPath  = fs.lstatSync(targetDirPath);
            const isDirectory = currentPath.isDirectory();
            console.log('isDirectory', isDirectory, 'path', `${targetDirPath}/${targetFilePath}`)
            if(isDirectory) {
                fs.copyFileSync(targetFilePath, `${targetDirPath}/${targetFilePath}`)
                console.log('复制成功')
            }
        }
    })
}

// 移动
function move() {
    readDirFiles(pathName).then(dirs => {
        const ingoreIndex = dirs.findIndex(el => el === '.DS_Store');
        if(ingoreIndex !== -1) {
            dirs.splice(ingoreIndex, 1);
        }

        for (let i = 0; i < dirs.length; i++) {
            const dirPath = path.join(pathName, dirs[i]);
            console.log('dirPath===>', dirPath)
            doMove(dirPath);
        }
    })
}

function doCompress(dirPath) {
    readDirFiles(dirPath).then(files => {
        const ingoreIndex = files.findIndex(el => el === '__MACOSX');
        if(ingoreIndex !== -1) {
            files.splice(ingoreIndex, 1);
        }
        for (let i = 0; i < files.length; i++) {
            const filPath = path.join(dirPath, files[i]);
            const fileName = files[i].split('.zip')[0];
            // 压缩
            compressing.zip.compressDir(filPath, `${dirPath}/${fileName}.zip`).then(() => {
                console.log(`${filPath}压缩完成`)
                if(fs.existsSync(filPath)) {
                    rimraf.sync(filPath)
                    console.log(`${filPath}删除成功`)
                }

            }).catch(() => {
                console.log('压缩失败')
            })

        }
    })
}

function compress() {
    readDirFiles(pathName).then(dirs => {
        const ingoreIndex = dirs.findIndex(el => el === '.DS_Store');
        if(ingoreIndex !== -1) {
            dirs.splice(ingoreIndex, 1);
        }

        for (let i = 0; i < dirs.length; i++) {
            const dirPath = path.join(pathName, dirs[i]);
            console.log('dirPath===>', dirPath)
            doCompress(dirPath);
        }
    })
}


// unCompress()
// move();
compress();
