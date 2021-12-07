const shell = require('shelljs');
const version = require('./lerna').version;
console.log(version)

const main = async () => {

    const isAlpha = !!(version.indexOf('alpha') > -1);

    if (isAlpha) {
        await shell.exec('git add -A');
        await shell.exec(`git commit -m "chore: prerelease ${version}"`);
        await shell.exec('git push');
    }
};

main();
