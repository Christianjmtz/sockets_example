const socket = io("localhost:1337");

/*
	On connect event, Detecta cuando se conecta al servidor
*/
socket.on("connect", () => {
  console.log("Scoket Id",socket.id);
});


