import React, { useState } from "react";
import style from "./style.css";
const temp = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  // password:""
};

const Multipleinputs = () => {
  const [userRegistration, setUserRegistration] = useState(temp);
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegistration({ firstname: "", lastname: "", email: "", phone: "" });
  };

  return (
    <>
      <form className="login" action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Firstname:-</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.firstname}
            onChange={handleInput}
            // onstate value=""
            name="firstname"
            id="firstname"
            minLength="3"
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname:-</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.lastname}
            onChange={handleInput}
            name="lastname"
            id="lastname"
            minLength="3"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:-</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:-</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
            maxLength="10"
          />
        </div>
        {/* <div>
                <label htmlFor="password">Password:-</label>
                <input type="password" autoComplete="off" 
                value={userRegistration.password}
                onChange ={handleInput}
                name="password" id="password" />
            </div>  */}

        <button className="button" type="submit">
          Add
        </button>
        {/* <button className="button-right" type="reset" >Reset</button> */}
      </form>
      <div>
        {records.map((curElem) => {
          const { id, firstname, lastname, email, phone } = curElem;
          return (
            <div className="showDataStyle" key={curElem.id}>
              <table>
                <tr>
                  <th>First_Name</th>
                  <th>Last_Name</th>
                  <th>email</th>
                  <th>phone</th>
                </tr>
                <td>{curElem.firstname}</td>
                <td>{curElem.lastname}</td>
                <td>{curElem.email}</td>
                <td>{curElem.phone}</td>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Multipleinputs;
