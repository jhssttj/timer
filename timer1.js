const timer = function(input) {
  let times = input.slice(2);
  for (const time of times) {
    if (time <= 0 || isNaN(time)) {
      continue;
    } else {
      setTimeout(()=>{
        process.stdout.write('\u0007');
      },(time*1000));
    }
  }
};

timer(process.argv)






