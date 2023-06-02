"use client";
import "./index.css";
export const Btn: React.FC<{ btnTxt: string; btnInvert?: boolean }> = ({
  btnTxt,
  btnInvert = false,
}) => {
  return (
    <div className="Btn">
      {!btnInvert?
       <button className="btn_ragular"> {btnTxt}</button>
      :
      <button className="btn_invert"> {btnTxt}</button>
      }
    </div>
  );
};
