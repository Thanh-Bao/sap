"use client";
import { useCart } from "@/styles/CartContext";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
export const Detail = () => {
  const { cartItems } = useCart();
  return (
    <div className="max-w-[1150px] mx-auto px-4 relative -z-10 mb-16">
      {cartItems.map((item: any) => (
        <div key={item.product.ID}
        >
          <Breadcrumb
            aria-label="Solid background breadcrumb example"
            className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
          >
            <Breadcrumb.Item href="#" icon={HiHome}>
              <p>Home</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">{item.product.category}</Breadcrumb.Item>
            <Breadcrumb.Item href="#">{item.product.name}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      ))}
    </div>
  );
};