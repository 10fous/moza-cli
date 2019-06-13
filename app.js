const program = require('commander');
// Require logic.js file and extract controller functions using JS destructuring assignment
const { sendContextCMD, sendUpdateCMD, sendNewCMD, sendDeleteCMD } = require('./moza');

program
  .version('0.0.1')
  .description('a cli for configuring and interacting with the middleware');

  program
  .command('context <host> <port>')
  .alias('ca')
  .description('send a request to make a context in the server side')
  .action((host, port) => {
    sendContextCMD({host, port});
  });

  program
  .command('update <host> <remotePort> <identity> <localPort>')
  .alias('u')
  .description('update the address and the port of the client located in the server')
  .action((host, port, remotePort, identity, localPort) => {
    sendUpdateCMD({host, port}, remotePort, identity, localPort);
  });

  program
  .command('disassociate <host> <remotePort> <identity>')
  .alias('dis')
  .description('update the address and the port of the client located in the server')
  .action((host, port, entity, entityName) => {
    sendNewCMD({host, port}, entity, entityName);
  });

  program
  .command('new <host> <remotePort> <entity> <entityname>')
  .alias('n')
  .description('update the address and the port of the client located in the server')
  .action((host, port, entity, entityName) => {
    sendNewCMD({host, port}, entity, entityName);
  });

  program
  .command('delete <host> <remotePort> <entity> <entityname>')
  .alias('d')
  .description('update the address and the port of the client located in the server')
  .action((host, port, entity, entityName) => {
    sendDeleteCMD({host, port}, entity, entityName);
  });

  program.parse(process.argv);