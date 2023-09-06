import { useEffect, useState } from "react";
import orderService from "../services/order-service";

const useOrder = (uid) => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        orderService.get(uid)
            .then((res) => {
                setIsLoading(false);

                console.log(res);
            })
            .catch((err) => {
                console.log("err", err)
            })
    }, []);

    return { orders, error, isLoading };
}

export default useOrder;