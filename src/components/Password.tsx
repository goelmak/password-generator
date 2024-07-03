import { useRecoilValue } from "recoil";
import { passwordState } from "../store/atom";

const Password = () => {
  const password = useRecoilValue(passwordState);
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(password);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <div className="flex justify-between">
      <input
        className="text-white font-bold text-2xl focus:outline-none bg-slate-800"
        placeholder="password"
        value={password}
        readOnly
      ></input>
      <button
        className="rounded bg-gray-200 hover:bg-gray-300 font-medium text-purple-900 p-2"
        onClick={handleClick}
      >
        copy
      </button>
    </div>
  );
};
export default Password;
