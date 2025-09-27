//get all neeeded DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const welcomeMessageDiv = document.getElementById("welcomeMessage"); // Add this line
const progressBar = document.getElementById("progressBar"); // Get progress bar element
const attendeeCountSpan = document.getElementById("attendeeCount"); // Get attendee count element

//Track attendance
let count = 0;
const maxCount = 10;
//handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); //prevent default form submission

  //get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.options[teamSelect.selectedIndex].text; // Use selected option

  console.log(name, team, teamName);

  //increcement count
  count++;
  attendeeCountSpan.textContent = count; // Update attendee count
  console.log("Total check-ins: ", count);

  //update progress bar
  const percentage = Math.round((count / maxCount) * 100);
  progressBar.style.width = `${percentage}%`; // Update bar width
  console.log(`Progress: ${percentage}%`);

  //update team count
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //show welcome message
  const message = `Welcome, ${name} from ${teamName}!`;
  welcomeMessageDiv.textContent = message;
  console.log(message);

  form.reset();
});
