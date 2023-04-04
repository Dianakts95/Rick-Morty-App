import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({info, pageNumber , setPageNumber}) => {
    
  return (
    <ReactPaginate 
    className="pagination justify-content-center gap-1 my-4"
    forcePage={pageNumber === 1? 0 : pageNumber -1}
    nextLabel="Next"
    previousLabel="Prev"    
    nextClassName="btn btn-info"
    previousClassName="btn btn-info"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    activeClassName="active"
    
    onPageChange={(data)=>{
      setPageNumber(data.selected + 1)
    }}
    pageCount={info?.pages} 
    />
  );
};
// --bs-pagination-color: #0dcaf0;
// --bs-pagination-active-bg: #0dcaf0;
// --bs-pagination-active-border-color: #0d6efd;


export default Pagination