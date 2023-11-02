function updateTime() {
  //Bangkok
  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");
    let bangkokTime = moment().tz("Asia/Bangkok");
    bangkokDateElement.innerHTML = bangkokTime.format("MMMM D, YYYY");
    bangkokTimeElement.innerHTML = bangkokTime.format(
      "h:mm:ss [<small>]A[<small>]"
    );
  }
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM D, YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[<small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityNameSelect = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class = "city">
    <div>
     <div class="cityName">${cityNameSelect}</div>
     <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}<small></div>
 </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#citySelect");
citySelectElement.addEventListener("change", updateCity);
