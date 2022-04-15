import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = 'pk_test_51KnWevExpQ7ulb1gfjIPgl8bMjMRQKwJTprLro1mQPdlya1h5jJOepQ4F6LkU4BzGp6Ret1gsbsU3qAayQiEXIzw00FZ4NBNe0';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	);
}
