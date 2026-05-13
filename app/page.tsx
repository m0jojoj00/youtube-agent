export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-10">
          YouTube Agent
        </h1>

        <nav className="space-y-4">
          <a href="/" className="block hover:text-gray-300">
            Главная
          </a>

          <a href="/videos" className="block hover:text-gray-300">
            Видео
          </a>

          <a href="/accounts" className="block hover:text-gray-300">
            Аккаунты
          </a>

          <a href="/publications" className="block hover:text-gray-300">
            Публикации
          </a>

          <a href="/errors" className="block hover:text-gray-300">
            Ошибки
          </a>
        </nav>
        </div>

      {/* Main content */}
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-8">
          Главная панель
        </h2>

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500">Аккаунты</h3>
            <p className="text-3xl font-bold mt-2">100</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500">Видео</h3>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500">В очереди</h3>
            <p className="text-3xl font-bold mt-2">45</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-gray-500">Ошибки</h3>
            <p className="text-3xl font-bold mt-2">2</p>
          </div>

        </div>
      </div>
    </div>
  );
}