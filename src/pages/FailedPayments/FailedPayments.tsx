import React, { useState, useMemo } from 'react';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal/Modal';
import { Table, TableHead, TableRow, TableHeader, TableCell, StatusBadge, Button } from '../../components/Common/Common.styles';
import { 
  PageContainer, 
  FiltersBar, 
  FilterGroup, 
  Select, 
  Input, 
  ActionButtons,
  Pagination,
  PaginationInfo,
  PaginationButtons,
  PageButton 
} from './FailedPayments.styles';
import { TableContainer } from '../Overview/Overview.styles';
import { generateMockFailedPayments } from '../../utils/mockData';
import { FailedPayment } from '../../types';

const ITEMS_PER_PAGE = 10;

const FailedPayments: React.FC = () => {
  const allPayments = useMemo(() => generateMockFailedPayments(), []);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; title: string; message: string; type: 'success' | 'error' | 'warning' | 'info' }>({ isOpen: false, title: '', message: '', type: 'info' });
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [reasonFilter, setReasonFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPayments = useMemo(() => {
    return allPayments.filter(payment => {
      const matchesStatus = statusFilter === 'all' || payment.retryStatus === statusFilter;
      const matchesReason = reasonFilter === 'all' || payment.failureReason === reasonFilter;
      const matchesSearch = payment.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesStatus && matchesReason && matchesSearch;
    });
  }, [allPayments, statusFilter, reasonFilter, searchTerm]);

  const totalPages = Math.ceil(filteredPayments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPayments = filteredPayments.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const uniqueReasons = Array.from(new Set(allPayments.map(p => p.failureReason)));

  const handleRetry = (payment: FailedPayment) => {
    setModalConfig({
      isOpen: true,
      title: 'Retry Payment',
      message: `Retrying payment ${payment.transactionId}`,
      type: 'info'
    });
  };

  const handleViewDetails = (payment: FailedPayment) => {
    setModalConfig({
      isOpen: true,
      title: 'Payment Details',
      message: `Viewing details for ${payment.transactionId}`,
      type: 'info'
    });
  };

  return (
    <Layout pageTitle="Failed Payments">
      <PageContainer>
        <FiltersBar>
          <FilterGroup>
            <label>Status</label>
            <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="failed">Failed</option>
              <option value="recovered">Recovered</option>
            </Select>
          </FilterGroup>

          <FilterGroup>
            <label>Failure Reason</label>
            <Select value={reasonFilter} onChange={(e) => setReasonFilter(e.target.value)}>
              <option value="all">All Reasons</option>
              {uniqueReasons.map(reason => (
                <option key={reason} value={reason}>{reason}</option>
              ))}
            </Select>
          </FilterGroup>

          <FilterGroup>
            <label>Search</label>
            <Input 
              type="text" 
              placeholder="Search by email or transaction ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </FilterGroup>
        </FiltersBar>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Transaction ID</TableHeader>
                <TableHeader>Customer Email</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Failure Reason</TableHeader>
                <TableHeader>Retry Status</TableHeader>
                <TableHeader>Date</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {currentPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.transactionId}</TableCell>
                  <TableCell>{payment.customerEmail}</TableCell>
                  <TableCell>${payment.amount.toFixed(2)}</TableCell>
                  <TableCell>{payment.failureReason}</TableCell>
                  <TableCell>
                    <StatusBadge status={payment.retryStatus}>
                      {payment.retryStatus}
                    </StatusBadge>
                  </TableCell>
                  <TableCell>
                    {new Date(payment.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <ActionButtons>
                      <Button 
                        variant="primary" 
                        onClick={() => handleRetry(payment)}
                      >
                        Retry
                      </Button>
                      <Button 
                        variant="secondary" 
                        onClick={() => handleViewDetails(payment)}
                      >
                        Details
                      </Button>
                    </ActionButtons>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>

        <Pagination>
          <PaginationInfo>
            Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredPayments.length)} of {filteredPayments.length} results
          </PaginationInfo>
          <PaginationButtons>
            <PageButton 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </PageButton>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <PageButton
                  key={pageNum}
                  active={currentPage === pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </PageButton>
              );
            })}
            <PageButton 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </PageButton>
          </PaginationButtons>
        </Pagination>
      </PageContainer>
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        message={modalConfig.message}
        type={modalConfig.type}
      />
    </Layout>
  );
};

export default FailedPayments;
