import React from "react";

import { ActivitiesTable } from "./ActivitiesTable";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";

export const Admin: React.FC = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <ActivitiesTable />
    </div>
  );
};
