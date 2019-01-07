// Code your solution here:
function driversWithRevenueOver(array, number) {
    return array.filter(driver => driver.revenue > number)
}

function driverNamesWithRevenueOver(array, number) {
    return array.filter(driver => driver.revenue > number).map(driver => driver.name)
}

function exactMatch(array, o){
    return array.filter(driver => driver[Object.keys(o)[0]] == o[Object.keys(o)[0]])
}

function exactMatchToList(array, o){
    return array.filter(driver => driver[Object.keys(o)[0]] == o[Object.keys(o)[0]]).map(driver => driver.name)
}
const drivers = [
    { name: 'Sally',   revenue: 400 },
    { name: 'Sally',   revenue: 200 },
    { name: 'Annette', revenue: 200 }
  ]

// console.log(driversWithRevenueOver(array, 300))
console.log(exactMatchToList(drivers, {name: "Sally"}))

