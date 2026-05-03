import styles from './AdminPages.module.css';

export default function AdminOverview() {
  const stats = [
    { label: 'Total Users', value: '2,845', change: '+12%' },
    { label: 'Active Sessions', value: '542', change: '+8%' },
    { label: 'System Health', value: '98.5%', change: '+0.5%' },
  ];

  const recentActivity = [
    { timestamp: '2024-05-03 14:32', action: 'User login', user: 'john@example.com', status: 'success' },
    { timestamp: '2024-05-03 14:25', action: 'System backup', user: 'System', status: 'success' },
    { timestamp: '2024-05-03 14:18', action: 'Permission updated', user: 'admin@example.com', status: 'success' },
    { timestamp: '2024-05-03 14:10', action: 'User created', user: 'jane@example.com', status: 'success' },
  ];

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>📊 Admin Dashboard</h1>
      <p className={styles.pageSubtitle}>System overview and key metrics</p>

      <div className={styles.statsGrid}>
        {stats.map((stat, idx) => (
          <div key={idx} className={styles.statCard}>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statChange}>{stat.change}</div>
          </div>
        ))}
      </div>

      <div className={styles.recentActivitySection}>
        <h2>Recent Activity</h2>
        <table className={styles.activityTable}>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Action</th>
              <th>User</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((activity, idx) => (
              <tr key={idx}>
                <td>{activity.timestamp}</td>
                <td>{activity.action}</td>
                <td>{activity.user}</td>
                <td><span className={`${styles.badge} ${styles[activity.status]}`}>{activity.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
