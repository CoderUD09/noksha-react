import React from "react";
import { useCart } from "react-use-cart";

export function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if (isEmpty) return <h1 className="text-center"> Your cart isEmpty </h1>;

    return (
        <>
            <section className="container">
                <div className="row jistufy-content-center">
                    <div className="col-12">
                        <h5>
                            {" "}
                            Cart ({totalUniqueItems}) total Item :({totalItems})
                        </h5>
                        <table className="table table-light m-0">
                            <tbody>
                                {items.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <img src={item.image_url} style={{ height: "150px" }} />
                                            </td>

                                            <td>{item.subcategory}</td>

                                            <td>{item.current_price} BDT</td>

                                            <td>Quantity({item.quantity})</td>

                                            <td>
                                                <button
                                                    onClick={() =>
                                                        updateItemQuantity(item.id, item.quantity - 1)
                                                    }
                                                    className="btn btn-info ms-4"
                                                >
                                                    {" "}
                                                    -{" "}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        updateItemQuantity(item.id, item.quantity + 1)
                                                    }
                                                    className="btn btn-info ms-2"
                                                >
                                                    {" "}
                                                    +{" "}
                                                </button>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="btn btn-danger ms-2"
                                                >
                                                    {" "}
                                                    RemoveItem{" "}
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}