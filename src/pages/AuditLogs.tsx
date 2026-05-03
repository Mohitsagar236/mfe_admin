import { useState } from 'react';
import styles from './AdminPages.module.css';

export default function AuditLogs() {
  const [filter, setFilter] = useState('all');

  const logs = [
    { id: 1, timestamp: '2024-05-03 14:32:15', action: 'User Login', user: 'john@example.com', ip: '192.168.1.100', result: 'success' },
    { id: 2, timestamp: '2024-05-03 14:25:42', action: 'Permission Modified', user: 'admin@example.com', ip: '192.168.1.50', result: 'success' },
    { id: 3, timestamp: '2024-05-03 14:18:09', action: 'Failed Login Attempt', user: 'unknown@example.com', ip: '10.0.0.50', result: 'failure' },
    { id: 4, timestamp: '2024-05-03 14:10:33', action: 'System Backup Started', user: 'System', ip: 'internal', result: 'success' },
    { id: 5, timestamp: '2024-05-03 14:05:12', action: 'User Deleted', user: 'admin@example.com', ip: '192.168.1.50', result: 'success' },
    { id: 6, timestamp: '2024-05-03 13:58:47', action: 'Settings Changed', user: 'admin@example.com', ip: '192.168.1.50', result: 'success' },
  ];

  const filteredLogs = logs.filter(log => 
    filter === 'all' || log.result === filter
  );

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>📋 Audit Logs</h1>
      <p className={styles.pageSubtitle}>View system activity and user actions</p>

      <div className={styles.filterBar}>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className={styles.filterSelect}>
          <option value="all">All Events</option>
          <option value="success">Success Only</option>
          <option value="failure">Failures Only</option>
        </select>
        <button className={styles.pageButton}>Export Logs</button>
      </div>

      <div className={styles.usersTable}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Action</th>
              <th>User</th>
              <th>IP Address</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log) => (
              <tr key={log.id}>
                <td>{log.timestamp}</td>
                <td>{log.action}</td>
                <td>{log.user}</td>
                <td><code className={styles.code}>{log.ip}</code></td>
                <td>
                  <span className={`${styles.badge} ${styles[log.result]}`}>
                    {log.result.charAt(0).toUpperCase() + log.result.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button className={styles.pageButton}>← Previous</button>
        <span>Page 1 of 12</span>
        <button className={styles.pageButton}>Next →</button>
      </div>
    </div>
  );
}
