document.querySelectorAll('.top-installer-card');

const dropoffInput = document.getElementById("dropoff");
const pickupInput = document.getElementById("pickup");
const pickupHelp = document.getElementById("pickupHelp");

function validateTimes() {
  const dropoff = new Date(dropoffInput.value);
  const pickup = new Date(pickupInput.value);

  if (dropoff && pickup) {
    const diffHours = (pickup - dropoff) / (1000 * 60 * 60);
    if (diffHours < 8) {
      pickupHelp.textContent = "Pickup must be at least 8 hours after dropoff.";
      pickupInput.setCustomValidity("Invalid pickup time");
    } else {
      pickupHelp.textContent = "";
      pickupInput.setCustomValidity("");
    }
  }
}

dropoffInput.addEventListener("change", validateTimes);
pickupInput.addEventListener("change", validateTimes);
