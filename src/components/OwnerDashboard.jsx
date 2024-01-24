import useProperty from "../hooks/useProperty";
import RentalForm from "./RentalForm";

// eslint-disable-next-line react/prop-types
const OwnerDashboard = ({ mail }) => {
  const { data } = useProperty();

  console.log(data);

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
};

export default OwnerDashboard;
