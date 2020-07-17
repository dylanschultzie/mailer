import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const Payments = () => {
  return (
    <StripeCheckout
      name="Mailer"
      description="$5 for 5 email credits"
      amount={500}
      token={(token) => console.log(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};
