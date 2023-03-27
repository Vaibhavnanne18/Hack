import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import { foodItems } from "../utils/data";
import SubscriptionModel from "./SubscriptionModel";
import SubscriptionModel1 from "./SubscriptionModel1";
import banner from "../img/new/Another Day, Another Salad..png"

const MainContainer = () => {
  const [{ cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  console.log(foodItems)
  useEffect(() => { }, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <HomeContainer />
      <img class="h-90 rounded-lg mb-5" src={banner}></img>
      <section className="w-full my-6">
          <p className="text-2xl   font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our Subscription
          </p>
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex flex-col items-center justify-center">

            <div className="flex flex-row justify-center gap-20 ">
            <div><SubscriptionModel /></div>
            <div> <SubscriptionModel1 /></div>
              
             

            </div>

          </div>
        </div>
         
      </section>

      <MenuContainer />

      {/* <div className="p-5">
      <iframe
       		src="https://www.youtube.com/embed/6ay_JHsKnIw"
            frameborder="0"
            allowfullscreen
            class="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div> */}
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
