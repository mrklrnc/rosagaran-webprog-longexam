import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-5xl">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Error
            </p>
            <h1 className="text-6xl font-bold leading-tight text-zinc-900 sm:text-7xl">
              404
            </h1>
            <p className="mt-4 text-lg leading-7 text-zinc-600">
              Page not found. The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-100 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
              >
                Go Back
              </button>
              <Button to="/">Home</Button>
              <Button to="/products">Products</Button>
              <Button to="/signin">Sign In</Button>
            </div>

            <div className="mt-5 rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                You can try
              </p>
              <div className="mt-2 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-50 p-3">
                  <p className="text-sm font-semibold text-zinc-900">Check the link</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-600">
                    A small typo can lead to a missing page.
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-50 p-3">
                  <p className="text-sm font-semibold text-zinc-900">Browse products</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-600">
                    Head to the catalog and explore featured items.
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-50 p-3">
                  <p className="text-sm font-semibold text-zinc-900">Sign in again</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-600">
                    Some pages require an active session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Explore the site</h2>
          
          <div className="mt-6 space-y-3">
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <h3 className="font-semibold text-zinc-900">Home</h3>
              <p className="mt-1 text-sm text-zinc-600">Return to the homepage</p>
              <Button to="/" className="mt-3">Go Home</Button>
            </div>
            
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <h3 className="font-semibold text-zinc-900">Products</h3>
              <p className="mt-1 text-sm text-zinc-600">Browse all featured store items</p>
              <Button to="/products" className="mt-3">View Products</Button>
            </div>

            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <h3 className="font-semibold text-zinc-900">About</h3>
              <p className="mt-1 text-sm text-zinc-600">Learn more about the store</p>
              <Button to="/about" className="mt-3">About Page</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
