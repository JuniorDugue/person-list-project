import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const Person = ({img, name, job, children}) => {
  // console.log(props);
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return(
    <article className="person">
      <img src={url} alt="person"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  )
}

const PersonList = () => {
  return(
    <section className="person-list">
      <Person img="34" name="june" job="ceo" />
      <Person img="22" name="jr" job="developer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, minus?</p>
      </Person>
      <Person img="56" name="junior" job="designer" />
    </section>
  )
}

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"))