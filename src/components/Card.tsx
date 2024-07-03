import GeneratePassword from "./GeneratePassword";
import Password from "./Password";
import Properties from "./Properties";

const Card = () => {
  return (
    <div className="flex flex-col bg-slate-800  w-2/5 p-5 space-y-8">
      <Password></Password>
      <Properties></Properties>
      <GeneratePassword></GeneratePassword>
    </div>
  );
};
export default Card;
