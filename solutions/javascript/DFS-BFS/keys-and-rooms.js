/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    // initiate set to store unique values
    let visited = new Set();
    // add 0 since door 0 is unlocked at beginning
    visited.add(0);
    // initiate total to count total unlocked doors
    let total = 0;
    
    // create depth first search recursive function
    // to visit next room and increase total count
    const dfs = (room) => {
        room.forEach(item => {
            if (!visited.has(item)) {
                visited.add(item);
                total++;
                dfs(rooms[item])
            }
        });
    };
    
    // start dfs function
    dfs(rooms[0]);
    
    // if they are equal, then it means all doors are unlocked
    return total === rooms.length - 1;
};
