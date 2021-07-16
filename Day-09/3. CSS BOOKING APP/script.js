let bookedSeatsElement = document.querySelector(".booking_seats");
let remainingSeatsElement = document.querySelector(".remaining_seats");
let seats = document.querySelectorAll(".seats");

let bookedSeats = 0;
let reaminingSeats = seats.length;

bookedSeatsElement.innerText = bookedSeats;
remainingSeatsElement.innerText = reaminingSeats;

seats.forEach((seat) => {
  seat.addEventListener('click', () => {
    console.log("you clicked");
    seat.classList.toggle('booked');
    seat.classList.contains('booked') ? bookSeats(1) : bookSeats(-1);
  });
});

const bookSeats = (s) => {
  bookedSeats += 1 * s;
  reaminingSeats -= 1 * s;

  bookedSeatsElement.innerText = bookedSeats;
  remainingSeatsElement.innerText = reaminingSeats;
};

