import { Outlet } from 'react-router-dom';
import nuLogo from '../assets/img/national-university-philippines-logo-png_seeklogo-499282.webp';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-white text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex min-h-[40vh] items-center justify-center overflow-hidden border-b-2 border-zinc-200 bg-white lg:min-h-screen lg:border-b-0 lg:border-r-2 lg:border-zinc-200">
          <img
            src={nuLogo}
            alt="National University logo"
            className="h-full w-full object-contain p-8 sm:p-12 lg:p-16"
          />
        </div>

        <main className="flex items-center bg-white px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
