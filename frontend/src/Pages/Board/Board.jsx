import React, { useState } from "react";

const Board = () => {
  const [currentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const dummyPosts = [
    { _id: 1, number: 1, title: "First Post", createdAt: "2023-11-01T10:00:00", views: 10 },
    { _id: 2, number: 2, title: "Second Post", createdAt: "2023-11-02T11:30:00", views: 20 },
    { _id: 3, number: 3, title: "Third Post", createdAt: "2023-11-03T14:00:00", views: 30 },
    { _id: 4, number: 4, title: "Fourth Post", createdAt: "2023-11-04T16:45:00", views: 40 },
    { _id: 5, number: 5, title: "Fifth Post", createdAt: "2023-11-05T09:15:00", views: 50 },
  ];

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = dummyPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto py-32 md:py-32">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">
        Work Board
      </h1>

      {/* Table Container */}
      <div className="overflow-hidden shadow-lg rounded-xl">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 w-[8%]">
                No.
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 w-auto">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 w-[15%]">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 w-[8%]">
                Views
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {currentPosts.map((post) => (
              <tr
                key={post._id}
                className="hover:bg-gray-50 cursor-pointer transition duration-200"
              >
                <td className="px-6 py-4">{post.number}</td>
                <td className="px-6 py-4">{post.title}</td>
                <td className="px-6 py-4">{new Date(post.createdAt).toLocaleString()}</td>
                <td className="px-6 py-4">{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Board;
