import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { database, auth, ref, set } from "./firebase";
import "./Signup.css";

const Signup = ({ onSignup }) => {            
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userRef = ref(database, "users/" + user.uid);
      await set(userRef, { email: user.email, createdAt: new Date().toISOString() });

      if (onSignup) onSignup(user.email);     
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="signup">
      <h2>Signup</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="signup-form" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;