import React, {useRef, useState} from 'react'
import './FormsStyles.css'

    // show a message with a type of the input
    function showMessage(input, message, type) {
        // get the small element and set the message
        const msg = input.parentNode.querySelector("small");
        msg.innerText = message;
        // update the class for the input
        input.className = type ? "success" : "error";
        return type;
    }
    
    function showError(input, message) {
        return showMessage(input, message, false);
    }
    
    function showSuccess(input) {
        return showMessage(input, "", true);
    }
    
    function hasValue(input, message) {
        if (input.value.trim() === "") {
            return showError(input, message);
        }
        return showSuccess(input);
    }
    
    function validateEmail(input, requiredMsg, invalidMsg) {
        // check if the value is not empty
        if (!hasValue(input, requiredMsg)) {
            return false;
        }
        // validate email format
        const emailRegex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        const email = input.value.trim();
        if (!emailRegex.test(email)) {
            return showError(input, invalidMsg);
        }
        return true;
    }
    
    
    
function Forms() {
    // const form = document.querySelector("#signup");
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const NAME_FORM = useRef();
    const EMAIL_FORM = useRef();
    const NAME_REQUIRED = "Please enter your name";
    const EMAIL_REQUIRED = "Please enter your email";
    const EMAIL_INVALID = "Please enter a correct email address format";
    
    // form.addEventListener("submit", function (event) {
        const handleSubmit = function (event) {
        console.log(firstName)
        // stop form submission
        event.preventDefault();
    
        // // validate the form
        // let nameValid = hasValue(NAME_FORM.current, NAME_REQUIRED);
        // let emailValid = validateEmail(EMAIL_FORM.current, EMAIL_REQUIRED, EMAIL_INVALID);
        // // if valid, submit the form.
        // if (nameValid && emailValid) {
        //     alert("Data submitted to database.");
        // }
    };

  return (
    
    
    <div>
        <div className="nameFields">
            <form action="signup.html" method="post" onSubmit={handleSubmit} id="signup" class="#signup">
                <h1>One Step Closer to Reward</h1>
            <div className="bodyTxt">
                <p>Receive 2000 bonus miles for you and 1500 miles for a friend when they create an American Advantage account and earn 750 miles from qualifying purchases</p>
            </div>

	    <div class="field">
		    <label for="fName">First Name:</label>
		    <input type="text" id="fName" onChange={(e)=>setFirstName(e.target.value)} name="fName" placeholder="Enter your first name" />
		    <small></small>
	    </div>

	    <div class="field">
		    <label for="lName">Last Name:</label>
		    <input type="text" id="lName" onChange={(e)=>setLastName(e.target.value)} name="lName" placeholder="Enter your last name" />
		    <small></small>
	    </div>
	    <div class="field">
		    <label for="email">Email:</label>
		    <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Enter your email address" />
		    <small></small>
	    </div>
	<button type="submit">Refer</button>
    <button type="submit">Refers</button>
        </form>
        </div>
        
    </div>
  )
}

export default Forms