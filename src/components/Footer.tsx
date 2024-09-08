import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border-t border-gray-800 mt-10 footer-center p-10">
      <aside>
        <Link href="/" className="btn btn-ghost text-xl sm:m-0 mr-auto">
          🚀 StartFast
        </Link>
        <p className="font-bold">Ship your app in days, not weeks</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};
export default Footer;
