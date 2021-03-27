import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function Example() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=100")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="App">
      {data.slice(offset, offset + PER_PAGE).map((post, i) => (
        <h1>{post.name}</h1>
      ))}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        activeClassName={"page-item active"}
        activeLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        disabledClassName={"page-item disabled"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
      />
    </div>
  );
}

export default Example;
