let male_or_femake = "";
if (localStorage.getItem("UserData") == null) {
  localStorage.setItem("UserData", JSON.stringify([]));
}

// register function to add all the details to the local storage
async function Register() {
  let username = document.getElementById("usernamefield").value;
  let email = document.getElementById("emailfield").value;
  let pass = document.getElementById("passfield").value;
  let confirmpass = document.getElementById("confirmpassfield").value;
  let phone_no = document.getElementById("phonefield").value;
  let date = document.getElementById("agefield").value;

  let obj = {
    name: username,
    email: email,
    pass: pass,
    phoneno: phone_no,
    isMale: male_or_femake === "male" ? true : false,
    date: date,
  };

  // Checking if both the password are matching or not
  if (!(pass === confirmpass)) {
    alert("Both passwords are not same ");
    return;
  }

  //  checking if user filled both the details or not
  if (!username || !email || !pass || !phone_no || !date || !male_or_femake) {
    alert("Please enter all details before registering");
    return;
  }

  addToDB(obj);
  
}

//  setting the value of male and female to a single variable
function getMale_Female(value) {
  male_or_femake = value;
}

//  adding the values to the database
async function addToDB(value) {
  let oldData = await JSON.parse(localStorage.getItem("UserData"));
  oldData.push(value);
  await localStorage.setItem("UserData", JSON.stringify(oldData));
}

// getting all the values from the database
async function getValueFromDB() {
  return JSON.parse(localStorage.getItem("UserData"));
}

// check email in db
async function checkEmail(email) {
  let isEmailThere = false;
  let Data = await JSON.parse(localStorage.getItem("UserData"));
  Data?.map((item, index) => {
    for (const [key, value] of Object.entries(item)) {
      if (key === "email") {
        if (value === email) {
          isEmailThere = true;
        }
      }
    }
  });

  return isEmailThere;
}
