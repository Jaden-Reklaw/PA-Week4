/*
	Week 1-4 Review

*/


//global variables
const seatsInCar = 5;
let passengers = [];
let tankFull = false;

//Function to check if there's enough room in the car
function enoughSeats() {
	console.log( 'in enoughSeats');
	if (seatsInCar >= passengers.length) {
		return true;
	} else {
		return false;
	}
} //end enoughSeats

//Function for people getting into a car
function getInCar (nameOfPassenger) {
	console.log('in getInCar', nameOfPassenger);
	//push the new passenger into our passengers array
	return passengers.push(nameOfPassenger);
}

function readyForRoadTrip() {
	console.log(' in readyForRoadTrip');
	if(enoughSeats() && tankFull) {
		return true;
	} else {
		return false;
	}
}//end readyForRoadTrip

getInCar('You');
getInCar('Me');
getInCar('Him');
getInCar('Her');
getInCar('I');

console.log('enough seats?', enoughSeats());
console.log('are we ready for the road trip?', readyForRoadTrip());






