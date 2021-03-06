import "./styles.scss";

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let prevYearButton = document.getElementById("prevyear");
let nextYearButton = document.getElementById("nextyear");

let currentDate = new Date();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const getFirstDay = (yr, mn) => new Date(yr, mn).getDay();
const getDaysOfMonth = (yr, mn) => new Date(yr, mn, 0).getDate();

const showCalendar = (m, y) => {

  let date = 1;

  let dateDiv = document.getElementById("current_dt");

  let firstDay = getFirstDay(y, m);
  let noOfDays = getDaysOfMonth(y, m);

  let calendarBody = document.getElementById("calendar__body");

  dateDiv.innerHTML = months[month] + " " + year;

  calendarBody.innerHTML = "";

  for (let i = 0; i < 6; i++) {

    let dateRow = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (date > noOfDays) {
        break;
      } else if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        dateRow.appendChild(cell);
      } else {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(date);
        cell.setAttribute("class", "calendar__days");
        if (currentDate.getDate() === date) {
          cell.classList.add("current__day_highlighter");
        }
        cell.appendChild(cellText);
        dateRow.appendChild(cell);
        date++;
      }
    }
    dateRow.setAttribute("class", "calendar__row");
    calendarBody.appendChild(dateRow);
  }
};

showCalendar(month, year);

const nextMonth = () => {
  year = month === 11 ? year + 1 : year;
  month = month === 11 ? 0 : month + 1;
  showCalendar(month, year);
};

const prevMonth = () => {
  year = month === 0 ? year - 1 : year;
  month = month > 0 ? month - 1 : 11;
  showCalendar(month, year);
};

const prevYear = () => {
  year = year - 1;
  showCalendar(month, year);
}

const nextYear = () => {
  year = year + 1;
  showCalendar(month, year);
}

nextButton.addEventListener("click", nextMonth);
prevButton.addEventListener("click", prevMonth);
prevYearButton.addEventListener("click", prevYear);
nextYearButton.addEventListener("click", nextYear);
nextButton.addEventListener("keypress", nextMonth);
prevButton.addEventListener("keypress", prevMonth);
prevYearButton.addEventListener("keypress", prevYear);
nextYearButton.addEventListener("keypress", nextYear);