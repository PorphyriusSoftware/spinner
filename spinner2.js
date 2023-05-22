const spinningLines = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

let time = 100;
let counter = 0;
for (let spin of spinningLines) {

    setTimeout(() => {
        process.stdout.write(`\r${spin}   `);
        counter++;
        if (counter === spinningLines.length) {
            process.stdout.write('\n');
        }
    }, time);
    time += 200;

}

