//sets current time in header area
var date = moment().format('MMM Do YYYY, h:mm:ss a');
var dateEL = document.querySelector("#date");
dateEL.textContent = date;

//loop thru all time block html elements
var timeblockElements = document.querySelectorAll(".time-block");
for (let i = 0; i < timeblockElements.length; i++) {
    
    //get current date values
    var currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    //gets time value as number from html
    const element = timeblockElements[i];
    const hourHtmlString = element.querySelector(".hour").innerHTML;

    //strip non-digit characters from html hour string e.g. 9am or 2pm
    const hourValueAsString = hourHtmlString.match(/\d+/g)[0];
    var hourValue = parseInt(hourValueAsString);

    //convert hour number to 24 hour clock
    const isAm = hourHtmlString.includes("am");
    if(!isAm) {
        hourValue = hourValue + 12;
    } 

    //format hour number as string for moment date
    var hourValueAsTimeString = hourValue.toString();
    if(hourValue < 10) {
        hourValueAsTimeString = 
            addLeadingZeroToString(hourValue.toString());
    }
    
    //format month number as string for moment date
    var monthValueAsString = currentMonth.toString();
    if(currentMonth < 10) {
        monthValueAsString = 
            addLeadingZeroToString(currentMonth.toString());
    }
    
    const dateString = 
        currentYear.toString() + "-" + 
        monthValueAsString + "-" + 
        currentDay.toString() +
        " " + hourValueAsTimeString + ":00";
    var timeBlockDate = moment(dateString, "YYYY-MM-DD HH:mm");

    /**
     * set timeblock color using helper 
     * css classes: past, present, or future
     *  */

    var timeBlockHour = timeBlockDate.hour();
    var momentHour = moment().hour();
    if(momentHour < 10) {
        momentHour = momentHour + 12;
    } 

    //console.log('timeBlockHour:', timeBlockHour);
    //console.log('momentHour:', momentHour);
    
    var textArea = element.querySelector("textarea");
    if(timeBlockHour < momentHour) {
        textArea.setAttribute("class", "description col-8 past");
    } else if (timeBlockHour == momentHour) {
        textArea.setAttribute("class", "description col-8 present");
    } else {
        textArea.setAttribute("class", "description col-8 future");
    }
}

function addLeadingZeroToString(_data) {
    if(_data != null) {
        return "0" + _data;
    }   
}