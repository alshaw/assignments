import React from "react";

function Contact(props) {
  return (
    <div className="contact-wrapper">
      <h1>Contact</h1>
      <p>Drop a line if you want a pointless site like this one.</p>
      <div className="form-container">
        <form action="/action_page.php">
          <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <input type="submit" value="Submit"></input>
        </form>
    </div>
  </div>
  )
}

export default Contact;
