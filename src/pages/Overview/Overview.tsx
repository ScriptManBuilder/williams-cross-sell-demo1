import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Layout from '../../components/Layout/Layout';
import { MetricCardContainer, MetricHeader, MetricTitle, MetricIcon, MetricValue, MetricChange, Table, TableHead, TableRow, TableHeader, TableCell, StatusBadge } from '../../components/Common/Common.styles';
import { PageHeader, PageSubtitle, DashboardGrid, ChartsGrid, ChartContainer, ChartTitle, TableContainer } from './Overview.styles';
import { 
  generateRecoveryChartData, 
  generateFailureReasonsData, 
  generateRecentTransactions 
} from '../../utils/mockData';

const Overview: React.FC = () => {
  const recoveryData = generateRecoveryChartData();
  const failureReasonsData = generateFailureReasonsData();
  const recentTransactions = generateRecentTransactions();

  const metrics = [
    {
      title: 'Total Failed Payments',
      value: '2,847',
      change: 8.3,
      changeType: 'decrease' as const,
      icon: '❌'
    },
    {
      title: 'Recovered Revenue',
      value: '$127,438',
      change: 22.4,
      changeType: 'increase' as const,
      icon: '💰'
    },
    {
      title: 'Recovery Rate',
      value: '71.2%',
      change: 4.7,
      changeType: 'increase' as const,
      icon: '📈'
    },
    {
      title: 'Active Recovery Campaigns',
      value: '542',
      change: 12.1,
      changeType: 'increase' as const,
      icon: '⚡'
    }
  ];

  return (
    <Layout pageTitle="Overview Dashboard">
      <PageHeader>
        <PageSubtitle>
          Monitor your payment recovery performance and track key metrics in real-time. 
          Last updated: {new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
        </PageSubtitle>
      </PageHeader>
      <DashboardGrid>
        {metrics.map((metric, index) => (
          <MetricCardContainer key={index}>
            <MetricHeader>
              <MetricTitle>{metric.title}</MetricTitle>
              <MetricIcon>{metric.icon}</MetricIcon>
            </MetricHeader>
            <MetricValue>{metric.value}</MetricValue>
            <MetricChange type={metric.changeType}>
              {metric.change}% from last month
            </MetricChange>
          </MetricCardContainer>
        ))}
      </DashboardGrid>

      <ChartsGrid>
        <ChartContainer>
          <ChartTitle>Recovery Trend (Last 30 Days)</ChartTitle>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={recoveryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="date" 
                stroke="#94a3b8" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#94a3b8" 
                style={{ fontSize: '12px' }}
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
                stroke="#0066cc" 
                strokeWidth={2}
                dot={{ fill: '#0066cc', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer>
          <ChartTitle>Top Failure Reasons</ChartTitle>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={failureReasonsData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                type="number" 
                stroke="#94a3b8" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                type="category" 
                dataKey="reason" 
                stroke="#94a3b8" 
                style={{ fontSize: '11px' }}
                width={120}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
              />
              <Bar 
                dataKey="count" 
                fill="#ef4444" 
                radius={[0, 8, 8, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </ChartsGrid>

      <TableContainer>
        <ChartTitle>Recent Transactions</ChartTitle>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Transaction ID</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Payment Method</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Date</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {recentTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.customerEmail}</TableCell>
                <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>{transaction.paymentMethod}</TableCell>
                <TableCell>
                  <StatusBadge status={transaction.status}>
                    {transaction.status}
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  {new Date(transaction.date).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Overview;
