const Net = require("net");

function sendContextCMD(remoteAddr) {
  const clientSock = new Net.Socket();

  clientSock.setKeepAlive(true);

  const msg =
    "MOZA v1.0\r\n" +
    "CONTEXT\r\n" +
    "LENGTH : 0\r\n" +
    "ARGS : 0\r\n" +
    "\r\n";
  clientSock.connect(remoteAddr, function() {
    console.log("TCP connection established with the server.");
    clientSock.write(msg);
  });

  // The client can also receive data from the server by reading from its socket.
  clientSock.on("data", function(chunk) {
    const str = chunk.toString();
    console.log(`Data received from the server: ${str}.`);
    const tokens = str.split("\r\n");
    if (tokens[0] === "CONTEXT_OK") {
      console.log("Contexte ajouté");
      console.log(tokens[1]);
    } else if (tokens[0] === "CONTEXT_ERR") {
      console.log("Commande échoué");
      console.log("Le serveur n'a pas pu ajouter un contexte");
    } else {
      console.log("réponse incorrecte");
    }
  });

  clientSock.on("end", function() {
    console.log("Requested an end to the TCP connection");
  });

  clientSock.on("error", function(err) {
    console.log("error ", err.message);
  });
}

function sendUpdateCMD(remoteAddr, id, listeningPort) {
  const clientSock = new Net.Socket();

  clientSock.setKeepAlive(true);

  const msg =
    "MOZA v1.0\r\n" +
    "UPDATE\r\n" +
    "LENGTH : 0\r\n" +
    "ARGS : 2\r\n" +
    `Identity : ${id}\r\n` +
    `Port : ${listeningPort}\r\n` +
    "\r\n";
  clientSock.connect(remoteAddr, function() {
    console.log("TCP connection established with the server.");
    clientSock.write(msg);
  });

  // The client can also receive data from the server by reading from its socket.
  clientSock.on("data", function(chunk) {
    const str = chunk.toString();
    console.log(`Data received from the server: ${str}.`);
    const tokens = str.split("\r\n");
    if (tokens[0] === "UPDATE_OK") {
      console.log("mise à jour effectué");
    } else if (tokens[0] === "UPDATE_ERR") {
      console.log("Commande échoué");
      console.log("Le serveur n'a pas pu mettre à jour le port :");
      console.log(tokens[1]);
    } else {
      console.log("réponse incorrecte");
    }
  });

  clientSock.on("end", function() {
    console.log("Requested an end to the TCP connection");
  });

  clientSock.on("error", function(err) {
    console.log("error ", err.message);
  });
}

function sendDiassociateCMD() {}

function sendNewCMD(remoteAddr, entity, entityName) {
  const clientSock = new Net.Socket();

  clientSock.setKeepAlive(true);

  const msg =
    "MOZA v1.0\r\n" +
    "NEW\r\n" +
    "LENGTH : 0\r\n" +
    "ARGS : 2\r\n" +
    `Entity : ${entity}\r\n` +
    `EntityName : ${entityName}\r\n` +
    "\r\n";
  clientSock.connect(remoteAddr, function() {
    console.log("TCP connection established with the server.");
    clientSock.write(msg);
  });

  // The client can also receive data from the server by reading from its socket.
  clientSock.on("data", function(chunk) {
    const str = chunk.toString();
    console.log(`Data received from the server: ${str}.`);
    const tokens = str.split("\r\n");
    if (tokens[0] === "NEW_OK") {
      console.log("l'entité a été ajouté");
    } else if (tokens[0] === "NEW_ERR") {
      console.log("Commande échoué");
      console.log("Le serveur n'a pas pu ajouter l'entité :");
      console.log(tokens[1]);
    } else {
      console.log("réponse incorrecte");
    }
  });

  clientSock.on("end", function() {
    console.log("Requested an end to the TCP connection");
  });

  clientSock.on("error", function(err) {
    console.log("error ", err.message);
  });
}

function sendDeleteCMD(remoteAddr, entity, entityName) {
  const clientSock = new Net.Socket();

  clientSock.setKeepAlive(true);

  const msg =
    "MOZA v1.0\r\n" +
    "DELETE\r\n" +
    "LENGTH : 0\r\n" +
    "ARGS : 2\r\n" +
    `Entity : ${entity}\r\n` +
    `EntityName : ${entityName}\r\n` +
    "\r\n";
  clientSock.connect(remoteAddr, function() {
    console.log("TCP connection established with the server.");
    clientSock.write(msg);
  });

  // The client can also receive data from the server by reading from its socket.
  clientSock.on("data", function(chunk) {
    const str = chunk.toString();
    console.log(`Data received from the server: ${str}.`);
    const tokens = str.split("\r\n");
    if (tokens[0] === "DELETE_OK") {
      console.log("l'entité a été supprimé");
    } else if (tokens[0] === "DELETE_ERR") {
      console.log("Commande échoué");
      console.log("Le serveur n'a pas pu supprimé l'entité :");
      console.log(tokens[1]);
    } else {
      console.log("réponse incorrecte");
    }
  });

  clientSock.on("end", function() {
    console.log("Requested an end to the TCP connection");
  });

  clientSock.on("error", function(err) {
    console.log("error ", err.message);
  });
}

module.exports = { sendContextCMD, sendUpdateCMD, sendNewCMD, sendDeleteCMD };
