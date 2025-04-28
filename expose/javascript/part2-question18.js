function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

printTime();

setInterval(printTime, 1); 