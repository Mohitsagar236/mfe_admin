import { useLocation, Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: '📊 Dashboard' },
    { path: '/users', label: '👥 Users' },
    { path: '/settings', label: '⚙️ Settings' },
    { path: '/audit-logs', label: '📋 Audit Logs' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Admin Panel</div>
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${
                location.pathname === link.path ? styles.active : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.userAvatar}>👤</div>
      </div>
    </nav>
  );
}
