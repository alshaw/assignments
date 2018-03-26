import React from "react";
import buzz from "../../images/buzz.jpg"

function Content() {
  return (
    <content>
      <h3>Here is some content</h3>
      <p>Buzz is a super neat dog.</p>
      <p>He loves roof top sunsets, long naps on the beach, and squirrel watching (similar to whale watching).</p>
      <img src={buzz} alt="buzz" />
    </content>
  )
}

export default Content;