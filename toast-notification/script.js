const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["Hello!", "Bye!", "How Are You?", "See You Later!"];
const types = ["info", "success", "error", "alert"];

const createNotification = (message = null, type = null) => {
  const notif = document.createElement("li");
  notif.classList.add("toast");
  notif.classList.add(type ?? getRandom(types));
  notif.textContent = message ?? getRandom(messages);

  toasts.appendChild(notif);

  setTimeout(() => notif.remove(), 3000);
};

button.addEventListener("click", () => createNotification());

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
