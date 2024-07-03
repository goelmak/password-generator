import { RecoilRoot } from "recoil";
import Card from "./components/Card";

const App = () => {
  return (
    <RecoilRoot>
      <div className="flex mt-16 justify-center ">
        <Card />
      </div>
    </RecoilRoot>
  );
};
export default App;
