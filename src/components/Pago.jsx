import { useStripe, useElements, CardNumberElement, CardExpiryElement } from "@stripe/react-stripe-js"
import { useState } from "react"

const Pago = () => {

    const stripe = useStripe()
    const elements = useElements()
    const [ nombre, setNombre ] = useState('')
    const [ codigoPostal, setCodigoPostal ] = useState('')

    return (
        <div>
            <div className="relative px-4 max-w-lg mx-auto">
                <div className="bg-white px-8 py-6 rounded-lg shadow-lg">
                    <form className="space-y-4">
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
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Pago