const ocr = require('text-from-image');

async function test() {
    try {
        return (await ocr('./googleLogo.png'));
    } catch (err) {
        throw err;
    }
}

test().then((x) => console.log(x)).catch((y) => console.log(y));