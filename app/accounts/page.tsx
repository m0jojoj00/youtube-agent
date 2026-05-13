export default function AccountsPage() {
  const accounts = [
    {
      name: "YouTube Channel 1",
      platform: "YouTube",
      status: "Подключён",
    },
    {
      name: "TikTok Account 1",
      platform: "TikTok",
      status: "Подключён",
    },
    {
      name: "YouTube Channel 2",
      platform: "YouTube",
      status: "Ошибка токена",
    },
  ];

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
        <h2 className="text-3xl font-bold mb-8 text-black">Аккаунты</h2>

        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="mb-6">
            <button className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800">
                Добавить аккаунты
            </button>
            </div>

          <h3 className="text-xl font-semibold mb-4 text-black">
            Список аккаунтов
          </h3>

          <div className="space-y-3">
            {accounts.map((account, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-xl"
              >
                <div>
                  <p className="font-semibold text-black">{account.name}</p>
                  <p className="text-gray-500">{account.platform}</p>
                </div>

                <span className="text-sm bg-white px-3 py-1 rounded-lg text-black">
                  {account.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}