import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Pago from '../components/Pago'

const stripe = loadStripe("pk_test_51SFoQw3GSpfJnRuWkIrrxzXxUOHpNuobzO3lw3g9IPK77JpH9iAD47MfOontLl5Lvh0f6uNTJPVLDuiywHnURhBm00tliuVAnr")

const Nosotros = () => {

    return (
        <Elements stripe={stripe}>
            <div className="px-4 max-w-md mx-auto">
                <div className="">
                    <Pago />
                </div>
            </div>
        </Elements>
    )
}

export default Nosotros