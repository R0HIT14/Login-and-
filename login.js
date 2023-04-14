async function login() {
  let email = document.getElementById("emailfield").value;
  let pass = document.getElementById("passwordfield").value;

  // getting the value from the database if user is registered
  let userDetails = await checkUser(email, pass);
  //checking user is registed or not
  if (userDetails) {
    alert(
      `USERNAME : ${userDetails.name}\nPASS : ${userDetails.pass}\nEMAIL : ${userDetails.email}`
    );
  } else {
    alert("You'r not registered yet!");
  }
}

// getting all the values from the database
async function getValueFromDB() {
  return JSON.parse(localStorage.getItem("UserData"));
}

// checking user is registered or not
async function checkUser(email, pass) {
  let isUserFound = false;
  let Data = await JSON.parse(localStorage.getItem("UserData"));
  Data?.map((item, index) => {
    if (item.email === email && item.pass === pass) {
      isUserFound = item;
    }
  });

  return isUserFound;
}
