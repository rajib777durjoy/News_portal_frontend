import React, { useState, useEffect } from "react";

// Example dummy data (replace with backend API call)
const dummyArticles = [
  {
    id: 1,
    title: "AI Revolution in Tech Industry",
    author: "John Doe",
    pubDate: "2026-02-20",
    source: "Tech News",
    snippet: "AI is transforming the technology landscape rapidly...",
    language: "English",
    country: "US",
    category: "Technology",
    datatype: "News",
  },
  {
    id: 2,
    title: "Startup Ecosystem Growth in 2026",
    author: "Jane Smith",
    pubDate: "2026-02-19",
    source: "Business Daily",
    snippet: "Startups are booming due to AI and funding opportunities...",
    language: "English",
    country: "US",
    category: "Business",
    datatype: "Blog",
  },
];

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({
    author: "",
    language: "",
    country: "",
    category: "",
    datatype: "",
  });

  useEffect(() => {
    // Replace this with actual backend fetch
    // setArticles(dummyArticles);
  }, []);

  // Filter articles based on AND logic
  const filteredArticles = articles.filter((article) => {
    return (
      (!filters.author || article.author === filters.author) &&
      (!filters.language || article.language === filters.language) &&
      (!filters.country || article.country === filters.country) &&
      (!filters.category || article.category === filters.category) &&
      (!filters.datatype || article.datatype === filters.datatype)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-2xl font-bold">AI News Portal</h1>
        <div>
          <button className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-400">
            Refresh
          </button>
        </div>
      </nav>

      {/* Banner */}
      <header className="bg-linear-gradient-to-r from-blue-400 to-indigo-500 text-white p-10 text-center">
        <h2 className="text-3xl font-bold mb-2">
          Stay Ahead with AI-Powered News
        </h2>
        <p className="text-lg">
          Curated articles from multiple sources, filtered to your preference.
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row mt-6 px-4 md:px-10 gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Filters</h3>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Author"
              className="border p-2 rounded"
              value={filters.author}
              onChange={(e) =>
                setFilters({ ...filters, author: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Language"
              className="border p-2 rounded"
              value={filters.language}
              onChange={(e) =>
                setFilters({ ...filters, language: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Country"
              className="border p-2 rounded"
              value={filters.country}
              onChange={(e) =>
                setFilters({ ...filters, country: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Category"
              className="border p-2 rounded"
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Content Type"
              className="border p-2 rounded"
              value={filters.datatype}
              onChange={(e) =>
                setFilters({ ...filters, datatype: e.target.value })
              }
            />
          </div>
        </aside>

        {/* Article Feed */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg mb-2">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-1">
                By {article.author} | {article.pubDate}
              </p>
              <p className="text-sm text-gray-400 mb-2">{article.source}</p>
              <p>{article.snippet}</p>
              <p className="mt-2 text-xs text-gray-400">
                {article.language} | {article.country} | {article.category} |{" "}
                {article.datatype}
              </p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;