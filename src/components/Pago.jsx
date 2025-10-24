import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, CardElement } from "@stripe/react-stripe-js"
import { useState } from "react"

const Pago = () => {

    const stripe = useStripe()
    const elements = useElements()
    const [ nombre, setNombre ] = useState('')
    const [ codigoPostal, setCodigoPostal ] = useState('')
    const [ formErrorMessage, setFormErrorMessage ] = useState(null)

    const generateStripeToken = async () => {
        if (!stripe || !elements) {
            console.log("stripe / elements is not set")
            return
        }

        const cardNumberElement = elements.getElement(CardNumberElement)

        const { token, error } = await stripe.createToken(cardNumberElement, {
            name: nombre,
            address_zip: codigoPostal
        })

        if (!token || error) {
            console.log(error || 'Token is not set')
            setFormErrorMessage(error.message ?? 'Algo salió mal')
        }

        return token
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const token = await generateStripeToken()
            // alert(token?.id)
        } catch (error) {
            console.log(`error: ${error}`)
        }
    }

    return (
        <div>
            <div className="relative px-4 max-w-lg mx-auto">
                <div className="bg-white px-8 py-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit } className="space-y-4">
                        <div>
                            <label htmlFor="card-nr" className="block text-sm font-medium mb-1">
                                Número de tarjeta
                            </label>
                            <CardNumberElement id="card-nr" className="text-sm text-gray-700 bg-white border rounded px-3 py-2 border-gray-300" />
                        </div>
                        <div>
                            <label htmlFor="card-exp" className="block text-sm font-medium mb-1">
                                Fecha de expiración
                            </label>
                            <CardExpiryElement id="card-exp" className="text-sm text-gray-700 bg-white border rounded px-3 py-2 border-gray-300" />
                        </div>
                        <div>
                            <label htmlFor="card-cvc" className="block text-sm font-medium mb-1">
                                CVV
                            </label>
                            <CardCvcElement id="card-cvc" className="text-sm text-gray-700 bg-white border rounded px-3 py-2 border-gray-300" />
                        </div>
                        <div>
                            <label htmlFor="customer-name" className="block text-sm font-medium mb-1">
                                Nombre
                            </label>
                            <input placeholder="Tu nombre" value={nombre} onChange={e => setNombre(e.target.value)} id="customer-name" className="text-sm text-gray-700 bg-white border rounded px-3 py-2 border-gray-300 w-full" required />
                        </div>
                        <div>
                            <label htmlFor="postal-code" className="block text-sm font-medium mb-1">
                                Código postal
                            </label>
                            <input placeholder="Tu código postal" value={codigoPostal} onChange={e => setCodigoPostal(e.target.value)} id="postal-code" className="text-sm text-gray-700 bg-white border rounded px-3 py-2 border-gray-300 w-full" required />
                        </div>

                        {formErrorMessage && <label className="my-2 text-xs text-red-500">{formErrorMessage}</label>}
                        <button className="flex items-center justify-center bg-indigo-600 px-3 py-2 text-white rounded cursor-pointer w-full">Guardar método de pago</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Pago