const timeDiv = document.getElementById("time");

function getTime() {
  let now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`;
}

setInterval(getTime, 1000);
