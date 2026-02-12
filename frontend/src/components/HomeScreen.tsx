import './HomeScreen.css';

export default function HomeScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="home-root">
      <div className="home-overlay" />
      <div className="home-content">
        <h1 className="home-title">Eternelles Approvals</h1>
        <p className="home-desc">A modern, elegant approvals platform for your organization.</p>
        <button className="home-login-btn" onClick={onLogin}>Login to Workspace</button>
      </div>
    </div>
  );
}
