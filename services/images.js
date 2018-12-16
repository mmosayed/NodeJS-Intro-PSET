const images = {};

const fs = require('fs');

images.copyJPGTo = (imageFile, newFolder, newName) => {

    const dir = `./${newFolder}`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        fs.copyFileSync(`./${imageFile}`, `./${newFolder}/${newName}`)
    }
    return `folder exists`;
}



module.exports = images;