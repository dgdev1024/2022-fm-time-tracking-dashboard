/**
 * @file components/dashboard-page/dashboard-section.jsx
 */

import { useState } from "react";
import DashboardReport from "./dashboard-report";
import Styles from "./dashboard-section.module.css";

export default function DashboardSection({ user }) {
  const [mode, setMode] = useState("Day");

  return (
    <section className={`section ${Styles.dashboardSection}`}>
      <div className={`sectionContainer ${Styles.dashboardSectionContainer}`}>
        <div className={Styles.dashboardCardContainer}>
          <DashboardReport user={user} mode={mode} setMode={setMode} />
        </div>
      </div>
    </section>
  );
}
