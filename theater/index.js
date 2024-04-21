let theaterSeats = [
    ['X','0','X'],
    ['0','0','X'],
    ['X','0','0']
]



function bookSeat(row, col)  {
    if(theaterSeats[row][col] === '0') {
        const say = confirm(`Do you want to take seat ${String.fromCharCode(65 + row)}${col + 1}`)
        if(say === true) {
            updatesSeatStatus(row, col, 'booked');
            theaterSeats[row][col] = 'X';
            alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is booked`);
        }
    } else {
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already booked`);
    }
}

function updatesSeatStatus(row, col, status) {
    const seats = document.querySelectorAll(".seat");
    const index = row * 3 + col;
    seats[index].classList.remove('available', 'booked');
    seats[index].classList.add(status);
}

function bookRandomSeat() {
    availableSeats = [];
    for(let row = 0; row < theaterSeats.length; row++) {
        for(let col = 0; col < theaterSeats[row].length; col++) {
            if(theaterSeats[row][col] === '0') {

                availableSeats.push({row, col});
            }
        }
    }

    if(availableSeats.length > 0) {
        const random = Math.floor(Math.random() * availableSeats.length)
        const {row, col} = availableSeats[random];
        bookSeat(row, col);
    } else {
        alert("All seats are already booked")
    }
}