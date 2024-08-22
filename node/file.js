const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

// 定义函数，用于递归地复制文件夹及其内容
function copyFolderRecursiveSync(source, target) {
    // 检查源文件夹是否存在
    if (!fs.existsSync(source)) return;

    // 如果目标文件夹不存在，则创建目标文件夹
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }

    // 获取源文件夹中的所有文件和子文件夹
    const files = fs.readdirSync(source);

    // 遍历每个文件和子文件夹
    files.forEach(file => {
        const sourcePath = path.join(source, file);
        const targetPath = path.join(target, file);

        // 如果是文件夹，则递归复制文件夹
        if (fs.statSync(sourcePath).isDirectory()) {
            copyFolderRecursiveSync(sourcePath, targetPath);
        }
        // 如果是文件，则复制文件
        else {
            fs.copyFileSync(sourcePath, targetPath);
        }
    });
}

// 定义源文件夹和目标文件夹路径
const sourceFolder = '/Volumes/heyg/dev/Javascriptnote/node';
const tmpDir = os.tmpdir();
const targetFolder = path.join(tmpDir, 'copiedFolder');

// 复制文件夹到临时目录
try {
    copyFolderRecursiveSync(sourceFolder, targetFolder);
    console.log('Folder copied to temporary directory successfully.');
    console.log('Target folder path:', targetFolder);
} catch (error) {
    console.error('Error copying folder to temporary directory:', error);
}
