//store stuff
const form = document.getElementById("jobApplication");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const fields = {
    "username": "Username",
    "password": "Password",
    "firstName": "First Name",
    "middleInitial": "Middle Initial",
    "lastName": "Last Name",
    "dob": "Date of Birth",
    "socialSecurity": "Social Security",
    "address1": "Address Line 1",
    "address2": "Address Line 2",
    "city": "City",
    "state": "State",
    "zipCode": "Zip Code",
    "email": "Email",
    "description": "Describe yourself",
    "chicken-pox": "Chicken Pox",
    "measles": "Measles",
    "covid-19": "Covid-19",
    "own-or-rent": "Own or Rent",
    "vaccinated": "Vaccinated",
    "salaryRange": "Desired Salary",
    "position": "Position Applied",
    "resume": "Resume"
  };
  let rtfData = "{\rtf1\\ansi\n";
for (const field in fields) {
  const value = formData.get(field);
  if (value) {
    rtfData += `\\b ${fields[field]} : ${value}\n`;
  }
}
rtfData += "}";

  const file = new Blob([rtfData], { type: "application/rtf" });
  const a = document.createElement("a");
  const url = URL.createObjectURL(file);
  a.href = url;
  a.download = "application.rtf";
  a.click();
});

  // check if confirm pwd valid
  document.getElementById("jobApplication").addEventListener("submit", function(event) {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
  alert("Passwords do not match. Please try again.");
  event.preventDefault();
  }
  });
  //slide bar
  var salaryRange = document.getElementById("salaryRange");
  var salaryAmount = document.getElementById("salaryAmount");

  salaryRange.oninput = function() {
  salaryAmount.innerHTML = salaryRange.value + "$/year";
  }