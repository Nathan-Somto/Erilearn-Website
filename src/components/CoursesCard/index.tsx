import React from "react";
import Image from "next/image";
import { handleEnrollClick } from "@/utils";
import Link from "next/link";
type Props = {
  image: string;
  title: string;
  avatar: string;
  level: string;
  modules: string;
  instructor: string;
  workedAt: string;
  job: string;
};

const CoursesCard = (props: Props) => {
  return (
    <Link href={`/courses/${props.level.replace('Level','').trim()}`}  className="h-[565px] block bg-white cursor-pointer hover:scale-110 transition-all ease-out duration-300 w-[80%] sm:w-[380px]  flex-shrink-0  shadow-[1px_4px_12px_rgb(204,204,204)] rounded-[12px] overflow-hidden">
      <Image
        src={"/" + props.image}
        height={178}
        width={380}
        alt={props.title}
      />
      <div className="flex px-6 mt-4 justify-between items-center ">
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
        <h3 className="border-b border-gray-500 text-[#373737] text-2xl font-semibold font-poppins border-solid my-5 pb-3">
          {props.title}
        </h3>
        <div className="h-[85px] text-[#373737]">
          <div className="flex  mt-6 items-center mb-2 gap-4 font-poppins">
            <img
              src={props.avatar}
              className="border-[#FCDBDA] border-2 border-solid object-cover rounded-[50%] h-[52px] w-[52px]"
            />
            <h4 className="font-medium text-[1.1rem]">{props.instructor}</h4>
          </div>
          <p>
            {" "}
            <span>{props.job}</span> at{" "}
            <span className="underline text-primary">{props.workedAt}</span>
          </p>
        </div>
        <div className="text-gray-800 flex  items-center font-medium mt-4 ">
          <button
            className="primary-btn-outline w-full"
            onClick={(e)=>{
              e.preventDefault()
              handleEnrollClick()
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CoursesCard;
