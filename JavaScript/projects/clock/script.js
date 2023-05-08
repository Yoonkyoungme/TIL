const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("time");

function getTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  todayDiv.textContent = `${year}년 ${month}월 ${date}일`;
  timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`;
}

setInterval(getTime, 1000);
