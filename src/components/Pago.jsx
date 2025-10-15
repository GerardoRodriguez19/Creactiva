import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement } from '@stripe/react-stripe-js'

const stripePromise = loadStripe("pk_test_51SFoQw3GSpfJnRuWkIrrxzXxUOHpNuobzO3lw3g9IPK77JpH9iAD47MfOontLl5Lvh0f6uNTJPVLDuiywHnURhBm00tliuVAnr")

const CheckoutForm = () => {
    return <form>
        <CardElement />
    </form>
}

const Pago = () => {

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}


export default Pago