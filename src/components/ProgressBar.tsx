import { useSetRecoilState } from "recoil";
import { propertiesState } from "../store/atom";
import { useState } from "react";

const ProgressBar = () => {
  const setProperties = useSetRecoilState(propertiesState);
  const [progress, setProgress] = useState(0);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const progressBarWidth = rect.width;
    const newProgress = (offsetX / progressBarWidth) * 100;
    setProgress(newProgress);
    const length = Math.ceil(newProgress / 5);
    setProperties((properties) => ({
      checkedProperties: [...properties.checkedProperties],
      length: length,
    }));
  };
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex justify-between">
        <div className="text-white font-bold text-xl">Character Length</div>
        <div className="text-white text-xl text-center">
          {Math.ceil(progress / 5)}
        </div>
      </div>
      <div
        className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
        onClick={handleProgressBarClick}
      >
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
