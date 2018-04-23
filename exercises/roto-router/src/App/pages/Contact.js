import React from "react";

function Contact(props) {
  return (
    <div className="contact-wrapper">
      <h1>Contact</h1>
      <div className="form-container">
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
