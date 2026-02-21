import React, { useState, useEffect } from "react";
import AxiosPublic from "../../Hook/AxiosPublic";

const NewsList = () => {
    const axiosPublic = AxiosPublic();

    const [articles, setArticles] = useState([]);
    const [totalArticles, setTotalArticles] = useState(0);
    const [filters, setFilters] = useState({
        author: "",
        language: "",
        country: "",
        category: "",
        search: "",
    });
    const [page, setPage] = useState(1);
    const limit = 6;

  

    useEffect(() => {
        const getNewslist = async () => {
            const res = await axiosPublic.get(`/api/newsList`);
            console.log(res.data.slice(0,10))
            setArticles(res.data);
        }
        getNewslist()

    },[]);

    const totalPages = Math.ceil(totalArticles / limit);

    return (
        <div className="w-full h-screen">
            {/* Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((article) => (
                    <div key={article.article_id} className="border rounded p-4 shadow">
                        {article.image_url && (
                            <img src={article.image_url} alt={article.title} className="w-full h-40 object-cover mb-2" />
                        )}
                        <h3 className="font-bold text-lg">{article.title}</h3>
                        <p className="text-sm text-gray-600">{article.description?.slice(0, 100)}</p>
                        <p className="text-xs mt-1 text-gray-500">
                            {article.language} | {article.country?.join(", ")} | {article.category?.join(", ")}
                        </p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-4">
                <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>Prev</button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                    <button
                        key={num}
                        onClick={() => setPage(num)}
                        className={page === num ? "font-bold underline" : ""}
                    >
                        {num}
                    </button>
                ))}
                <button onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default NewsList;