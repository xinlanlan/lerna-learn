const shell = require('shelljs');
const version = require('lerna').version;
console.log(version)

const main = async () => {
    await shell.exec('git add -A');
    await shell.exec(`git commit -m "chore: publish ${version}"`);
    await shell.exec('git push');
};

main();
