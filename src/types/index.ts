export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
}

export interface FailedPayment {
  id: string;
  transactionId: string;
  customerEmail: string;
  amount: number;
  failureReason: string;
  retryStatus: 'pending' | 'in-progress' | 'failed' | 'recovered';
  date: string;
  currency: string;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface FailureReasonData {
  reason: string;
  count: number;
  percentage: number;
}

export interface RecoveryRateByPaymentMethod {
  method: string;
  recoveryRate: number;
  totalAttempts: number;
  successful: number;
}

export interface GeographicData {
  country: string;
  failedPayments: number;
  recoveredPayments: number;
  recoveryRate: number;
}

export interface RetrySettings {
  maxAttempts: number;
  intervalHours: number[];
  optimalTimeStart: string;
  optimalTimeEnd: string;
  emailNotificationsEnabled: boolean;
  webhookUrl: string;
  webhookEnabled: boolean;
}

export interface Integration {
  id: string;
  name: string;
  type: 'ecommerce' | 'payment' | 'analytics';
  status: 'connected' | 'disconnected';
  logo: string;
  apiKey?: string;
  connectedDate?: string;
}

export interface Transaction {
  id: string;
  customerEmail: string;
  amount: number;
  status: 'recovered' | 'pending' | 'failed';
  date: string;
  paymentMethod: string;
}

export interface CustomerBehaviorPattern {
  category: string;
  returning: number;
  new: number;
}
