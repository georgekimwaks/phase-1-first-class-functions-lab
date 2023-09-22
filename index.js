
const returnFirstTwoDrivers = function(drivers){
    let newDrivers = drivers.slice(0,2);
    return newDrivers;
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])



const returnLastTwoDrivers = function(drivers){
    let newDrivers = drivers.slice(-2);
    return newDrivers;
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(num) {
    return function(fareMultiplier) {
        return fareMultiplier * num;
    }
}

const fareDoubler = function(fareMultiplier) {
    return createFareMultiplier(2)(fareMultiplier);
}

const fareTripler = function(fareMultiplier) {
    return createFareMultiplier(3)(fareMultiplier);
}


function selectDifferentDrivers(arrayOfDrivers, drivers){
    return drivers(arrayOfDrivers)  
}

selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);