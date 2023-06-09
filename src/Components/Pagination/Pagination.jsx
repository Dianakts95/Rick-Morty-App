import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import styles from "../Pagination/Pagination.module.scss"

const Pagination = ({info, pageNumber , setPageNumber}) => {

  let [width , setWidth] = useState(window.innerWidth);
  
  let updateDimension = ()=>{
    setWidth(window.innerWidth);
  }

  useEffect(()=> {
    window.addEventListener("resize", updateDimension)
    return ()=>{window.removeEventListener("resize", updateDimension)}
  },[])
    
  return (
    <>
    <style jsx = "true">
      {`
      @media (max-width: 768px){
        .next, .prev {display:none}
      }
      .pagination{
        font-size: 14px;
      }      

      `}
    </style>

    <ReactPaginate 
    
    className="pagination justify-content-center gap-1 my-4"
    forcePage={pageNumber === 1? 0 : pageNumber -1}
    nextLabel="Next"
    previousLabel="Prev"    
    nextClassName={`${styles.btn } btn next ` }
    previousClassName={`${styles.btn } btn prev ` }
    pageClassName= "page-item" 
    pageLinkClassName={`${styles.pagelink } page-link`}
    marginPagesDisplayed={width < 576 ? 1:2 }
    pageRangeDisplayed={width < 576 ? 1:2 }
    ativeclassname ="active "
    
    onPageChange={(data)=>{
      setPageNumber(data.selected + 1)
    }}
    pageCount={info?.pages} 
    />
    </>
  );
};
// --bs-pagination-color: #0dcaf0;
// --bs-pagination-active-bg: #0dcaf0;
// --bs-pagination-active-border-color: #0d6efd;




export default Pagination;