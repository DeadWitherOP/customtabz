function updateTime() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Convert to two-digit format
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Display time in HH MM format
  clockElement.innerHTML = hours + '<br>' + minutes;
}

setInterval(updateTime, 1000);
updateTime();

// Add event listeners for the buttons
document.getElementById('button1').addEventListener('click', function() {
  redirectTo('https://classroom.google.com');
});

document.getElementById('button2').addEventListener('click', function() {
  redirectTo('https://slides.google.com');
});

document.getElementById('button3').addEventListener('click', function() {
  redirectTo('https://docs.google.com');
});

document.getElementById('button4').addEventListener('click', function() {
  redirectTo('https://drive.google.com');
});

document.getElementById('button5').addEventListener('click', function() {
  redirectTo('https://mail.google.com');
});

function redirectTo(url) {
  window.location.href = url;
}
