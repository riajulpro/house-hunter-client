import { useLocation } from "react-router-dom";
import RentalForm from "../components/RentalForm";

const Dashboard = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const role = queryParams.get("role");
  const mail = queryParams.get("mail");

  if (role === "owner") {
    return (
      <div>
        <div className="md:w-10/12 lg:w-9/12 mx-auto">
          <h1 className="font-bold text-3xl">Owner Dashboard</h1>
          <p className="text-slate-500">{mail}</p>
          <div>
            <RentalForm />
          </div>
        </div>
      </div>
    );
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
