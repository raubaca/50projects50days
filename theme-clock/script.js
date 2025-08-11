const html = document.documentElement;
const toggle = document.getElementById("toggle");

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

toggle.addEventListener("click", (e) => {
  html.classList.toggle("dark");
  e.target.textContent = html.classList.contains("dark")
    ? "Light mode"
    : "Dark mode";
});

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const setTime = () => {
  const time = new Date();

  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%) rotate(${
    (hoursForClock + minutes / 60) * 30
  }deg)`;
  minuteEl.style.transform = `translate(-50%) rotate(${
    (minutes + seconds / 60) * 6
  }deg)`;
  secondEl.style.transform = `translate(-50%) rotate(${seconds * 6}deg)`;

  timeEl.textContent = `${hoursForClock}:${String(minutes).padStart(
    2,
    "0"
  )} ${ampm}`;

  dateEl.innerHTML = `${daysOfWeek[day]}, ${monthsOfYear[month]} <span class="circle">${date}</span>`;
};

setTime();

setInterval(setTime, 1000);
