let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
const isOccupied = (slot) => {
    return slot === 1
}
const isAvailable = (slot) => {
    return slot === 2
}
const getParkingLotState = function (parkingState) {
    let availableSlots = 0;
    let occupiedSlots = 0;
    parkingState.forEach((row) => {
        const rowAvailableSlots = row.filter(isAvailable).length
        availableSlots = availableSlots + rowAvailableSlots
        const rowOccupiedSlots = row.filter(isOccupied).length
        occupiedSlots = occupiedSlots + rowOccupiedSlots
    });
    return {
        totalSlots: availableSlots + occupiedSlots,
        availableSlots: availableSlots,
        occupiedSlots: occupiedSlots
    }
}
console.log(getParkingLotState(parking_state))