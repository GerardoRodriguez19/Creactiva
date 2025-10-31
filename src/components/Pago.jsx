import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, CardElement } from "@stripe/react-stripe-js"
import { useState } from "react"

const Pago = () => {

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        })

        if (!error) {
            console.log(paymentMethod)
        }
    }

    const CardElementOptions = {
        style: {
            base: {
                fontSize: '16px',
                color: '#374151',
                '::placeholder': {
                    color: '#9ca3af',
                }
            },
            invalid: {
                iconColor: '#ef4444',
            },
        },
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col gap-4 p-4 rounded border border-gray-300">
                <p className="text-center text-gray-600">Curso #1</p>
                <img
                    src="img/pedagogia.jpg"
                    alt="Curso 1"
                    className="max-w-full object-cover"
                />
                <div className="relative">
                    <div className="
                        p-3 
                        border border-gray-300 
                        rounded-lg 
                        shadow-sm 
                        focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                        <CardElement options={CardElementOptions}/>
                    </div>
                </div>
                <button className="bg-green-600 rounded p-2 text-white cursor-pointer">COMPRAR</button>
            </div>
            
        </form>
    )
}


export default Pago