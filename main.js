// Get the current date and time
var now = new Date();

// Set the opening hours for Njoy Games & Comics
var openTime = new Date();
openTime.setHours(12, 0, 0); // 12:00 PM
var closeTime = new Date();
closeTime.setHours(17, 30, 0); // 8:00 PM

// Check if the current time is between the opening and closing times
if (now.getTime() >= openTime.getTime() && now.getTime() <= closeTime.getTime()) 
{
  document.getElementById("status").innerHTML = "Njoy Games & Comics is currently open!";
}

 else
{
  document.getElementById("status").innerHTML = "Njoy Games & Comics is currently closed.";
}