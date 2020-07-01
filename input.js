let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function (key) {
    process.stdout.write('.');
    if (key === '\u0003') {
      console.log("exiting program");
      process.exit();
    } else if (key === "w") {
      setTimeout(() => {
        process.stdout.write(connection.write("Move: up"))
      }, 50);
    } else if (key === "a") {
      setTimeout(() => {
        process.stdout.write(connection.write("Move: left"))
      }, 50);
    } else if (key === "s") {
      setTimeout(() => {
        process.stdout.write(connection.write("Move: down"))
      }, 50);
    } else if (key === "d") {
      setTimeout(() => {
        process.stdout.write(connection.write("Move: right"))
      }, 50);
    };
  };
  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput }
