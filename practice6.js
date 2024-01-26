const ticket = 800;
const age = 60;
const isStudent = false;
if (age < 10) {
  console.log("Free  Ticket");
} else {
  if (isStudent) {
    const newTicket = ticket - (ticket * 50) / 100;
    console.log(newTicket);
  } else {
    if (age >= 60) {
      const newTicket = ticket - (ticket * 15) / 100;
      console.log(newTicket);
    } else {
      console.log(ticket);
    }
  }
}
