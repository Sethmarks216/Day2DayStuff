var date= moment().format('MMM Do YYYY, h:mm:ss a');
console.log(date);
var dateEL = document.querySelector("#date");
console.log(dateEL);
dateEL.textContent = date;