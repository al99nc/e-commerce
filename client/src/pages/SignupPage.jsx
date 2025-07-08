import React, { useState } from "react";
import { signup } from "../services/api";

function SignupPage() {
  const [name, setName] = useState(""); //me
  const [email, setEmail] = useState(""); //you can create this as obj so when someone read the code dont think you an dmup
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); //ai + its not that important
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); //so the page dont reload
    setLoading(true);
    setError("");

    try {
      const result = await signup({
        name: name, //this is the userData
        email: email,
        phone: phone,
        password: password,
      });

      console.log("signup success:", result);
      alert("Account created!");

      // save token
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
    } catch (error) {
      console.log("signup error:", error);
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Sign Up</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
