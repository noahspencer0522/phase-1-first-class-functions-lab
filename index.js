const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}   
    const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(number){
    return function insidefunction(fare){
        return number * fare
    }
}
const fareDoubler = function (number){
    return number * 2
}
const fareTripler = function (number){
    return number * 3
}
const selectDifferentDrivers = [returnFirstTwoDrivers]
        
    
