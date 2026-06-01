import { useState } from "react";
import axios from "axios";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const login = async () => {
const res = await axios.post(
"http://localhost:5000/api/login",
{ email, password }
);

```
alert(res.data.message);
```

};

return ( <div> <h2>Bus Booking Login</h2>

```
  <input
    placeholder="Email"
    onChange={(e) => setEmail(e.target.value)}
  />

  <br /><br />

  <input
    type="password"
    placeholder="Password"
    onChange={(e) => setPassword(e.target.value)}
  />

  <br /><br />

  <button onClick={login}>Login</button>
</div>
```

);
}

export default Login;
