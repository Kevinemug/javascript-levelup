// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
const removeGeese = birds => {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let filteredList= birds.filter(bird => !geese.includes(bird))
    return  filteredList;
}