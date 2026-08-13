import { useState } from "react";
import {
  MdOutlineAnalytics,
  MdOutlineDashboard,
  MdOutlinePeopleAlt,
  MdOutlineRestaurantMenu,
  MdOutlineShoppingBag,
} from "react-icons/md";
import "./Banner.css";
import {
  IoSearch,
  IoSettingsOutline,
  IoChevronBack,
  IoChevronForward,
  IoNotificationsOutline,
} from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import cake from "../../assets/cake.png";
import { LuDumbbell, LuSparkles } from "react-icons/lu";
import { FaRegClock, FaStar } from "react-icons/fa";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import oshpaz from "../../assets/oshpaz.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="container">
      <div className="w-full flex gap-[120px]">
        <div className="max-w-[20%] w-full relative">
          <div
            className={`bg-[#FDF9ED] pt-[20px] px-[20px] absolute top-0 left-0 w-full h-full ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h1 className="font-bold text-2xl text-[#935253]">The Gallery</h1>
            <span className="text-[#76605799]">Editorial Dashboard</span>

            <nav className="mt-[40px] mb-[360px]">
              <ul>
                <li className="h-[44px] flex items-center rounded-r-2xl bg-white pl-[15px]">
                  <a className="text-[#935253] flex items-center gap-[5px]" href="/">
                    <MdOutlineDashboard className="text-2xl" />
                    Dashboard
                  </a>
                </li>
                <li className="h-[44px] flex items-center bg-[#FDF9ED] pl-[15px]">
                  <a className="text-[#766057] flex items-center gap-[5px]" href="/">
                    <MdOutlineShoppingBag className="text-2xl" />
                    Orders
                  </a>
                </li>
                <li className="h-[44px] flex items-center bg-[#FDF9ED] pl-[15px]">
                  <a className="text-[#766057] flex items-center gap-[5px]" href="/">
                    <MdOutlineRestaurantMenu className="text-2xl" />
                    Menu
                  </a>
                </li>
                <li className="h-[44px] flex items-center bg-[#FDF9ED] pl-[15px]">
                  <a className="text-[#766057] flex items-center gap-[5px]" href="/">
                    <MdOutlinePeopleAlt className="text-2xl" />
                    Customers
                  </a>
                </li>
                <li className="h-[44px] flex items-center bg-[#FDF9ED] pl-[15px]">
                  <a className="text-[#766057] flex items-center gap-[5px]" href="/">
                    <MdOutlineAnalytics className="text-2xl" />
                    Analytics
                  </a>
                </li>
                <li className="h-[44px] flex items-center bg-[#FDF9ED] pl-[15px]">
                  <a className="text-[#766057] flex items-center gap-[5px]" href="/">
                    <IoSettingsOutline className="text-2xl" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <button className="bg-[#935253] py-[10px] px-[55px] rounded-3xl mb-[15px]">
                <a className="text-white" href="/">
                  New Order
                </a>
              </button>
              <span className="flex items-center gap-[5px] text-[#766057] justify-center">
                <IoMdHelpCircleOutline className="text-2xl" />
                Help Center
              </span>
            </div>
          </div>

          <div
            className={`absolute top-0 left-0 w-[60px] h-full bg-[#FDF9ED] flex flex-col items-center pt-[25px] ${
              isOpen ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <button
              onClick={() => setIsOpen(true)}
              className="w-[35px] h-[35px] rounded-full bg-[#935253] text-white flex items-center justify-center mb-[30px]"
            >
              <IoChevronForward />
            </button>
            <MdOutlineDashboard className="text-2xl text-[#935253] mb-[20px]" />
            <MdOutlineShoppingBag className="text-2xl text-[#766057] mb-[20px]" />
            <MdOutlineRestaurantMenu className="text-2xl text-[#766057] mb-[20px]" />
            <MdOutlinePeopleAlt className="text-2xl text-[#766057] mb-[20px]" />
            <MdOutlineAnalytics className="text-2xl text-[#766057] mb-[20px]" />
            <IoSettingsOutline className="text-2xl text-[#766057]" />
          </div>

          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-[25px] right-[-15px] w-[30px] h-[30px] rounded-full bg-[#935253] text-white flex items-center justify-center"
            >
              <IoChevronBack />
            </button>
          )}
        </div>

        <div className="max-w-[55%] w-full pt-[30px]">
          <div className="w-[384px] h-[52px] bg-[#FDF9ED] flex gap-[15px] items-center rounded-3xl pl-[10px] mb-[15px]">
            <IoSearch className="text-[#76605780] text-xl" />
            <input
              className="text-[#766057] outline-none bg-transparent"
              type="search"
              placeholder="Search desserts..."
            />
          </div>

          <section className="flex mb-[32px]">
            <img className="rounded-l-2xl" src={cake} alt="" />
            <div className="px-[32px] py-[32px] bg-[#FDF9ED] w-[304px] rounded-r-2xl">
              <div className="flex justify-between mb-[10px]">
                <div className="w-[81px] h-[24px] bg-[#FDACAC4D] flex items-center justify-center rounded-xl">
                  Dessert
                </div>
                <span className="flex items-center text-[#935253]">
                  <FaStar />
                  4.9
                </span>
              </div>

              <h1 className="font-extrabold text-3xl text-[#39382A] w-[240px] mb-[10px]">
                Chocolate Lava Cake
              </h1>

              <div className="flex gap-[15px] mb-[80px]">
                <span className="flex items-center gap-[5px] text-[#766057B2]">
                  <FaRegClock />
                  25 min
                </span>
                <span className="flex items-center gap-[5px] text-[#766057B2]">
                  <LuSparkles />
                  Easy
                </span>
                <span className="flex items-center gap-[5px] text-[#766057B2]">
                  <LuDumbbell />
                  Kcal
                </span>
              </div>

              <button className="bg-[#935253] py-[10px] px-[35px] rounded-3xl">
                <a className="text-white" href="/">
                  Add to Order
                </a>
              </button>
            </div>
          </section>

          <div className="flex gap-[16px] mb-[48px]">
            <div className="w-[140px] h-[79px] rounded-[32px] bg-[#F7F4E5] flex items-center justify-center flex-col">
              <span className="text-[#76605799]">Calories</span>
              <strong className="text-[#935253]">450 kcal</strong>
            </div>
            <div className="w-[140px] h-[79px] rounded-[32px] bg-[#CBFECC4D] flex items-center justify-center flex-col">
              <span className="text-[#38643E99]">Sugar</span>
              <strong className="text-[#38643E99]">28g</strong>
            </div>
            <div className="w-[140px] h-[79px] rounded-[32px] bg-[#FADCD2] flex items-center justify-center flex-col">
              <span className="text-[#624D45]">Fat</span>
              <strong className="text-[#624D45]">18g</strong>
            </div>
            <div className="w-[140px] h-[79px] rounded-[32px] bg-[#F2EEDD] flex items-center justify-center flex-col">
              <span className="text-[#76605799]">Carbs</span>
              <strong className="text-[#766057]">52g</strong>
            </div>
          </div>

          <section>
            <div className="flex gap-[185px] mb-[30px]">
              <h1>Menu Selections</h1>
              <nav>
                <ul className="flex gap-[10px]">
                  <li className="h-[24px] bg-[#935253] w-[46px] rounded-2xl flex items-center justify-center">
                    <a className="text-white" href="">All</a>
                  </li>
                  <li className="w-[61px] h-[24px] bg-[#F7F4E5] rounded-2xl flex items-center justify-center">
                    <a href="">Cake</a>
                  </li>
                  <li className="w-[90px] h-[24px] bg-[#F7F4E5] rounded-2xl flex items-center justify-center">
                    <a href="">Ice Cream</a>
                  </li>
                  <li className="w-[68px] h-[24px] bg-[#F7F4E5] rounded-2xl flex items-center justify-center">
                    <a href="">Drinks</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex gap-[60px]">
              <div>
                <img src={img1} alt="" />
                <span className="text-[#76605780]">Cake</span>
                <h3 className="font-bold text-base">Artisan Donut</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#935253]">$4.50</span>
                  <button className="px-[10px] py-[5px] bg-[#F2EEDD] rounded-[50%]">
                    <a className="text-[#935253]" href="/">+</a>
                  </button>
                </div>
              </div>

              <div>
                <img src={img2} alt="" />
                <span className="text-[#76605780]">Cream</span>
                <h3 className="font-bold text-base">Vanilla Bean Dream</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#935253]">$6.25</span>
                  <button className="px-[10px] py-[5px] bg-[#F2EEDD] rounded-[50%]">
                    <a className="text-[#935253]" href="/">+</a>
                  </button>
                </div>
              </div>

              <div>
                <img src={img3} alt="" />
                <span className="text-[#76605780]">Drink</span>
                <h3 className="font-bold text-base">Caramel Macchiato</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#935253]">$5.75</span>
                  <button className="px-[10px] py-[5px] bg-[#F2EEDD] rounded-[50%]">
                    <a className="text-[#935253]" href="/">+</a>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="max-w-[25%] pt-[30px] w-full pr-[30px]">
          <div className='flex gap-[50px] items-center mb-[20px]'>
            <IoNotificationsOutline className="text-xl" />
            <div className='w-[2px] h-[60px] bg-amber-200'></div>
            <div className='flex gap-[15px]'>
              <div>
                <h3 className='font-bold text-sm'>Chef de Cuisine</h3>
                <span className='font-normal w-[102px] text-xs'>ExecutivePastryChef</span>
              </div>
              <img src={oshpaz} alt="" />
            </div>
          </div>
          <div className='flex items-center justify-between mb-[25px]'>
            <h2 className='font-bold text-lg'>Popular Choices</h2>
            <span className='text-[#935253]'>View All</span>
          </div>
          <div className='flex w-[288px] h-[88px] bg-[#FDF9ED] py-[12px] px-[12px] gap-[15px] items-center mb-[20px]'>
          <img src={img4} alt="" />
          <div>
            <h3 className='font-bold text-sm w-[136px]'>Assorted Macarons</h3>
            <span className='text-[#76605799]'>6 pieces selection</span>
          </div>
          <button className="px-[10px] py-[5px] bg-white rounded-[50%]">
                    <a className="text-[#935253]" href="/">+</a>
                  </button>
          </div>
          <div className='flex w-[288px] h-[88px] bg-[#FDF9ED] py-[12px] px-[12px] gap-[15px] items-center'>
          <img src={img5} alt="" />
          <div>
            <h3 className='font-bold text-sm w-[136px]'>Assorted Macarons</h3>
            <span className='text-[#76605799]'>6 pieces selection</span>
          </div>
          <button className="px-[10px] py-[5px] bg-white rounded-[50%]">
                    <a className="text-[#935253]" href="/">+</a>
                  </button>
          </div>
          <div className='w-[288px] h-[368px] bg-[#9352530D] rounded-[32px] py-[24px] px-[24px] mb-[10px]'>
          <h2 className='font-bold text-lg mb-[10px]'>Recommended for you</h2>
          <p className='font-normal text-xs text-[#766057B2] mb-[10px]'>Based on your recent pastry selections</p>
          <div className='w-[240px] h-[244px] rounded-[32px] bg-white py-[16px] px-[16px]'>
          <img className='mb-[10px]' src={img6} alt="" />
          <div className='flex gap-[1px] mb-[10px]'>
            <h3 className='font-bold'>Wild Strawberry Tart</h3> <span className='text-[#935253]'>$8.50</span>
          </div>
          <button className='py-[7px] px-[60px] bg-[#39382A] rounded-[30px]'><a href="" className='text-white'>Quick Add</a></button>
          </div>
          </div>
          <div className='w-[288px] h-[2px] bg-[#ECE9D4] mb-[10px]'></div>
          <div className='flex gap-[135px] mb-[7px]'>
            <h3>Current Order</h3> <div className='w-[55px] h-[20px] bg-[#F7F4E5] text-[#766057] rounded-[16px]'>2 items</div>
            </div>
            <div className='flex gap-[160px] mb-[7px]'>
              <span className='text-[#766057CC]'>Lava Cake</span> <span>$12.00</span>
            </div>
            <div className='flex gap-[200px]  mb-[7px]'>
              <span className='text-[#766057CC]'>Latte</span> <span>$5.75</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;