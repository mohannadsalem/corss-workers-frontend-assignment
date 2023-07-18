import { FunctionComponent, useState } from "react";
import "./index.scss";

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // If you want to do something with form submit
    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-5">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Task5;
