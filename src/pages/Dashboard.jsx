import { useLocation } from "react-router-dom";
import OwnerDashboard from "../components/OwnerDashboard";

const Dashboard = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const role = queryParams.get("role");
  const mail = queryParams.get("mail");

  if (role === "owner") {
    return <OwnerDashboard mail={mail} />;
  } else if (role === "renter") {
    return <div>Renter Dashboard</div>;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="font-bold text-xl">
        You don&apos;t have access into the Dashboard
      </div>
    </div>
  );
};

export default Dashboard;
