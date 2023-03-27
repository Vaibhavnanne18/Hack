

import React, { useEffect, useState } from "react";
// import "../css/subscription.css";
import gaurav from "../img/new/salad2.png";
const SubscriptionModel1 = () => {
  return (
     
//        <div class="  text-center max-w-sm rounded  shadow-2xl  ">
//       <div class="package-card trial ">
//         <div class="  relative package-card_image package-card_image--trial max-w-sm ">
//           <img src={gaurav} class=" max-w-sm mb-35-sm relative" alt="trial " />
//         </div>
//         <div class="package-card_level package-card_level--trial ">7 Days</div>
//         <div class="package-card__unit-name text-black font-bold text-2xl mb-5 ">
//           Weekly Subscription
//         </div>
//         <div class="package-card__unit-description p-8">
//           <div class="grid grid-cols-2 gap-x-3 mb-3">
//             <div class="text-left text-sm">
//               <small>Monday</small>{" "}
//             </div>
//             <div class="text-left text-sm">
//               {" "}
//               <small> Magic Salad Bowl </small>
//             </div>
//           </div>
//           <hr class="border-gray-400 mb-3" />
//           <div class="grid grid-cols-2 gap-x-3 mb-3">
//             <div class="text-left text-sm">
//               <small>Tuesday</small>{" "}
//             </div>
//             <div class="text-left text-sm">
//               {" "}
//               <small>Pearl Couscous Upma</small>
//             </div>
//           </div>
//           <hr class="border-gray-400 mb-3" />
//           <div class="grid grid-cols-2 gap-x-3 mb-3">
//             <div class="text-left text-sm">
//               <small>Wednesday</small>{" "}
//             </div>
//             <div class="text-left text-sm">
//               {" "}
//               <small>Brown Bread Sandwich </small>
//             </div>
//           </div>
//           <hr class="border-gray-400 mb-3" />
//           <div class="grid grid-cols-2 gap-x-3 mb-3">
//             <div class="text-left text-sm">
//               <small>Thusday</small>{" "}
//             </div>
//             <div class="text-left text-sm">
//               {" "}
//               <small> Protein Bomb Salad
// </small>
//             </div>
//           </div>
//           <hr class="border-gray-400 mb-3" />
//           <div class="grid grid-cols-2 gap-x-3 mb-3">
//             <div class="text-left text-sm">
//               <small>Friday</small>{" "}
//             </div>
//             <div class="text-left text-sm">
//               {" "}
//               <small>Kidney Beans Salad
// </small>
//             </div>
//           </div>
//           <hr class="border-gray-400 mb-3" />

//           <div class="grid grid-cols-2 gap-x-3 mb-3">
//             <div class="text-left text-sm">
//               <small>Saturday </small>{" "}
//             </div>
//             <div class="text-left text-sm">
//               {" "}
//               <small> Magic Fruit Bowl</small>
//             </div>
//           </div>
//         </div>
//       </div>
//       <p>Monday to Saturday</p>
//       <p class="gst-note text-left mt-0 ml-5 text-xs py-1 px-3">
//         <sup class="gst-star">*</sup>All prices are incl. of 5% GST
//       </p>
//       <div class="package-card_unit-stats grid grid-cols-3  bg-green-500 package-card_unit-stats--monthly clearfix bg-white font-bold rounded-b-lg">
//         <div class="one-third p-5 border-r border-white hover:bg-orange-600">
//           <div class="stat ">Rs</div>
//           <div class="stat-value hover:bg-orange-600">1199</div>
//         </div>
//         <div class="one-third p-5 border-r border-white">
//           <div class="stat ">6</div>
//           <div class="stat-value ">Days</div>
//         </div>
//         <div class="one-third p-5 border-r border-white">
//           <div class="stat ">
//             300 <sup>gm</sup>
//           </div>
//           <div class="stat-value ">QTY</div>
//         </div>
//       </div>
//     </div>



    <div class=" text-center max-w-sm rounded shadow-2xl bg-white ">
      <div class="package-card trial ">
        <div class="  relative package-card_image package-card_image--trial max-w-sm ">
          <img src={gaurav} class=" max-w-sm mb-35-sm relative" alt="trial " />
        </div>
        <div class="package-card_level package-card_level--trial ">30 Days</div>
        <div class="package-card__unit-name text-black font-bold text-2xl mb-5 ">
          Monthly Subscription
        </div>
        <div class="package-card__unit-description p-8">
          <div class="grid grid-cols-2 gap-x-3 mb-3">
            <div class="text-left text-sm">
              <small>Monday</small>{" "}
            </div>
            <div class="text-left text-sm">
              {" "}
              <small> Magic Salad Bowl </small>
            </div>
          </div>
          <hr class="border-gray-400 mb-3" />
          <div class="grid grid-cols-2 gap-x-3 mb-3">
            <div class="text-left text-sm">
              <small>Tuesday</small>{" "}
            </div>
            <div class="text-left text-sm">
              {" "}
              <small>Pearl Couscous Upma</small>
            </div>
          </div>
          <hr class="border-gray-400 mb-3" />
          <div class="grid grid-cols-2 gap-x-3 mb-3">
            <div class="text-left text-sm">
              <small>Wednesday</small>{" "}
            </div>
            <div class="text-left text-sm">
              {" "}
              <small>Brown Bread Sandwich </small>
            </div>
          </div>
          <hr class="border-gray-400 mb-3" />
          <div class="grid grid-cols-2 gap-x-3 mb-3">
            <div class="text-left text-sm">
              <small>Thusday</small>{" "}
            </div>
            <div class="text-left text-sm">
              {" "}
              <small> Protein Bomb Salad
</small>
            </div>
          </div>
          <hr class="border-gray-400 mb-3" />
          <div class="grid grid-cols-2 gap-x-3 mb-3">
            <div class="text-left text-sm">
              <small>Friday</small>{" "}
            </div>
            <div class="text-left text-sm">
              {" "}
              <small>Kidney Beans Salad
</small>
            </div>
          </div>
          <hr class="border-gray-400 mb-3" />

          <div class="grid grid-cols-2 gap-x-3 mb-3">
            <div class="text-left text-sm">
              <small>Saturday </small>{" "}
            </div>
            <div class="text-left text-sm">
              {" "}
              <small> Magic Fruit Bowl</small>
            </div>
          </div>
        </div>
      </div>
      <p>Monday to Saturday</p>

      <a  href="https://pmny.in/dIClhwhCx4ys">
            <button    whileTap={{ scale: 0.75 }}  class="bg-orange-600 hover:bg-green-700 text-white font-bold py-2 px-4 border  rounded">
                Subscribe Now
            </button></a>
      <p class="gst-note text-left mt-0 ml-5 text-xs py-1 px-3">
        <sup class="gst-star">*</sup>All prices are incl. of 5% GST
      </p>
      <div class="package-card_unit-stats grid grid-cols-3  bg-green-500 package-card_unit-stats--monthly clearfix bg-white font-bold rounded-lg">
        <div class="one-third p-5 border-r border-white hover:bg-orange-600 rounded-lg">
          <div class="stat ">Rs</div>
          <div class="stat-value hover:bg-orange-600">4679</div>
        </div>
        <div class="one-third p-5 border-r border-white">
          <div class="stat ">26</div>
          <div class="stat-value ">Days</div>
        </div>
        <div class="one-third p-5 border-r border-white">
          <div class="stat ">
            300 <sup>gm</sup>
          </div>
          <div class="stat-value ">QTY</div>
        </div>
      </div>
    </div>
    
   

    
  );
};
export default SubscriptionModel1;