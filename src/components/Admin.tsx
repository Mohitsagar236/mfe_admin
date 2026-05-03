import styles from './Admin.module.css';

export function Admin() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>⚙️ Admin Panel MFE</h1>
        <p className={styles.description}>
          This is the Admin microfrontend. It automatically uses the host theme and layout.
        </p>
        
        <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <label className={styles.label}>Users Management</label>
            <button className={styles.button}>View Users</button>
          </div>
          <div className={styles.controlGroup}>
            <label className={styles.label}>System Settings</label>
            <button className={styles.button}>Configure</button>
          </div>
          <div className={styles.controlGroup}>
            <label className={styles.label}>Reports</label>
            <button className={styles.button}>Generate</button>
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.infoText}>
            ✅ Admin panel respects host theme colors
          </p>
          <p className={styles.infoText}>
            ✅ Responsive to layout changes
          </p>
          <p className={styles.infoText}>
            ✅ Integrated with theme system
          </p>
        </div>
      </div>
    </div>
  );
}
