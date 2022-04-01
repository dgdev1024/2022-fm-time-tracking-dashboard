/**
 * @file pages/dashboard.jsx
 */

import { getSession } from "next-auth/react";
import AuthGuard from "../components/auth-guard";
import DashboardSection from "../components/dashboard-page/dashboard-section";

export default function DashboardPage({ user }) {
  return (
    <AuthGuard requireAuth redirect="/login">
      <DashboardSection user={user} />
    </AuthGuard>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      user: session.user,
    },
  };
}
