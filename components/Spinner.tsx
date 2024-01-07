import React from "react";
import { ThreeDots } from "react-loader-spinner";
import style from "./Spinner.module.scss";
import "react-toastify/dist/ReactToastify.css";

interface SpinnerProps {
  isLoading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ isLoading }) => {
  return isLoading ? (
    <div className={style.spinnerContainer}>
      <div className={style.spinner}>
        <ThreeDots color="#4F2EE8" height={100} width={100} />
      </div>
    </div>
  ) : null;
};
export default Spinner;
