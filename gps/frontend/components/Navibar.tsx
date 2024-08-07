"use client";
import { useCart } from "@/styles/CartContext";
import Badge from "@mui/material/Badge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { TbHomeSignal } from "react-icons/tb";
import { Dropdown, Dropdown1 } from ".";
import Menubar from "./Menubar";
import { Searchbar } from "./Searchbar";

export const Navibar = () => {

  const { cartCount } = useCart();
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll2 = () => {
    if (window.scrollY >= 120) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

      
  return (
    
    // đây là phần logo và searchbar
    <header className="w-full bg-white relative">

            <div className="xl:max-w-[1120px] max-[430px]:max-w-[390px] mx-auto flex justify-between items-center py-4">

              <div className="max-[430px]:w-1/3 xl:hidden">
                <Menubar />
              </div>

              <div className="xl:w-1/4 max-[430px]:w-1/3" onClick={() => {router.push("/");}}>
                <Image
                  src="/logo5.png"
                  alt="clothes shop logo"
                  width={300}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="xl:w-[55%] xl:ml-5 max-[430px]:hidden">
                <Searchbar />
                <p className="text-xs text-gray-500 italic pt-1">
                  Để tìm kiếm sản phẩm mời quý khách nhập từ khóa vào ô bên trên sau
                  đó kích vào tìm kiếm để dẫn tới sản phẩm
                </p>
              </div>

              <div className="xl:w-1/6 max-[430px]:w-1/3 flex justify-end">
                <button className="relative" onClick={() => {router.push("/CartPage");}}>
                  <Badge badgeContent={cartCount} color="error" className="xl:mr-4">
                    <BsCart4 className="w-14 h-14 text-orange-500" />
                  </Badge>
                </button>
              </div>
            </div>
              
              <div className={`bg-gray-800 ${isSticky ? "fixed top-0 w-full" : "sticky top-[60px]"}  max-[430px]:hidden`}>
                <div className="max-w-[1250px] mx-auto flex px-16">
                  <div className="min-w-[270px]">
                    <Dropdown />
                  </div>
                  <div className="flex ml-9 w-[1000px] items-center ">
                    <div>
                      <button className="h-10 px-5 bg-orange-400 text-white flex justify-between items-center text-xs" onClick={() => {router.push("/");}}>
                        <span className="px-1">
                          <TbHomeSignal className="w-5 h-5" />
                        </span>
                        TRANG CHỦ
                      </button>
                    </div>
                    <div>
                      <Dropdown1 />
                    </div>
                    <button className="h-10 px-5 bg-gray-800 text-white flex justify-between items-center text-xs hover:bg-orange-400" >
                      <a onClick={(e) => { e.preventDefault(); router.push("/#Camera");}}>CAMERA HÀNH TRÌNH</a>
                    </button>
                    <button className="h-10 px-5 bg-gray-800 text-white flex justify-between items-center text-xs hover:bg-orange-400">
                      
                      <a onClick={(e) => { e.preventDefault(); router.push("/#Moniter");}}>MÀN HÌNH HUD VIETMAP</a>
                    </button>
                    <button className="h-10 px-5 bg-gray-800 text-white flex justify-between items-center text-xs hover:bg-orange-400">
                      
                      <a onClick={(e) => { e.preventDefault(); router.push("/#Moniter");}}>PHIM CÁCH NHIỆT 3M</a>
                    </button>
                  </div>
                </div>
              </div>


    </header>
  );
};
