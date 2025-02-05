import Input from "../components/Input";
import Button from "../components/Button";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      setLoading(true);
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/v1/auth/signup",
        {
          username: username,
          password: password,
        }
      );
    } catch (error) {
      console.log("Error while signing up!!!!");
    } finally {
      setLoading(false);
    }

    navigate("/signin");
  };
  return (
    <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
      <div className="flex flex-col items-center bg-white border-2 rounded-xl p-4 min-w-96">
        <h1 className="text-2xl font-semibold text-gray-800">Register</h1>
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
          varient="primary"
          text={loading ? "Signing up!!" : "Sign Up"}
          fullWidth={true}
          onClick={signUp}
          loading={loading}
        ></Button>
      </div>
    </div>
  );
}

export default Signup;
