import React, { useState } from "react";

function FormComponent() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameContainsNumber = /\d/.test(data.name);
    const phoneContainsLetter = /[a-zA-Z]/.test(data.phone);
    const emailIsValid = /@.*\./.test(data.email);
    const pincodeContainsLetter = /[a-zA-Z]/.test(data.pincode);

    if (nameContainsNumber) {
      alert("Name cannot contain numbers");
    } else if (phoneContainsLetter) {
      alert("Phone number cannot contain letters");
    } else if (!emailIsValid) {
      alert("Email should contain @ and .");
    } else if (pincodeContainsLetter) {
      alert("Pincode cannot contain letters");
    } else {
      console.log("data sent");
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter Name"
          onChange={handleChange}
          value={data.name}
        />

        <label htmlFor="email">Email ID</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          placeholder="Enter Email"
          onChange={handleChange}
          value={data.email}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          placeholder="Enter Phone"
          onChange={handleChange}
          value={data.phone}
        />

        <label htmlFor="pincode">Pincode</label>
        <input
          type="text"
          name="pincode"
          id="pincode"
          required
          placeholder="Enter Pincode"
          onChange={handleChange}
          value={data.pincode}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
