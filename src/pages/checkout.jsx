import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const Checkout = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        console.log("Test Stripe Submit");

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };

    return (<>
        <form onSubmit={handleSubmit} >
            <CardElement />
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
        </form>
    </>);
}

export const CheckoutForm = () => {
    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    return (
        <>
            <Elements stripe={stripePromise}>
                <Checkout />
            </Elements>
        </>
    )
}