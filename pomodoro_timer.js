function clear() {
    for (let x = 0; x < 100; x++)
        console.log('\n');
}

function run() {
    let seconds = 0;
    let minutes = 0;
    let intervalObject = setInterval(function() {
        clear();
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        console.log(`Pomodoro ${minutes}m:${seconds}s\n`);

        if (minutes === 25) {
            console.log('\007');
            clearInterval(intervalObject);
        }
    }, 1000);
}

run();