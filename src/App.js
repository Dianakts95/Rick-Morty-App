import { useState, useEffect  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import Cards from "./Components/Cards/Cards";
import Filters from "./Components/Filters/Filters";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";

function App() {

  const [pageNumber , setPageNumber] = useState((1));
  const [search , setSearch ] = useState("");
  const [status , setStatus] = useState("");
  const [fetchedData , updateFetchedData] = useState([]);
  const {info , results} = fetchedData;

  const ApiPage=`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`;


  useEffect(() => {
   (async function(){
    let data = await fetch(ApiPage).then((res)=> res.json())
    updateFetchedData(data);
   })();

  }, [ApiPage]);

  return (

    <div className="App"> 
    
    <h1 className="text-center font my-4">
      Rick & Morty <span className="text-success">App</span>
    </h1>

    <Search setPageNumber={setPageNumber} setSearch = {setSearch}/>

    <div className="container">
      <div className="row">
      
      <Filters setStatus={setStatus} setPageNumber={setPageNumber} />
      

      <div className="col-8">
      <div className="row"> 
        <Cards results = {results}/>

      </div>
      </div>
    </div>

    </div>


    <Pagination
    info= {info}
    pageNumber= {pageNumber} 
    setPageNumber = {setPageNumber} 
    />
    </div>
  );
}

export default App;
