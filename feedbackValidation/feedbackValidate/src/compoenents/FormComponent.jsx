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
    const checkName = /\d/;
    const checkPhoneRegex = /[a-zA-Z]/;
    const checkEmailRegex = /\d/;
    const pincodeRegex = /[a-zA-Z]/;
    const checkPhone = checkPhoneRegex.test(data.phone);
    const emailCheck = checkEmailRegex.test(data.email);
    const namechk = checkName.test(data.name);
    const checkPincode = pincodeRegex.test(data.pincode);
    if (namechk) {
      alert("Name cannot contain numbers");
    } else if (checkPhone) {
      alert("Phone number cannot contain letters");
    } else if (emailCheck) {
      alert("Email should contain @ and `.`");
    } else if (checkPincode) {
      alert("Pincode cannot contain letters");
    } else {
      console.log("data sent");
    }
  };

  const handleonChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form
        className="form-container"
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter Name"
          onChange={(e) => handleonChange(e)}
          value={data.name}
        />
        <label htmlFor="email">Email ID</label>
        <input
          type="text"
          name="email"
          required
          id="email"
          placeholder="Enter Email"
          onChange={handleonChange}
          value={data.email}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          placeholder="Enter Phone"
          onChange={handleonChange}
          value={data.phone}
        />
        <label htmlFor="pincode">Pincode</label>
        <input
          type="text"
          name="pincode"
          id="pincode"
          required
          placeholder="Enter Pincode"
          onChange={handleonChange}
          value={data.pincode}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
