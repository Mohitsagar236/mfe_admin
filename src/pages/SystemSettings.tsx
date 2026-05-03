import { useState } from 'react';
import styles from './AdminPages.module.css';

export default function SystemSettings() {
  const [settings, setSettings] = useState({
    siteName: 'My Application',
    maintenanceMode: false,
    emailNotifications: true,
    twoFactorAuth: true,
    maxLoginAttempts: '5',
    sessionTimeout: '30',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? !settings[name as keyof typeof settings] : value,
    });
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>⚙️ System Settings</h1>
      <p className={styles.pageSubtitle}>Configure system-wide settings and preferences</p>

      <div className={styles.settingsGrid}>
        <div className={styles.settingsCard}>
          <h2>General Settings</h2>
          <div className={styles.settingGroup}>
            <label className={styles.label}>Site Name</label>
            <input
              type="text"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              className={styles.settingInput}
            />
          </div>
          <div className={styles.settingGroup}>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="maintenanceMode"
                checked={settings.maintenanceMode as unknown as boolean}
                onChange={handleChange}
                className={styles.checkbox}
              />
              Enable Maintenance Mode
            </label>
          </div>
        </div>

        <div className={styles.settingsCard}>
          <h2>Security Settings</h2>
          <div className={styles.settingGroup}>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="twoFactorAuth"
                checked={settings.twoFactorAuth as unknown as boolean}
                onChange={handleChange}
                className={styles.checkbox}
              />
              Require Two-Factor Authentication
            </label>
          </div>
          <div className={styles.settingGroup}>
            <label className={styles.label}>Max Login Attempts</label>
            <input
              type="number"
              name="maxLoginAttempts"
              value={settings.maxLoginAttempts}
              onChange={handleChange}
              className={styles.settingInput}
            />
          </div>
        </div>

        <div className={styles.settingsCard}>
          <h2>Notification Settings</h2>
          <div className={styles.settingGroup}>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications as unknown as boolean}
                onChange={handleChange}
                className={styles.checkbox}
              />
              Enable Email Notifications
            </label>
          </div>
          <div className={styles.settingGroup}>
            <label className={styles.label}>Session Timeout (minutes)</label>
            <input
              type="number"
              name="sessionTimeout"
              value={settings.sessionTimeout}
              onChange={handleChange}
              className={styles.settingInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.settingsActions}>
        <button className={styles.cancelButton}>Reset</button>
        <button className={styles.saveButton} onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}
