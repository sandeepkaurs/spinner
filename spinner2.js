process.stdout.write('hello from spinner2.js... \rheyyy\n');
let nextTime = 100;
let textSpinners = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\rHiiiiii'];

for (const i of textSpinners) {
  setTimeout(() => {
    process.stdout.write(i);
  }, nextTime)
  nextTime += 200;
}