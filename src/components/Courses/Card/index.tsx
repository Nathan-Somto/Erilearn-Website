import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  avatar: string;
  level: string;
  modules: string;
  teacher: string;
  price: string;
};

const Card = (props: Props) => {
  return (
    <div className="h-[480px] bg-white cursor-pointer hover:scale-110 transition-all ease-out duration-300 w-[350px] flex-shrink-0  shadow-[1px_4px_12px_rgb(204,204,204)] rounded-[12px] overflow-hidden">
      <Image
        src={"/" + props.image}
        height={200}
        width={350}
        alt={props.title}
      />
      <div className="flex px-6 mt-6 justify-between items-center ">
        <p className="bg-[#FCDBDA] text-[#342423] font-semibold rounded-[6px] px-5 py-1">
          {props.level}
        </p>
        <p className="flex gap-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M17.5833 2.75H7.08325C5.84061 2.75 4.83325 3.75736 4.83325 5V20C4.83325 21.2426 5.84061 22.25 7.08325 22.25H17.5833C18.8259 22.25 19.8333 21.2426 19.8333 20V5C19.8333 3.75736 18.8259 2.75 17.5833 2.75Z"
                stroke="#C7403C"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8.58325 6.5H16.0833M8.58325 10.25H16.0833M8.58325 14H12.3333"
                stroke="#C7403C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>{" "}
          <span>{props.modules} modules</span>
        </p>
      </div>
      <div className="px-6 ">
        <h3 className="border-b border-gray-500 text-2xl border-solid mt-4 mb-3 pb-2">
          {props.title}
        </h3>
        <div>
          <div className="flex items-center mt-3 gap-4">
            <img
              src={props.avatar}
              className="border-[#FCDBDA] border border-solid rounded-[50%] h-[30px] w-[30px]"
            />
            <h4>{props.teacher}</h4>
          </div>
          <div className="text-gray-800 flex justify-between items-center font-medium mt-3 ">
            <p>
              NGN <span className="font-semibold">{props.price}</span>
            </p>{" "}
            <button className="primary-btn-outline">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
