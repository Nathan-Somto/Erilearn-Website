import React from "react";
import Link from "next/link";
import { formatLink } from "@/utils";
import { motion } from "framer-motion";
type Props = {
  dropdownContent: string[];
  handleMouseOut?: () => void;
};

const Dropdown = ({ dropdownContent, handleMouseOut }: Props) => {
  const fill = "#F7A6A4";
  const size = 28;
  const renderSvg = (content: string) => {
    switch (content) {
      case "Product Design":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M3.84534 24.0357L11.27 16.611M20.6197 13.3093L18.3972 19.9768C18.3617 20.0837 18.301 20.1804 18.2201 20.2588C18.1393 20.3372 18.0407 20.395 17.9328 20.4272L4.3085 24.4767C4.18576 24.5131 4.05537 24.5152 3.93152 24.4827C3.80767 24.4502 3.69511 24.3843 3.60608 24.2923C3.51706 24.2003 3.45498 24.0856 3.42661 23.9607C3.39824 23.8359 3.40466 23.7056 3.44517 23.5842L7.86917 10.3145C7.90087 10.2192 7.95271 10.1319 8.02115 10.0584C8.08959 9.98493 8.17304 9.92704 8.26583 9.88866L14.5507 7.30099C14.6784 7.24822 14.819 7.23447 14.9546 7.26146C15.0901 7.28845 15.2147 7.35498 15.3125 7.45266L20.4505 12.5918C20.5426 12.6838 20.6073 12.7998 20.6372 12.9265C20.6671 13.0533 20.661 13.1858 20.6197 13.3093Z"
              stroke={fill}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.7573 12.8987L24.0567 9.59816C24.4941 9.16059 24.7398 8.56721 24.7398 7.94849C24.7398 7.32977 24.4941 6.73639 24.0567 6.29882L21.5833 3.82316C21.3667 3.60639 21.1094 3.43443 20.8262 3.31711C20.5431 3.19979 20.2396 3.1394 19.9331 3.1394C19.6266 3.1394 19.3231 3.19979 19.0399 3.31711C18.7568 3.43443 18.4995 3.60639 18.2828 3.82316L14.9835 7.12366M13.7445 14.1353C13.5819 13.9728 13.389 13.844 13.1766 13.7561C12.9643 13.6682 12.7367 13.623 12.5068 13.623C12.277 13.6231 12.0494 13.6684 11.8371 13.7564C11.6248 13.8444 11.4319 13.9734 11.2694 14.1359C11.1069 14.2985 10.9781 14.4914 10.8902 14.7038C10.8023 14.9161 10.757 15.1437 10.7571 15.3736C10.7572 15.6034 10.8025 15.831 10.8905 16.0433C10.9785 16.2556 11.1074 16.4485 11.27 16.611C11.5983 16.9391 12.0435 17.1234 12.5077 17.1233C12.9718 17.1232 13.4169 16.9387 13.7451 16.6104C14.0732 16.2821 14.2575 15.8369 14.2574 15.3727C14.2573 14.9086 14.0728 14.4635 13.7445 14.1353Z"
              stroke={fill}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "Product Management":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
          >
            <g clipPath="url(#clip0_172_1198)">
              <path
                d="M18.375 0.0273438L28 4.83984V15.5723L26.25 14.6973V6.79492L19.25 10.2949V13.8223L17.5 14.6973V10.2949L10.5 6.79492V9.89844L8.75 9.02344V4.83984L18.375 0.0273438ZM18.375 8.77734L20.7949 7.56055L14.4648 3.9375L11.5801 5.38672L18.375 8.77734ZM22.6816 6.63086L25.1699 5.38672L18.375 1.98242L16.3379 3.00781L22.6816 6.63086ZM15.75 15.5723L14 16.4473V16.4336L8.75 19.0586V25.2793L14 22.6406V24.6094L7.875 27.6719L0 23.7207V14.4785L7.875 10.541L15.75 14.4785V15.5723ZM7 25.2793V19.0586L1.75 16.4336V22.6406L7 25.2793ZM7.875 17.541L12.9199 15.0254L7.875 12.4961L2.83008 15.0254L7.875 17.541ZM15.75 17.5273L21.875 14.4648L28 17.5273V24.7324L21.875 27.7949L15.75 24.7324V17.5273ZM21 25.4023V21.2324L17.5 19.4824V23.6523L21 25.4023ZM26.25 23.6523V19.4824L22.75 21.2324V25.4023L26.25 23.6523ZM21.875 19.7148L25.1699 18.0605L21.875 16.4199L18.5801 18.0605L21.875 19.7148Z"
                fill={fill}
              />
            </g>
            <defs>
              <clipPath id="clip0_172_1198">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case "3D":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
          >
            <g clipPath="url(#clip0_172_1194)">
              <path
                d="M7.91 14.644H9.072C10.2025 14.644 10.9183 15.3055 10.927 16.219C10.941 17.1588 10.1797 17.8273 9.0265 17.8273C7.98 17.8203 7.21175 17.2585 7.1575 16.5043H5.25C5.3025 18.1038 6.63425 19.4583 9.01775 19.4583C11.1877 19.4583 13.0165 18.3033 12.9938 16.3118C12.971 14.644 11.6865 13.8968 10.7327 13.8058V13.6973C11.5027 13.5748 12.7015 12.775 12.6718 11.291C12.649 9.70551 11.2718 8.54351 9.079 8.55226C6.7865 8.56101 5.50375 9.83676 5.4495 11.4748H7.37975C7.41825 10.7905 8.05 10.1605 9.01775 10.1605C9.94875 10.1605 10.6417 10.738 10.6417 11.5833C10.6487 12.4215 9.9715 13.0445 9.01775 13.0445H7.91175L7.91 14.644ZM14.2205 8.75176V19.25H18.0512C21.2187 19.25 22.75 17.3128 22.75 13.9738C22.75 10.6593 21.2432 8.75176 18.0512 8.75176H14.2205ZM16.2977 10.444H17.7747C19.7207 10.444 20.6115 11.6445 20.6115 14.014C20.6115 16.3818 19.7277 17.549 17.7747 17.549H16.2977V10.444Z"
                fill={fill}
              />
              <path
                d="M24.5 5.25C24.9641 5.25 25.4092 5.43437 25.7374 5.76256C26.0656 6.09075 26.25 6.53587 26.25 7V21C26.25 21.4641 26.0656 21.9092 25.7374 22.2374C25.4092 22.5656 24.9641 22.75 24.5 22.75H3.5C3.03587 22.75 2.59075 22.5656 2.26256 22.2374C1.93437 21.9092 1.75 21.4641 1.75 21V7C1.75 6.53587 1.93437 6.09075 2.26256 5.76256C2.59075 5.43437 3.03587 5.25 3.5 5.25H24.5ZM3.5 3.5C2.57174 3.5 1.6815 3.86875 1.02513 4.52513C0.368749 5.1815 0 6.07174 0 7L0 21C0 21.9283 0.368749 22.8185 1.02513 23.4749C1.6815 24.1313 2.57174 24.5 3.5 24.5H24.5C25.4283 24.5 26.3185 24.1313 26.9749 23.4749C27.6313 22.8185 28 21.9283 28 21V7C28 6.07174 27.6313 5.1815 26.9749 4.52513C26.3185 3.86875 25.4283 3.5 24.5 3.5H3.5Z"
                fill={fill}
              />
            </g>
            <defs>
              <clipPath id="clip0_172_1194">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            version="1.1"
            id="Capa_1"
            width={size}
            height={size}
            viewBox="0 0 419.931 419.931"
          >
            <g>
              <g>
                <g>
                  <path d="M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624     v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293     V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146     c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066     C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702     c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z      M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702     h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702     c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z" />
                  <path d="M419.875,335.77l-2.615-14.83c-0.353-1.997-2.256-3.331-4.255-2.979l-13.188,2.324c-1.583-3.715-3.605-7.195-6.005-10.38     l8.614-10.268c0.626-0.744,0.931-1.709,0.847-2.68c-0.086-0.971-0.554-1.867-1.3-2.494l-11.534-9.68     c-0.746-0.626-1.713-0.93-2.683-0.845c-0.971,0.085-1.867,0.552-2.493,1.298l-8.606,10.26c-3.533-1.8-7.312-3.188-11.271-4.104     v-13.392c0-2.028-1.645-3.674-3.673-3.674h-15.06c-2.027,0-3.673,1.646-3.673,3.674v13.392     c-3.961,0.915-7.736,2.304-11.271,4.104l-8.608-10.259c-1.304-1.554-3.62-1.756-5.175-0.453l-11.535,9.679     c-0.746,0.627-1.213,1.523-1.299,2.494c-0.084,0.971,0.22,1.937,0.846,2.683l8.615,10.266c-2.396,3.184-4.422,6.666-6.005,10.38     l-13.188-2.325c-1.994-0.351-3.901,0.982-4.255,2.979l-2.614,14.83c-0.169,0.959,0.05,1.945,0.607,2.744     c0.561,0.799,1.41,1.342,2.37,1.511l13.198,2.326c0.215,4.089,0.927,8.045,2.073,11.812l-11.6,6.695     c-0.844,0.485-1.459,1.289-1.712,2.229c-0.252,0.941-0.119,1.943,0.367,2.787l7.529,13.041c0.485,0.844,1.289,1.459,2.229,1.711     c0.313,0.084,0.632,0.125,0.951,0.125c0.639,0,1.272-0.166,1.836-0.492l11.609-6.703c2.73,2.925,5.812,5.517,9.18,7.709     l-4.584,12.593c-0.332,0.916-0.289,1.926,0.123,2.809s1.157,1.566,2.072,1.898l14.148,5.149c0.406,0.148,0.832,0.224,1.257,0.224     c0.53,0,1.063-0.115,1.554-0.345c0.883-0.411,1.564-1.157,1.897-2.073l4.583-12.593c1.965,0.238,3.965,0.361,5.994,0.361     s4.029-0.125,5.994-0.361l4.584,12.593c0.332,0.916,1.016,1.662,1.897,2.073c0.49,0.229,1.021,0.345,1.554,0.345     c0.424,0,0.85-0.074,1.256-0.224l14.15-5.149c0.913-0.332,1.659-1.017,2.07-1.898c0.412-0.883,0.456-1.893,0.123-2.809     l-4.584-12.591c3.365-2.192,6.447-4.786,9.18-7.709l11.609,6.703c0.563,0.324,1.197,0.492,1.836,0.492     c0.318,0,0.64-0.043,0.951-0.125c0.941-0.252,1.743-0.869,2.229-1.711l7.529-13.043c0.486-0.842,0.619-1.846,0.367-2.787     c-0.253-0.938-0.868-1.742-1.712-2.229l-11.598-6.693c1.146-3.768,1.856-7.724,2.071-11.812l13.198-2.327     c0.96-0.169,1.812-0.712,2.37-1.511C419.825,337.715,420.044,336.729,419.875,335.77z M354.184,359.336     c-11.155,0-20.2-9.045-20.2-20.201s9.046-20.2,20.2-20.2c11.156,0,20.201,9.044,20.201,20.2S365.34,359.336,354.184,359.336z" />
                  <g>
                    <path d="M164.695,235.373c0-4.752-2.785-9.117-7.096-11.119l-39.455-18.332l39.456-18.334c4.31-2.004,7.095-6.368,7.095-11.118      v-0.319c0-4.21-2.119-8.075-5.665-10.334c-1.962-1.253-4.247-1.916-6.606-1.916c-1.778,0-3.563,0.391-5.16,1.133l-63.078,29.333      c-4.309,2.004-7.092,6.368-7.092,11.117v0.877c0,4.743,2.782,9.104,7.093,11.118l63.084,29.336      c1.631,0.755,3.368,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924c3.548-2.268,5.666-6.13,5.666-10.335L164.695,235.373      L164.695,235.373z" />
                    <path d="M226.932,134.012c-2.301-3.15-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.425-11.679,8.516L163.478,266.27      c-1.183,3.718-0.517,7.813,1.781,10.962c2.301,3.148,6.002,5.029,9.901,5.029h0.315c5.352,0,10.043-3.426,11.672-8.516      l41.555-128.762C229.896,141.268,229.234,137.167,226.932,134.012z" />
                    <path d="M308.001,194.366l-63.079-29.333c-1.592-0.74-3.374-1.131-5.152-1.131c-2.358,0-4.644,0.661-6.605,1.912      c-3.552,2.263-5.671,6.127-5.671,10.337v0.319c0,4.746,2.783,9.111,7.097,11.123l39.454,18.33l-39.455,18.331      c-4.311,2.002-7.096,6.367-7.096,11.119v0.321c0,4.205,2.119,8.066,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923      c1.792,0,3.527-0.383,5.169-1.141l63.082-29.336c4.307-2.009,7.088-6.371,7.088-11.114v-0.877      C315.094,200.735,312.311,196.371,308.001,194.366z" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        );
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onMouseLeave={handleMouseOut}
      transition={{ duration: 0.55, ease: "easeIn" }}
      className="lg:absolute text-[rgb(55,55,55)] items-center justify-center lg:items-start lg:justify-start lg:w-[520px] mt-8 lg:my-0  lg:shadow-[2px_0_10px_rgba(55,55,55,0.5)] lg:rounded-[8px] lg:flex-row gap-2 lg:flex-wrap lg:gap-4 lg:right-[10%] lg:bottom-[-220px] relative flex flex-col bottom-0 text-center z-[900] bg-white lg:px-6 lg:py-4 "
    >
      {dropdownContent.map((content, index) => (
        <Link
          href={formatLink(content)}
          key={index}
          className=" items-center flex  gap-2"
        >
          <span className=" bg-[#FFF3F3] hidden w-[52px] h-[52px] rounded-[50%]  lg:flex items-center justify-center">
            {renderSvg(content)}
          </span>
          <span>{content}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export default Dropdown;
