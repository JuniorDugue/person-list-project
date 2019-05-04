import React from "react";
import ReactDOM from "react-dom";

const Person = () => {
  return(
    <article>
      <img src="https://randomuser.me/api/portraits/thumb/men/65.jpg" alt="person image"

      />
      <h4>name</h4>
      <h4>job</h4>

    </article>
  )
}

const PersonList = () => {
  return(
    <section>
      <Person />
    </section>
  )
}

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"))