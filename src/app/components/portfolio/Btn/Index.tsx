"use client";
import "./index.css";
import Document from "../../../../../public/document.png";
import Gear from "../../../../../public/gear.png";
import Star from "../../../../../public/star.png";

import Image from "next/image";

export const Btn: React.FC<{
  btnTxt?: string;
  btnInvert?: boolean;
  icon?: boolean;
  document?: boolean;
  gear?: boolean;
  star?: boolean;
}> = ({
  btnTxt,
  btnInvert = false,
  icon = false,
  gear = false,
  document = false,
  star = false,
}) => {
  return (
    <div className="Btn">
      {!icon ? (
        !btnInvert ? (
          <button className="btn_ragular"> {btnTxt}</button>
        ) : (
          <button className="btn_invert"> {btnTxt}</button>
        )
      ) : star ? (
        <button className="icon_btn">
          <Image
            className="img"
            src={Star}
            width={25}
            height={25}
            alt="star icon"
          />
        </button>
      ) : gear ? (
        gear && (
          <button className="icon_btn">
            <Image
              className="img"
              src={Gear}
              width={25}
              height={25}
              alt="gear icon"
            />
          </button>
        )
      ) : document ? (
        document && (
          <button className="icon_btn">
            <Image
              className="img"
              src={Document}
              width={25}
              height={25}
              alt="document icon"
            />
          </button>
        )
      ) : (
        ""
      )}
    </div>
  );
};
