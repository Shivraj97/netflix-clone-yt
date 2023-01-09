import {
  Subscription,
  onCurrentUserSubscriptionUpdate,
} from '@stripe/firestore-stripe-payments';
import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import payments from '../lib/stripe';
import { User } from 'firebase/auth';

function useStripeSubscription(user: User | null) {
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    if (!user) return;
    onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
      setSubscription(
        snapshot.subscriptions.filter(
          (subscription) =>
            subscription.status === 'active' ||
            subscription.status === 'trialing'
        )[0]
      );
    });
  }, [user]);

  return subscription;
}

export default useStripeSubscription;
