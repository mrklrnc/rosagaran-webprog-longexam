import { NavLink } from 'react-router-dom';

const footerLinkClass =
  'text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-300 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900';

const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 text-zinc-50 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-bold">BulldogEx Shop</p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Campus essentials with a clean, simple browsing experience.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Explore
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <NavLink to="/" end className={footerLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={footerLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={footerLinkClass}>
                Products
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Account
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <NavLink to="/auth/signin" className={footerLinkClass}>
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth/signup" className={footerLinkClass}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-zinc-50/10 pt-6">
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
