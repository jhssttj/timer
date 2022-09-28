

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any key from stdin (standard key), output a "." to stdout
stdin.on('data', (key) => {
  if (key === 'b') {
    setTimeout(()=>{
      process.stdout.write('\u0007');
    },0);
  }else if (key === '\u0003') {
    console.log ("Thanks for using me, ciao!");
    process.exit();
  } else {
    console.log(`Setting timer for ${key} seconds`);
    setTimeout(()=>{
      process.stdout.write('\u0007');
    },key*1000);
  }
});






