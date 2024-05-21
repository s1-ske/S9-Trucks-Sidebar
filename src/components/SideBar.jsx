/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ADMIN_ROUTES } from "../constants/app-constants";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [tab, setTab] = useState(location.pathname);

  useEffect(() => {
    setTab(location.pathname);
  }, [tab]);

  return (
    <div className="w-44 bg-gray-200 p-4 flex flex-col items-center shadow-lg h-screen">
      <span className="text-primary text-2xl font-bold my-5">S9</span>

      {ADMIN_ROUTES.map((e, i) => (
        <SideTab key={i} e={e} tab={tab} setTab={setTab} />
      ))}
    </div>
  );
};

const SideTab = ({ e, tab, setTab }) => {
  const navigate = useNavigate();
  return (
    <>
      {tab == e?.route ? (
        <span className="w-full bg-primary my-4 cursor-pointer rounded-sm text-white flex justify-center p-2">
          {e?.name}
        </span>
      ) : (
        <span
          className="my-4 cursor-pointer"
          onClick={() => {
            navigate(e?.route);
            setTab(e?.route);
          }}
        >
          {e?.name}
        </span>
      )}
    </>
  );
};

export default SideBar;
