"use client";

import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { formatPrice } from "@/utils/formatPrice";
import { Order } from "@prisma/client";
import moment from "moment";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import OrderItem from "./OrderItem";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  //   const router = useRouter();
  return (
    <div className="max-w-[1150px] m-auto flex flex-col gap-2">
      <div className="mt-8">
        <Heading title="Order Details" />
      </div>
      <div>Order Id: {order.id}</div>
      <div>
        Total Amount:{" "}
        <span className="font-bold">{formatPrice(order.amount)}</span>
      </div>
      <div className="flex items-center gap-4">
        <div>Payment Status:</div>
        <div className="-mt-3">
          {order.status === "pending" ? (
            <Status
              text="pending"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : (
            <Status
              text="completed"
              icon={MdDone}
              bg="bg-green-200"
              color="text-black-700"
            />
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>Delivery Status:</div>
        <div className="-mt-3">
          {order.deliveryStatus === "pending" ? (
            <Status
              text="pending"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.deliveryStatus === "dispatched" ? (
            <Status
              text="dispatched"
              icon={MdDeliveryDining}
              bg="bg-purple-200"
              color="text-black-700"
            />
          ) : order.deliveryStatus === "delivered" ? (
            <Status
              text="delivered"
              icon={MdDone}
              bg="bg-green-200"
              color="text-black-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>Date: {moment(order.createDate).fromNow()}</div>
      <div>
        <Heading title="Customer details" />
        <div>City: {order.address?.city}</div>
        <div>Address: {order.address?.line1}</div>
      </div>
      <div>
        <h2 className="font-semibold mt-4 mb-2">Product ordered</h2>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
          <div className="col-span-2 justify-self-start">Product</div>
          <div className="justify-self-center">Price</div>
          <div className="justify-self-center">Quantity</div>
          <div className="justify-self-end">Total</div>
        </div>
        {order.products &&
          order.products.map((item) => {
            return <OrderItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default OrderDetails;
