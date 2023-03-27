import React from 'react'
import img1 from "../img/new/Screenshot__18_-removebg-preview.png"
// import img2 from "../img/FRU_WAT.jpg"
import img3 from "../img/new/Another Day, Another Salad..png"
import shark from "../img/new/shark.jpg"

function About() {
  return (

    <div id="about" className="container about  ">
      <div className="content-center">
      <div className='flex flex-row-2'>
        
        <div >
          <img src={shark} alt="" />
        </div>
        <iframe className="]"
          src="https://www.youtube.com/embed/6ay_JHsKnIw"
          width="700"
          height="425"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"

        ></iframe>

      </div>
        
      </div>
<div> <div><br /></div></div>
      <div className="grid grid-cols-2">
        <div className="row">
          <div className="col-sm-3">
            <div className="about-heading text-2xl font-semibold pt-10">
              <h2>About Us</h2>
              <br></br>
            </div>
            <div className="pr-20">
              <div className="about-content text-base font-normal pr-10 ">
                <h4 className="">
                  This is an Ahmedabad-based cloud kitchen that makes different types of tasty and creative salads and delivers it to home. Our salad contains protein, vitamins, fiber, low fat, and low carbs. The freshness is maintained and every salad has an Indian touch in taste.
                </h4>
                <br></br>
                <p>
                  We are available by weekly and monthly subscriptions. It can also be ordered through Swiggy and Zomato. The company was started in August 2020 and to date, we have fulfilled 35000 orders. On a daily basis, we deliver 80 to 90 orders. Our vision is to deliver the salad to every home in India.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="row">
          <img src={img1} alt="" />
        </div>

      </div>
      <br></br>

      <div className="grid grid-cols-2">
        <div className="p-10 rounded ">
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14687.970467688672!2d72.532184!3d23.0240433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85aea4a9f7ab%3A0x627f90c1c76654b!2sThe%20Simply%20Salad!5e0!3m2!1sen!2sin!4v1679800279973!5m2!1sen!2sin"
            width="450"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div>

          <div class="my-[20px] lg:py-8 px-4 mx-20 max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-center text-black ">Contact Us</h2>
            {/* <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got an issue? Want to send feedback?</p> */}
            <form action="#" class="space-y-8">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-green-500 ">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-white bordertext-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@gmail.com" required />
              </div>
              <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-green-500  ">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-green-500 ">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
            </form>
          </div>

        </div>
      </div>
    </div>






  )
};

export default About