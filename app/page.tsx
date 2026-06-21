export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">
          ¡Hola, Vercel!
        </h1>
        <p className="text-xl text-gray-700">
          Esta es mi primera página web desplegada en la nube.
        </p>
        <div className="mt-8">
          <a 
            href="/api/saludo" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Ver mi API
          </a>
        </div>
      </div>
    </main>
  );
}