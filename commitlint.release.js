const shell = require('shelljs');
const version = require('./lerna').version;
console.log(version)

const main = async () => {

    const isAlpha = !!(version.indexOf('alpha') > -1);

    if (isAlpha) {
        await shell.exec('git add -A');
        await shell.exec(`git commit -m "chore(prerelease): prerelease ${version}"`);
        await shell.exec('git push');
    } else {
        // await shell.exec('git add -A');
        // await shell.exec(`git commit -m "chore(release): release ${version}"`);
        // await shell.exec(`git tag -a v${version} -m "chore(release): ${version}"`);
        // await shell.exec(`git push origin v${version}`);
        // await shell.exec('npm run changelog');
        // await shell.exec('git add -A');
        // await shell.exec(`git commit -m "docs(build): changelog ${version}"`);
        // await shell.exec('git push');
        await shell.exec(`npm run standard-version -- --release-as ${version}`);
        await shell.exec('git add -A');
        await shell.exec(`git commit -m "chore(release): release ${version}"`);
        await shell.exec('git push');
    }
};

main();
