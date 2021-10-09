// push文件
const shell = require('shelljs')

const main = async() => {
    await shell.exec('lerna version')
    await shell.exex('npm run changelog')

    await shell.exec('git add -A');
    await shell.exec(`git commit -m "docs(build): changelog"`);
    await shell.exec('git push');

}

main()