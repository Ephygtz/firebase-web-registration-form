//initialize Firebase

  // Your web app's Firebase configuration
  var firebaseConfig = {
  	apiKey: "AIzaSyD4ZTwPI_X7fUdc6FzmE5_fcuOi-bDluNE",
  	authDomain: "webregistration.firebaseapp.com",
  	databaseURL: "https://webregistration.firebaseio.com",
  	projectId: "webregistration",
  	storageBucket: "webregistration.appspot.com",
  	messagingSenderId: "474427357141",
  	appId: "1:474427357141:web:f2b1c31c09d00ce2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference for form collection
// create a database collection
let formMessage = firebase.database().ref('register');


//listen for submit event
document
	.getElementById('registrationForm')
	.addEventListener('submit', formSubmit);

//submit form
function formSubmit(e) {
	e.preventDefault();

	//get form values from DOM
	let name = document.querySelector('#name').value;
	let email = document.querySelector('#email').value;
	let password = document.querySelector('#password').value;
	let bio = document.querySelector('#bio').value;
	let job = document.querySelector('#job').value;
	let interest = document.querySelector('#interest').value;

	//post to firebase
	sendMessage(name, email, password, bio, job, interest);

	//show alert message
	document.querySelector('.alert').style.display = 'block';

	//Hide alert message after seven seconds
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	}, 7000);

	//Reset form fields after submission
	document.getElementById('registrationForm').reset();

	
}


//send data from form to collection we've just created to Firebase
function sendMessage(name, email, password, bio, job, interest){
	let newFormMessage = formMessage.push();

	newFormMessage.set({
		name: name,
		email: email,
		password: password,
		bio: bio,
		job: job,
		interest: interest
	});
}