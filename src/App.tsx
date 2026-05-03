import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AdminOverview from './pages/AdminOverview';
import UserManagement from './pages/UserManagement';
import SystemSettings from './pages/SystemSettings';
import AuditLogs from './pages/AuditLogs';

export default function App() {
  useEffect(() => {
    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log('Theme changed in Admin:', customEvent.detail?.themeName);
    };

    window.addEventListener('theme-changed', handleThemeChange);
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
    };
  }, []);

  return (
    <BrowserRouter basename="/admin">
      <Navigation />
      <Routes>
        <Route path="/" element={<AdminOverview />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/settings" element={<SystemSettings />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
      </Routes>
    </BrowserRouter>
  );
}
