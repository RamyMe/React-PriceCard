import React from 'react';
import PriceCard from './PriceCard';
import './PriceCard.css';

const priceCardsData = [
  {
    plan: 'FREE',
    price: '$0/month',
    features: [
      { text: 'Single User', icon: 'check'  },
      { text: '50GB Storage', icon: 'check'   },
      { text: 'Unlimited Public Projects', icon: 'check'   },
      { text: 'Community Access', icon: 'check'   },
      { text: 'Unlimited Private Projects', icon: 'cross' },
      { text: 'Dedicated Phone Support', icon: 'cross' },
      { text: 'Free Subdomain', icon: 'cross' },
      { text: 'Monthly Status Reports', icon: 'cross' },
    ],
    buttonText: 'BUTTON',
  }, 
  
  {
    plan: 'PLUS',
    price: '$9/month',
    features: [
      { text: '5 Users', icon: 'check'   },
      { text: '50GB Storage', icon: 'check'   },
      { text: 'Unlimited Public Projects', icon: 'check'   },
      { text: 'Community Access', icon: 'check'   },
      { text: 'Unlimited Private Projects', icon: 'check'   },
      { text: 'Dedicated Phone Support', icon: 'check'  },
      { text: 'Free Subdomain', icon: 'check'  },
      { text: 'Monthly Status Reports', icon: 'cross' },
    ],
    buttonText: 'BUTTON',
  },
  {
    plan: 'PRO',
    price: '$49/month',
    features: [
      { text: 'Unlimited Users', icon: 'check'   },
      { text: '50GB Storage' , icon: 'check'  },
      { text: 'Unlimited Public Projects', icon: 'check'   },
      { text: 'Community Access' , icon: 'check'  },
      { text: 'Unlimited Private Projects', icon: 'check'  },
      { text: 'Dedicated Phone Support', icon: 'check'  },
      { text: 'Free Subdomain', icon: 'check'  },
      { text: 'Monthly Status Reports', icon: 'check'  },
    ],
    buttonText: 'BUTTON',
  },
  // ... other price cards
];

const App = () => {
  return (
    <div className="price-card-container">
      {priceCardsData.map((cardData, index) => (
        <PriceCard key={index} {...cardData} />
      ))}
    </div>
  );
};

export default App;
