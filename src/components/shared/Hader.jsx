// Header.jsx
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = ({ date }) => {
  return (
    <div className="text-center py-3 space-y-2">
      <Image
        src={logo}
        width={200}
        height={100}
        alt="Logo"
        className="mx-auto"
      />

      <p>Truth in Every Story.</p>
      <p>Independent journalism. Informed perspectives.</p>
      <p>{date}</p>
    </div>
  );
};

export default Header;