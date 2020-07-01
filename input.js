const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function (key) {
    process.stdout.write('.');
    if (key === '\u0003') {
      console.log("exiting program");
      process.exit();
    };
  };
  stdin.on('data', handleUserInput);

  console.log('after callback');
  return stdin;
};

module.exports = { setupInput };