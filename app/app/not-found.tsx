export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-4xl text-matrix-green font-terminal mb-4">404</h1>
        <p className="text-gray-500 font-terminal">Page not found</p>
        <a href="/" className="text-matrix-lime hover:text-matrix-green transition-colors font-terminal text-sm mt-4 inline-block">
          &gt; Go back home
        </a>
      </div>
    </div>
  );
}
