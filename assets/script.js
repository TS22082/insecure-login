//create a function for a failed attempt
var setFailedLogin = function() {
  document.getElementById('mainCard').innerHTML =
    '<h1 id="message" class="text-danger text-center">Intruder Detected</h1><a href="/"><button type="button" class="btn btn-danger btn-lg btn-block">Try Again</button></a>'

  document.querySelector('#cardHeader').innerHTML = 'Notifying Authorities'
}

//create a function for a successful login
var setSuccessLogin = function() {
  document.getElementById('mainCard').innerHTML =
    '<h1 id="message" class="text-success text-center">User Authenticated</h1><a href="/"><button type="button" class="btn btn-danger btn-lg btn-block">Sign out</button></a>'
  document.querySelector('#message').innerHTML = 'Access Granted'
  document.querySelector('#cardHeader').innerHTML = 'Success'
}

// set login for handling a button click with id='loginBtn'
document.getElementById('loginBtn').addEventListener('click', function() {
  // get values from textfields
  userName = document.getElementById('username').value
  password = document.getElementById('password').value

  // both statements need to be true, this is our very basic auth system
  // we can totally hack this I can show you how!
  if (userName === 'admin' && password === 'adminadmin') {
    // if succesful do our success function
    setSuccessLogin()
  } else {
    // if not run our failed function
    setFailedLogin()
  }
})
