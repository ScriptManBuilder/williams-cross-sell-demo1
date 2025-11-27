import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal/Modal';
import { Button } from '../../components/Common/Common.styles';
import { PageHeader, PageSubtitle } from '../Overview/Overview.styles';
import {
  SettingsContainer,
  SettingsSection,
  SectionTitle,
  SectionDescription,
  FormGroup,
  Label,
  HelpText,
  NumberInput,
  TextInput,
  CheckboxContainer,
  Checkbox,
  IntervalsList,
  IntervalTag,
  RemoveButton,
  AddIntervalButton,
  ButtonGroup,
  TimeInputGroup
} from './Settings.styles';

const Settings: React.FC = () => {
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; title: string; message: string; type: 'success' | 'error' | 'warning' | 'info' }>({ isOpen: false, title: '', message: '', type: 'info' });
  const [maxAttempts, setMaxAttempts] = useState(3);
  const [intervals, setIntervals] = useState([24, 48, 72]);
  const [newInterval, setNewInterval] = useState('');
  const [optimalTimeStart, setOptimalTimeStart] = useState('09:00');
  const [optimalTimeEnd, setOptimalTimeEnd] = useState('17:00');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [webhookEnabled, setWebhookEnabled] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');

  const addInterval = () => {
    const value = parseInt(newInterval);
    if (value && !intervals.includes(value)) {
      setIntervals([...intervals, value].sort((a, b) => a - b));
      setNewInterval('');
    }
  };

  const removeInterval = (interval: number) => {
    setIntervals(intervals.filter(i => i !== interval));
  };

  const handleSave = () => {
    const settings = {
      maxAttempts,
      intervals,
      optimalTimeStart,
      optimalTimeEnd,
      emailNotifications,
      webhookEnabled,
      webhookUrl
    };
    console.log('Saving settings:', settings);
    setModalConfig({
      isOpen: true,
      title: 'Success',
      message: 'Settings saved successfully!',
      type: 'success'
    });
  };

  const handleReset = () => {
    setMaxAttempts(3);
    setIntervals([24, 48, 72]);
    setOptimalTimeStart('09:00');
    setOptimalTimeEnd('17:00');
    setEmailNotifications(true);
    setWebhookEnabled(false);
    setWebhookUrl('');
    setModalConfig({
      isOpen: true,
      title: 'Reset Complete',
      message: 'Settings have been reset to defaults',
      type: 'info'
    });
  };

  return (
    <Layout pageTitle="Retry Settings">
      <PageHeader>
        <PageSubtitle>
          Configure your payment retry strategy to maximize recovery rates. Adjust timing, frequency, and notification preferences.
        </PageSubtitle>
      </PageHeader>
      <SettingsContainer>
        <SettingsSection>
          <SectionTitle>Smart Retry Logic</SectionTitle>
          <SectionDescription>
            Configure how the system automatically retries failed payments
          </SectionDescription>

          <FormGroup>
            <Label>Maximum Retry Attempts</Label>
            <NumberInput
              type="number"
              min="1"
              max="5"
              value={maxAttempts}
              onChange={(e) => setMaxAttempts(parseInt(e.target.value))}
            />
            <HelpText>Number of times to retry a failed payment (1-5)</HelpText>
          </FormGroup>

          <FormGroup>
            <Label>Retry Intervals (Hours)</Label>
            <IntervalsList>
              {intervals.map(interval => (
                <IntervalTag key={interval}>
                  {interval}h
                  <RemoveButton onClick={() => removeInterval(interval)}>×</RemoveButton>
                </IntervalTag>
              ))}
            </IntervalsList>
            <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
              <NumberInput
                type="number"
                placeholder="Add interval..."
                value={newInterval}
                onChange={(e) => setNewInterval(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addInterval()}
              />
              <AddIntervalButton onClick={addInterval}>Add Interval</AddIntervalButton>
            </div>
            <HelpText>Time intervals between retry attempts</HelpText>
          </FormGroup>

          <FormGroup>
            <Label>Optimal Retry Time Window</Label>
            <TimeInputGroup>
              <NumberInput
                type="time"
                value={optimalTimeStart}
                onChange={(e) => setOptimalTimeStart(e.target.value)}
              />
              <span style={{ color: '#94a3b8' }}>to</span>
              <NumberInput
                type="time"
                value={optimalTimeEnd}
                onChange={(e) => setOptimalTimeEnd(e.target.value)}
              />
            </TimeInputGroup>
            <HelpText>Best time window for retry attempts (in customer's timezone)</HelpText>
          </FormGroup>
        </SettingsSection>

        <SettingsSection>
          <SectionTitle>Notifications</SectionTitle>
          <SectionDescription>
            Configure how you want to be notified about payment recovery events
          </SectionDescription>

          <FormGroup>
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
              />
              <Label style={{ marginBottom: 0 }}>Enable Email Notifications</Label>
            </CheckboxContainer>
            <HelpText>Receive email updates about recovery attempts and successes</HelpText>
          </FormGroup>
        </SettingsSection>

        <SettingsSection>
          <SectionTitle>Webhook Integration</SectionTitle>
          <SectionDescription>
            Connect your system to receive real-time updates via webhooks
          </SectionDescription>

          <FormGroup>
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                checked={webhookEnabled}
                onChange={(e) => setWebhookEnabled(e.target.checked)}
              />
              <Label style={{ marginBottom: 0 }}>Enable Webhook</Label>
            </CheckboxContainer>
          </FormGroup>

          {webhookEnabled && (
            <FormGroup>
              <Label>Webhook URL</Label>
              <TextInput
                type="url"
                placeholder="https://your-domain.com/webhook"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
              />
              <HelpText>URL to receive POST requests with payment recovery events</HelpText>
            </FormGroup>
          )}
        </SettingsSection>

        <ButtonGroup>
          <Button variant="primary" onClick={handleSave}>
            Save Settings
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset to Defaults
          </Button>
        </ButtonGroup>
      </SettingsContainer>
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

export default Settings;
