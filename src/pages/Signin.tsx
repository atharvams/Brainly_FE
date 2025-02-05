import Input from "../components/Input";
import Button from "../components/Button";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface SignUpResponse {
  token: string;
}

function Signin() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      setLoading(true);
      const response = await axios.post<SignUpResponse>(
        import.meta.env.VITE_BACKEND_URL + "/api/v1/auth/signin",
        {
          username: username,
          password: password,
        }
      );
      if (response.data.token) {
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
      } else {
        console.error("Invalid cred!");
      }

      navigate("/dashboard");
    } catch (error) {
      console.log("Error while signing in!!!!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
      <div className="flex flex-col items-center bg-white border-2 rounded-xl p-4 min-w-96">
        <h1 className="text-2xl font-semibold text-gray-800">Login</h1>
        <div className="pb-4 w-full">
          <Input
            reference={usernameRef}
            type="text"
            placeholder="Username"
            onChange={() => {}}
          ></Input>
          <Input
            reference={passwordRef}
            type="password"
            placeholder="password"
            onChange={() => {}}
          ></Input>
        </div>

        <Button
          onClick={signIn}
          varient="primary"
          text={loading ? "Signing in!" : "Signin"}
          fullWidth={true}
          loading={loading}
        ></Button>
      </div>
    </div>
  );
}

export default Signin;
