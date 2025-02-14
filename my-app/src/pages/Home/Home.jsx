import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Home({ currentUser }) {
  return (
    <div>
      <Navbar currentUser={currentUser} />
      <h1>welcome to home page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        esse neque provident harum. Odio, consectetur earum laboriosam eveniet
        vel porro nesciunt delectus, quas facilis sit fugiat culpa aliquid
        voluptate ad?
      </p>
    </div>
  );
}

export default Home;
