import { useCart } from "@/styles/CartContext";
import { CartItem } from "@/types";
import { Add, DeleteOutlineOutlined, Remove } from "@mui/icons-material";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  item: CartItem;
}
export const CartItemView = ({ item }: Props) => {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (qty: number) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(item.product.ID, quantity);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(item.product.ID);
  };

  const locale = "vi-VN";
  const options = {
    style: "currency",
    currency: "VND",
  };

  const formattedPrice = new Intl.NumberFormat(locale, options).format(
    item.product.realPrice * item.quantity
  );

  return (
    <div className="flex space-x-4 mb-5">
      {/* Product Image and Title */}
      <div className="flex items-center space-x-4 w-6/12 ">
        <div className="max-w-[150px] max-h-[150px] ">
          <div className="w-full h-full overflow-hidden">
            <Image
              src={item.product.img}
              alt={item.product.name}
              width={150} // Đặt chiều rộng của ảnh
              height={150} // Đặt chiều cao của ảnh
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div>{item.product.name}</div>
        </div>
      </div>

      {/* Prooduct Quantity */}
      <div className="flex justify-between items-center w-2/5">
        <div className="mr-5 text-red-500 font-bold">{formattedPrice}</div>
        <div className="flex justify-between items-center border">
          {/* Icreasing/Deacreasing Product Quantity Button  */}
          <div className="px-2">
            <FaMinus
              class=""
              onClick={() => {
                handleQuantityChange(item.quantity - 1);
              }}
            >
              <Remove fontSize="medium" htmlColor="#000" />
            </FaMinus>
          </div>
          <div className="px-5 text-black text-lg bg-gray-100">
            &nbsp;{item.quantity}&nbsp;
          </div>

          <div className="px-2">
            <FaPlus
              class=""
              onClick={() => {
                handleQuantityChange(item.quantity + 1);
              }}
            >
              <Add fontSize="medium" htmlColor="#000" />
            </FaPlus>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-1/5">
        <RiDeleteBin6Line onClick={handleRemoveClick}>
          <DeleteOutlineOutlined />
        </RiDeleteBin6Line>
      </div>
    </div>
  );
};