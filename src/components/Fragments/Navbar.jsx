import { NavLink } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";
import { Link } from "react-router-dom";
import { ExitToApp } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";

const Navbar = () => {
  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balance",
    },
    {
      id: "goals",
      link: "/goals",
      icon: <Icon.Goals />,
      label: "Goals",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "bill",
      link: "/bill",
      icon: <Icon.Bill />,
      label: "Bill",
    },
    {
      id: "expenses",
      link: "/expenses",
      icon: <Icon.Expenses />,
      label: "Expenses",
    },
  ];

  return (
    <div className="bg-defaultBlack text-white">
      <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-10">
            <Logo variant="text-white text-2xl" />
          </div>
          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.link}
              className={({ isActive }) =>
                isActive
                  ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md"
                  : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
              }
            >
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </NavLink>
          ))}
        </div>
        <div className="sticky bottom-12">
          <Link to="/login">
            <div className="flex bg-special-bg3 px-4 py-3 rounded-md duration-100 bg-gray-600 hover:bg-red-500">
              <div className="mx-auto text-white sm:mx-0">
                <ExitToApp />
              </div>
              <div className="ms-3 hidden text-white sm:block">Logout</div>
            </div>
          </Link>
          <div className="border-b my-10 border-b-special-bg"></div>
          <div className="flex justify-between">
            <div className="mx-auto text-white sm:mx-0">
              <img className="w-10" src="images/profile.png" />
            </div>
            <div className="hidden text-white sm:block">
              Admin
              <br />
              <b>View Profile</b>
            </div>
            <div className="hidden text-white sm:block">
              <MoreVert />{" "}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
