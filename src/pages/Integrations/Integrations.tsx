import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal/Modal';
import { Button } from '../../components/Common/Common.styles';
import {
  IntegrationsGrid,
  IntegrationCard,
  IntegrationHeader,
  IntegrationLogo,
  IntegrationInfo,
  IntegrationName,
  IntegrationType,
  ConnectionStatus,
  ApiKeySection,
  ApiKeyLabel,
  ApiKeyDisplay,
  ApiKeyValue,
  CopyButton,
  ConnectedDate,
  IntegrationActions
} from './Integrations.styles';
import { Integration } from '../../types';

const Integrations: React.FC = () => {
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; title: string; message: string; type: 'success' | 'error' | 'warning' | 'info'; showCancel: boolean; onConfirm: (() => void) | undefined }>({ isOpen: false, title: '', message: '', type: 'info', showCancel: false, onConfirm: undefined });
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: '1',
      name: 'Shopify',
      type: 'ecommerce',
      status: 'connected',
      logo: '🛍️',
      apiKey: 'sk_live_51Hx...9fY2K',
      connectedDate: '2024-11-15'
    },
    {
      id: '2',
      name: 'WooCommerce',
      type: 'ecommerce',
      status: 'disconnected',
      logo: '🛒'
    },
    {
      id: '3',
      name: 'Stripe',
      type: 'payment',
      status: 'connected',
      logo: '💳',
      apiKey: 'pk_live_51Hx...7fY9P',
      connectedDate: '2024-11-10'
    },
    {
      id: '4',
      name: 'PayPal',
      type: 'payment',
      status: 'connected',
      logo: '🅿️',
      apiKey: 'AYSq3RDf...dZyZ',
      connectedDate: '2024-10-28'
    },
    {
      id: '5',
      name: 'Square',
      type: 'payment',
      status: 'disconnected',
      logo: '⬜'
    },
    {
      id: '6',
      name: 'Magento',
      type: 'ecommerce',
      status: 'disconnected',
      logo: '🔶'
    }
  ]);

  const handleConnect = (id: string) => {
    setIntegrations(integrations.map(integration => 
      integration.id === id 
        ? { 
            ...integration, 
            status: 'connected', 
            apiKey: `sk_${Math.random().toString(36).substr(2, 9)}`,
            connectedDate: new Date().toISOString().split('T')[0]
          }
        : integration
    ));
  };

  const handleDisconnect = (id: string) => {
    setModalConfig({
      isOpen: true,
      title: 'Disconnect Integration',
      message: 'Are you sure you want to disconnect this integration?',
      type: 'warning',
      showCancel: true,
      onConfirm: () => {
        setIntegrations(integrations.map(integration => 
          integration.id === id 
            ? { 
                ...integration, 
                status: 'disconnected', 
                apiKey: undefined,
                connectedDate: undefined
              }
            : integration
        ));
      }
    });
  };

  const handleCopyApiKey = (apiKey: string) => {
    navigator.clipboard.writeText(apiKey);
    setModalConfig({
      isOpen: true,
      title: 'Copied',
      message: 'API Key copied to clipboard!',
      type: 'success',
      showCancel: false,
      onConfirm: undefined
    });
  };

  return (
    <Layout pageTitle="Integrations">
      <IntegrationsGrid>
        {integrations.map(integration => (
          <IntegrationCard key={integration.id}>
            <IntegrationHeader>
              <IntegrationLogo>{integration.logo}</IntegrationLogo>
              <IntegrationInfo>
                <IntegrationName>{integration.name}</IntegrationName>
                <IntegrationType>{integration.type}</IntegrationType>
              </IntegrationInfo>
            </IntegrationHeader>

            <ConnectionStatus connected={integration.status === 'connected'}>
              {integration.status === 'connected' ? 'Connected' : 'Not Connected'}
            </ConnectionStatus>

            {integration.status === 'connected' && integration.apiKey && (
              <>
                <ApiKeySection>
                  <ApiKeyLabel>API Key</ApiKeyLabel>
                  <ApiKeyDisplay>
                    <ApiKeyValue>{integration.apiKey}</ApiKeyValue>
                    <CopyButton onClick={() => handleCopyApiKey(integration.apiKey!)}>
                      Copy
                    </CopyButton>
                  </ApiKeyDisplay>
                </ApiKeySection>
                
                {integration.connectedDate && (
                  <ConnectedDate>
                    Connected on {new Date(integration.connectedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </ConnectedDate>
                )}
              </>
            )}

            <IntegrationActions>
              {integration.status === 'connected' ? (
                <>
                  <Button variant="secondary" style={{ flex: 1 }}>
                    Configure
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={() => handleDisconnect(integration.id)}
                    style={{ flex: 1 }}
                  >
                    Disconnect
                  </Button>
                </>
              ) : (
                <Button 
                  variant="primary" 
                  onClick={() => handleConnect(integration.id)}
                  style={{ width: '100%' }}
                >
                  Connect
                </Button>
              )}
            </IntegrationActions>
          </IntegrationCard>
        ))}
      </IntegrationsGrid>
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        message={modalConfig.message}
        type={modalConfig.type}
        showCancel={modalConfig.showCancel}
        onConfirm={modalConfig.onConfirm}
      />
    </Layout>
  );
};

export default Integrations;
