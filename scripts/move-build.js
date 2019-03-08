const fs = require('fs-extra');
const del = require('del');
const path = require('path');

const resourcePath = path.join(__dirname, '..')

del.sync([
    resourcePath + '/build/minified/**/*.map',
    resourcePath + '/build/minified/**/*.pdf'
]);

fs.copySync(
    path.join(resourcePath, 'build', 'minified'),
    path.join(resourcePath, 'dist'),
);

fs.remove(path.join(resourcePath, 'build'));
