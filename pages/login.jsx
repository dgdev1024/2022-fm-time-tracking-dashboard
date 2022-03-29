/**
 * @file pages/login.jsx
 */

import AuthGuard from "../components/auth-guard";
import LoginSection from "../components/login-page/login-section";

export default function LoginPage() {
  return (
    <AuthGuard requireNoAuth redirect="/dashboard">
      <LoginSection />
    </AuthGuard>
  );
}
