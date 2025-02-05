import { ReactElement } from "react";

interface Buttonprops {
  varient: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const styles = {
  varients: {
    primary: "bg-purple-700 text-white pr-4 hover:bg-blue-600",
    secondary: "bg-purple-400 text-purple-700 pr-4 hover:bg-blue-200",
    default: "bg-dark-500 text-white-900",
  },
  default: " px-2 py-1 font-normal rounded-md flex items-center justify-center",
};

function Button({ varient, text, startIcon, onClick, fullWidth, loading=false }: Buttonprops) {
  return (
    <button
      onClick={onClick}
      className={
        `${
          varient
            ? styles.varients[varient] + styles.default
            : styles.varients.default + styles.default
          }` + `${fullWidth ? " w-full flex justify-center items-center" : ""}`
          + `${loading ? " opacity-40": ""}`
      }
      disabled={loading}
    >
      <div className="pr-2 ">{startIcon}</div>
      {text}
    </button>
  );
}

export default Button;
