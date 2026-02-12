

import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './app/layout/MainLayout';
import ApprovalsListPage from './app/routes/approvals/index';
import MyRequestsPage from './app/routes/approvals/my-requests';
import HistoryPage from './app/routes/approvals/history';
import ApprovalDetailPage from './app/routes/approvals/[id]';

type AppStage = 'splash' | 'home' | 'workspace';

export default function App() {
  const [stage, setStage] = useState<AppStage>('splash');

  if (stage === 'splash') {
    return <SplashScreen onComplete={() => setStage('home')} />;
  }
  if (stage === 'home') {
    return <HomeScreen onLogin={() => setStage('workspace')} />;
  }
  // workspace
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/approvals" replace />} />
          <Route path="/approvals" element={<ApprovalsListPage />} />
          <Route path="/approvals/my-requests" element={<MyRequestsPage />} />
          <Route path="/approvals/history" element={<HistoryPage />} />
          <Route path="/approvals/:id" element={<ApprovalDetailPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
