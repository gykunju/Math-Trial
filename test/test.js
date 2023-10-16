const drivers = [
    "John",
    "Jane",
    "Jake",
    "Jill",
    "Jim"
    ]
    
function fuzzyMatch(drivers, letters){
        return drivers.filter((driver) => driver.toLowerCase().startsWith(letters.toLowerCase()))
}

console.log(fuzzyMatch(drivers, "ja"))
console.log(fuzzyMatch(drivers, "JI"))
console.log(fuzzyMatch(drivers, "BO"))