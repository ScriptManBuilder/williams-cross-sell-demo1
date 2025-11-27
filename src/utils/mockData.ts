import { 
  FailedPayment, 
  ChartDataPoint, 
  FailureReasonData, 
  RecoveryRateByPaymentMethod,
  GeographicData,
  Transaction,
  CustomerBehaviorPattern
} from '../types';

export const generateMockFailedPayments = (): FailedPayment[] => {
  const reasons = [
    'Insufficient Funds',
    'Card Declined',
    'Expired Card',
    'Invalid CVV',
    'Network Error',
    'Bank Timeout'
  ];

  const statuses: Array<'pending' | 'in-progress' | 'failed' | 'recovered'> = [
    'pending', 'in-progress', 'failed', 'recovered'
  ];

  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'aol.com'];
  const firstNames = ['james', 'mary', 'robert', 'patricia', 'john', 'jennifer', 'michael', 'linda', 'david', 'barbara'];
  const lastNames = ['smith', 'johnson', 'williams', 'brown', 'jones', 'garcia', 'miller', 'davis', 'rodriguez', 'martinez'];
  
  return Array.from({ length: 50 }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    
    return {
      id: `payment-${i + 1}`,
      transactionId: `WRR${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      customerEmail: `${firstName}.${lastName}${Math.floor(Math.random() * 999)}@${domain}`,
      amount: Math.floor(Math.random() * 500) + 20,
      failureReason: reasons[Math.floor(Math.random() * reasons.length)],
      retryStatus: statuses[Math.floor(Math.random() * statuses.length)],
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      currency: 'USD'
    };
  });
};

export const generateRecoveryChartData = (): ChartDataPoint[] => {
  const days = 30;
  const data: ChartDataPoint[] = [];
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: Math.floor(Math.random() * 5000) + 2000
    });
  }
  
  return data;
};

export const generateFailureReasonsData = (): FailureReasonData[] => {
  return [
    { reason: 'Insufficient Funds', count: 987, percentage: 34.7 },
    { reason: 'Card Declined', count: 724, percentage: 25.4 },
    { reason: 'Expired Card', count: 512, percentage: 18.0 },
    { reason: 'Invalid CVV', count: 369, percentage: 13.0 },
    { reason: 'Network Timeout', count: 255, percentage: 8.9 }
  ];
};

export const generateRecoveryByPaymentMethod = (): RecoveryRateByPaymentMethod[] => {
  return [
    { method: 'Credit Card', recoveryRate: 73.5, totalAttempts: 1847, successful: 1357 },
    { method: 'Debit Card', recoveryRate: 67.2, totalAttempts: 1234, successful: 829 },
    { method: 'PayPal', recoveryRate: 78.9, totalAttempts: 892, successful: 704 },
    { method: 'Apple Pay', recoveryRate: 75.3, totalAttempts: 567, successful: 427 },
    { method: 'Google Pay', recoveryRate: 71.8, totalAttempts: 443, successful: 318 }
  ];
};

export const generateGeographicData = (): GeographicData[] => {
  return [
    { country: 'United States', failedPayments: 1847, recoveredPayments: 1348, recoveryRate: 73.0 },
    { country: 'United Kingdom', failedPayments: 892, recoveredPayments: 633, recoveryRate: 71.0 },
    { country: 'Canada', failedPayments: 567, recoveredPayments: 392, recoveryRate: 69.1 },
    { country: 'Australia', failedPayments: 443, recoveredPayments: 319, recoveryRate: 72.0 },
    { country: 'Germany', failedPayments: 378, recoveredPayments: 265, recoveryRate: 70.1 },
    { country: 'France', failedPayments: 312, recoveredPayments: 215, recoveryRate: 68.9 }
  ];
};

export const generateRecentTransactions = (): Transaction[] => {
  const statuses: Array<'recovered' | 'pending' | 'failed'> = ['recovered', 'pending', 'failed'];
  const methods = ['Credit Card', 'PayPal', 'Debit Card', 'Apple Pay'];
  
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];
  const firstNames = ['james', 'mary', 'robert', 'patricia', 'john', 'jennifer', 'michael', 'linda', 'david', 'barbara'];
  const lastNames = ['smith', 'johnson', 'williams', 'brown', 'jones', 'garcia', 'miller', 'davis'];
  
  return Array.from({ length: 10 }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    
    return {
      id: `WRR-${Date.now().toString().slice(-6)}-${i + 1}`,
      customerEmail: `${firstName}.${lastName}${Math.floor(Math.random() * 99)}@${domain}`,
      amount: Math.floor(Math.random() * 300) + 50,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      paymentMethod: methods[Math.floor(Math.random() * methods.length)]
    };
  });
};

export const generateCustomerBehaviorData = (): CustomerBehaviorPattern[] => {
  return [
    { category: 'Recovered', returning: 65, new: 35 },
    { category: 'Failed', returning: 45, new: 55 }
  ];
};

export const generateHourlyRecoveryData = (): ChartDataPoint[] => {
  const hours = ['12 AM', '3 AM', '6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'];
  return hours.map(hour => ({
    date: hour,
    value: Math.floor(Math.random() * 30) + 40
  }));
};
