import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/" className="btn btn-ghost text-xl sm:m-0 mr-auto">
        🚀 StartFast
      </Link>
      <div>
        {/* Regular menu for larger screens */}
        <ul className="menu menu-horizontal text-[17px] sm:flex hidden px-10">
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#demo">Demo</a>
          </li>
        </ul>

        {/* Dropdown for mobile screens */}
        <div className="dropdown sm:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow justify-between"
          >
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#demo">Demo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
