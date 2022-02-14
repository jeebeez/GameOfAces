import cn from "classnames";
import React, { useEffect } from "react";
import { Back } from "assets";
import getImageByKey from "utils/getImageByKey";

export interface cardProps {
  value: string;
  suit: string;
}

export interface cardPropsNumber extends cardProps {
  cardNumber: number;
  contentDeal: boolean;
  setContentDeal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Card = ({
  value,
  suit,
  cardNumber,
  contentDeal,
  setContentDeal,
}: cardPropsNumber) => {
  const delayTime = cardNumber * 100;

  useEffect(() => {
    const timer = setTimeout(() => setContentDeal(false), 2000);
    return () => clearTimeout(timer);
  }, [contentDeal]);

  return (
    <div className="card relative w-20 h-32 md:w-28 md:h-40 lg:w-32 lg:h-48 m-1.5 overflow-hidden rounded-lg">
      <div
        className={cn("content", { contentDeal })}
        style={{ transitionDelay: `${delayTime}ms` }}
      >
        <div className="front  w-full h-full bg-white pl-2 pt-1 md:pl-4  ">
          <div>
            <h1 className="font-courier text-3xl  md:text-5xl lg:text-6xl  ">
              {value}
            </h1>
            <img
              className="h-4 md:h-6 lg:h-8"
              src={getImageByKey(suit)}
              alt={suit}
            />
          </div>

          <img
            className="absolute right-2  md:right-4 bottom-2 md:bottom-3 mt-1 h-8 md:h-10 lg:h-14 "
            src={getImageByKey(suit)}
            alt={suit}
          />
        </div>
        <div className="back  w-full h-full   ">
          <img className="object-cover rounded-lg" src={Back} alt="suit" />
        </div>
      </div>
    </div>
  );
};
