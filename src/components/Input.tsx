
interface InputProps{
    onChange: ()=> void;
    placeholder: string;
    type: string;
    reference?: any;
}

function Input({onChange, placeholder, type, reference}:InputProps) {

  return (
    <div>
        <input ref={reference} type={type} placeholder={placeholder} onChange={onChange}
        className="px-4 py-2 border rounded mb-2 mt-4 min-w-full"></input>
    </div>
  )
}

export default Input