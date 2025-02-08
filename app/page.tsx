export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Andea Coming Soon
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gray-900 rounded-lg p-6 h-full">
              <div className="h-48 mb-4 overflow-hidden rounded-lg bg-gray-800">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Ethereal Design
              </h3>
              <p className="text-gray-400">
                A mesmerizing blend of modern aesthetics and dark themes.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                  Design
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                  Dark
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gray-900 rounded-lg p-6 h-full">
              <div className="h-48 mb-4 overflow-hidden rounded-lg bg-gray-800">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Noir Elegance
              </h3>
              <p className="text-gray-400">
                Where sophistication meets darkness in perfect harmony.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                  Elegant
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                  Minimal
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gray-900 rounded-lg p-6 h-full">
              <div className="h-48 mb-4 overflow-hidden rounded-lg bg-gray-800">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Shadow Craft
              </h3>
              <p className="text-gray-400">
                Embracing the beauty of darkness and subtle gradients.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                  Modern
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                  Sleek
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
