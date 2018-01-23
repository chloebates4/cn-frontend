var socket = io("https://gardenbox.duper51.me", {
    path: "/api/socket.io",
    query: {
        roomName: listenTo
    }
});
socket.on('connect', function () {
    console.log("connected");
});
socket.on('event', function (data) {console.log(data)});
socket.on('disconnect', function () {console.log("disconnected")});
if(listenTo === undefined) {
    console.error("listenTo undefined");
}
socket.on("svrerror", function (data) {
    console.error(data);
});
socket.on("payment", function (data) {
   if(data.from !== undefined && data.amount !== undefined) {
       $("whodonated").text(data.from);
       $("howmuch").text(data.amount);
   }
});
