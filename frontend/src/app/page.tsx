import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 relative overflow-hidden">
      {/* Background sticky notes effect */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-32 h-32 bg-purple-100 rotate-12 transform absolute opacity-50"></div>
        <div className="w-32 h-32 bg-yellow-100 -rotate-6 transform absolute opacity-50 translate-x-20"></div>
        <div className="w-32 h-32 bg-green-100 rotate-3 transform absolute opacity-50 -translate-x-20"></div>
        <div className="w-32 h-32 bg-blue-100 -rotate-12 transform absolute opacity-50 translate-x-40"></div>
      </div>

      {/* Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-purple-600">TODO</span>
          <span className="text-gray-900"> Task Manager</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Organize your day. Focus on what matters.
        </p>
        <div className="space-x-4">
          <Link 
            href="/login"
            className="inline-block px-6 py-2.5 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
