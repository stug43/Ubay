var date = new Date;
let heures = date.getHours() ;
let minutes = date.getMinutes() ;
let secondes = date.getSeconds() ;
function twoDigits(n) {
	return (n<10? '0':'') + n;
}
function horloge() {
	if (secondes>=59){
		secondes = 0;
		if (minutes>=59){
			minutes = 0;
			if (heures>=23){
				heures = 0}
			else{
				heures++}}
		else {
			minutes++}}
	else {
		secondes++}
	document.getElementById("hoursection").innerHTML = twoDigits(heures)+":"+twoDigits(minutes)+":"+twoDigits(secondes);
}
setInterval(horloge,1000)
