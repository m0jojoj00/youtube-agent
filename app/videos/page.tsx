"use client";

import { useState } from "react";

export default function VideosPage() {
  const [videos, setVideos] = useState<string[]>([]);

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (!files) return;

    const fileNames = Array.from(files).map(
      (file) => file.name
    );

    setVideos((prev) => [...prev, ...fileNames]);
  };

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

      {/* Main */}
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-8 text-black">
          Видео
        </h2>

        <div className="bg-white rounded-2xl p-6 shadow">

          <label className="inline-block bg-black text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-gray-800 mb-6">
            Загрузить видео
            <input
                type="file"
                multiple
                accept="video/*"
                onChange={handleUpload}
                className="hidden"
            />
            </label>

          <h3 className="text-xl font-semibold mb-4 text-black">
            Загруженные видео
          </h3>

          <div className="space-y-3">
            {videos.length === 0 && (
              <p className="text-gray-500">
                Пока нет загруженных видео
              </p>
            )}

            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-xl"
              >
                {video}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}