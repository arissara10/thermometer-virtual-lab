
const nameInput = document.getElementById("playerName");
const roomInput = document.getElementById("roomCode");
const joinButton = document.getElementById("joinButton");
const message = document.getElementById("message");

joinButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const room = roomInput.value.trim();

  if (!name) {
    message.textContent = "กรุณากรอกชื่อนักวิทยาศาสตร์";
    return;
  }

  if (!/^\d{6}$/.test(room)) {
    message.textContent = "กรุณากรอกรหัสห้อง 6 หลัก";
    return;
  }

  message.textContent =
    "ข้อมูลถูกต้อง! รอเชื่อมต่อห้องแข่งขัน";
});
