const socket = io("https://catbackendapp.herokuapp.com/");

/*
	On connect event, Detecta cuando se conecta al servidor
*/
socket.on("connect", () => {
  console.log("Scoket Id",socket.id);
});


