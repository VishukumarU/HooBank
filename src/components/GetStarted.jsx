import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div
      className={`h-[140px] w-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer ${styles.flexCenter}`}
    >
      <div
        className={`h-[100%] w-[100%] rounded-full bg-black-gradient ${styles.flexCenter} flex-col`}
      >
        <div className={`flex-row ${styles.flexStart}`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrowUp"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
