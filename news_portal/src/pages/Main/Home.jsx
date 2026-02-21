import React, { useState, useEffect } from "react";
import AxiosPublic from "../../Hook/AxiosPublic";

const Home = () => {
    const axiosPublic = AxiosPublic();
    const [articles, setArticles] = useState([]);
   const [text,settext]=useState('');
   const [Startdate,setstartdata]=('');
   const [enddate,setenddata]=('');
  

    useEffect(() => {
        axiosPublic
            .get("/api/newsList")
            .then((res) => {
                setArticles(res.data);
            })
            .catch((err) => console.log(err));
    },[]);
    const handleSearch=()=>{
        axiosPublic.patch('/api/newsSearch',{text,Startdate,enddate}).then(res=>{
        res.data;
        setArticles(res?.data)
        })
    }

    // Filter articles based on AND logic
    // const filteredArticles = articles.filter((article) => {
    //     const pubDate = new Date(article.pubDate);

    //     return (
    //         (!filters.author || article.author?.toLowerCase().includes(filters.author.toLowerCase())) &&
    //         (!filters.language || article.language === filters.language) &&
    //         (!filters.country || article.country?.includes(filters.country)) &&
    //         (!filters.category || article.category?.includes(filters.category)) &&
    //         (!filters.datatype || article.datatype === filters.datatype) &&
    //         (!filters.search ||
    //             article.title.toLowerCase().includes(filters.search.toLowerCase()) ||
    //             article.description?.toLowerCase().includes(filters.search.toLowerCase())) &&
    //         (!filters.startDate || pubDate >= new Date(filters.startDate)) &&
    //         (!filters.endDate || pubDate <= new Date(filters.endDate))
    //     );
    // });

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">AI News Portal</h1>
                <div>
                    <button className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-400">
                        Refresh
                    </button>
                </div>
            </nav>

            {/* Banner */}
            <header className="bg-linear-gradient-to-r from-blue-400 to-indigo-500 text-white p-10 text-center">
                <h2 className="text-3xl text-black font-bold my-4">
                    Stay Ahead with AI-Powered News
                </h2>
                <p className="text-lg text-black mb-10">
                    Curated articles from multiple sources, filtered to your preference.
                </p>
            </header>

            {/* Main Content */}
            <div className="w-[90%] mx-auto">
                <div className="w-full bg-white p-6 rounded-lg shadow-md mx-auto mt-6 max-w-6xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Filter News</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search Input */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium text-gray-700">Search</label>
                            <input
                                type="text"
                                placeholder="Search by title or description"
                                className="border text-black border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={text}
                                onChange={(e) =>settext(e.target.value)}
                            />
                        </div>
                        {/* Data Type */}
                        
                        {/* Start Date */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium text-gray-700">Start Date</label>
                            <input
                                type="date"
                                className="border text-black border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={Startdate}
                                onChange={(e) =>setstartdata(e.target.value)}
                            />
                        </div>

                        {/* End Date */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium text-gray-700">End Date</label>
                            <input
                                type="date"
                                className="border text-black border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={enddate}
                                onChange={(e) =>setenddata(e.target.value)}
                            />
                        </div>


                        {/* Apply Button */}
                        <div className="flex items-end md:col-span-3">
                            <button
                                onClick={() => handleSearch()}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 w-full md:w-1/3 mx-auto transition"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Article Feed */}
                <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <div
                            key={article.article_id}
                            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
                        >
                            {article.image_url && (
                                <img
                                    src={article.image_url}
                                    alt={article.title}
                                    className="w-full h-40 object-cover rounded mb-2"
                                />
                            )}
                            <h3 className="font-bold text-lg mb-1">{article.title}</h3>
                            <p className="text-sm text-gray-500 mb-1">
                                By {article.author || "Unknown"} | {new Date(article.pubDate).toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-400 mb-2">{article.source || "Unknown"}</p>
                            <p className="text-gray-700 mb-2">{article.description.slice(0, 100) || article.content}</p>
                            <p className="mt-2 text-xs text-gray-400">
                                {article.language} | {article.country?.join(", ")} | {article.category?.join(", ")} |{" "}
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