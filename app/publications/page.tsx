export default function PublicationsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-10">YouTube Agent</h1>

        <nav className="space-y-4">
          <a href="/" className="block hover:text-gray-300">Главная</a>
          <a href="/videos" className="block hover:text-gray-300">Видео</a>
          <a href="/accounts" className="block hover:text-gray-300">Аккаунты</a>
          <a href="/publications" className="block hover:text-gray-300">Публикации</a>
          <a href="/errors" className="block hover:text-gray-300">Ошибки</a>
        </nav>
      </div>

      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-8">Публикации</h2>

        <div className="bg-white rounded-2xl p-6 shadow">
          <p className="text-gray-500">
            Здесь будет очередь публикаций.
          </p>
        </div>
      </div>
    </div>
  );
}