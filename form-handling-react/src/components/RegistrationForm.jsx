import React, { useState } from "react";

const RegistrationForm = () => {
  const [value, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username) {
      setErrors("All fields are required.");
      return;
    }
    if (!email) {
      setErrors("All fields are required.");
      return;
    }

    if (!password) {
      setErrors("All fields are required.");
      return;
    }

    setErrors("");
    console.log("Form submitted:", formData);
    alert("User registered successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h2>User Registration</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
