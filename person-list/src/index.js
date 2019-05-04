import React from "react";
import ReactDOM from "react-dom";

const Person = props => {
  console.log(props);
  return(
    <article>
      <img src="https://randomuser.me/api/portraits/thumb/men/61.jpg" alt="person"/>
      <h4>name</h4>
      <h4>job</h4>

    </article>
  )
}

const PersonList = () => {
  return(
    <section>
      <Person img="34" name="john" job="developer" />
    </section>
  )
}

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"))