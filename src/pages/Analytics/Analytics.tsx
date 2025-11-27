import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Layout from '../../components/Layout/Layout';
import { ChartTitle } from '../Overview/Overview.styles';
import { AnalyticsGrid, FullWidthChart, StatsCard, StatsTitle, StatsList, StatItem, StatLabel, StatValue } from './Analytics.styles';
import { 
  generateRecoveryByPaymentMethod, 
  generateGeographicData, 
  generateCustomerBehaviorData,
  generateHourlyRecoveryData 
} from '../../utils/mockData';

const Analytics: React.FC = () => {
  const paymentMethodData = generateRecoveryByPaymentMethod();
  const geographicData = generateGeographicData();
  const customerBehaviorData = generateCustomerBehaviorData();
  const hourlyRecoveryData = generateHourlyRecoveryData();

  const COLORS = ['#0066cc', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <Layout pageTitle="Recovery Analytics">
      <FullWidthChart>
        <ChartTitle>Recovery Success Rate by Time of Day</ChartTitle>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={hourlyRecoveryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis 
              dataKey="date" 
              stroke="#94a3b8" 
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#94a3b8" 
              style={{ fontSize: '12px' }}
              label={{ value: 'Success Rate (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#ffffff'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#10b981" 
              strokeWidth={3}
              dot={{ fill: '#10b981', r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </FullWidthChart>

      <AnalyticsGrid>
        <FullWidthChart>
          <ChartTitle>Recovery Rate by Payment Method</ChartTitle>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={paymentMethodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="method" 
                stroke="#94a3b8" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#94a3b8" 
                style={{ fontSize: '12px' }}
                label={{ value: 'Recovery Rate (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
              />
              <Legend 
                wrapperStyle={{ color: '#94a3b8' }}
              />
              <Bar 
                dataKey="recoveryRate" 
                fill="#0066cc" 
                radius={[8, 8, 0, 0]}
                name="Recovery Rate (%)"
              />
            </BarChart>
          </ResponsiveContainer>
        </FullWidthChart>

        <FullWidthChart>
          <ChartTitle>Customer Behavior Patterns</ChartTitle>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={customerBehaviorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="category" 
                stroke="#94a3b8" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#94a3b8" 
                style={{ fontSize: '12px' }}
                label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
              />
              <Legend wrapperStyle={{ color: '#94a3b8' }} />
              <Bar dataKey="returning" fill="#10b981" radius={[8, 8, 0, 0]} name="Returning Customers" />
              <Bar dataKey="new" fill="#f59e0b" radius={[8, 8, 0, 0]} name="New Customers" />
            </BarChart>
          </ResponsiveContainer>
        </FullWidthChart>
      </AnalyticsGrid>

      <StatsCard>
        <StatsTitle>Geographic Distribution</StatsTitle>
        <StatsList>
          {geographicData.map((country, index) => (
            <StatItem key={index}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <StatLabel>{country.country}</StatLabel>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  {country.recoveredPayments} recovered / {country.failedPayments} failed
                </span>
              </div>
              <StatValue>{country.recoveryRate}%</StatValue>
            </StatItem>
          ))}
        </StatsList>
      </StatsCard>
    </Layout>
  );
};

export default Analytics;
