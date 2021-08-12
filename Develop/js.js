var date = moment().format('MMM Do YYYY, h:mm:ss a');

var dateEL = document.querySelector("#date");

dateEL.textContent = date;

var timeblockElements = document.querySelectorAll(".time-block");

for (let i = 0; i < timeblockElements.length; i++) {
    const element = timeblockElements[i];
    const hourHtmlString = element.querySelector(".hour").innerHTML;
    const hourValueAsString = hourHtmlString.match(/\d+/g)[0];
    var hourValue = parseInt(hourValueAsString);
    var hourValueAsTimeString = "T";
    const isAm = hourHtmlString.includes("am");

    if(!isAm) {
        hourValue + 12;
    } 
    
    if(hourValue < 10) {
        hourValueAsTimeString = "0" + hourValue.toString();
    } else {
        hourValueAsTimeString = hourValue.toString();
    }

    var currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    console.log(hourValueAsTimeString);
    var momentDate = moment(
            currentYear + "-" + 
            currentMonth + "-" + 
            currentDay +
            hourValueAsTimeString)
            .format("YYYY-MM-DDTHH");

    console.log("momentDate", momentDate);
}
