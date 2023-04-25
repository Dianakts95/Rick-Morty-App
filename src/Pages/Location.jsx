import React, {useState , useEffect} from "react"; 
import Cards from "../Components/Cards/Cards";
import InputGroup from "../Components/Filters/Category/InputGroup";


const Location = () => {

    const [id, setID] = useState(1);
    const [info, setInfo] = useState([]);
    const [results, setResults] = useState([]);

    const {name, type, dimension} = info;

    const api = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(()=>{
        (async function(){
            let data = await fetch(api).then(res=> res.json());
            setInfo(data);

            let aux = await Promise.all(
                data.residents.map((x)=>{
                    return fetch(x).then((res)=>res.json())
                })
            );
            setResults(aux);
        })();
    },[api])

  return (
    <div className="container">

 

    <div className="row my-2">
        <h1 className="text-center mb-3">
        <span className=" bg-white text-success">  Location</span>:  {" "}
            <span className="text-black bg-white">
            { name === ""? "Unknown": name} </span>
        </h1>
        <h5 className="text-center">
        <span className=" bg-white text-success">   Dimension</span>: {" "}  <span className=" bg-white text-success">  {dimension === ""? "Unknown": dimension}</span>
        </h5>
        <h6 className="text-center">
        <span className=" bg-white text-success"> Type</span>  : {" "}  <span className=" bg-white text-success">  {type === ""? "Unknown": type}</span>
        </h6>
        
    </div>
    <div className="row">

    <div className="col-lg-3 col-12">
        <h4 className="text-center mb-4">  <span className=" bg-white text-success">  Pick Location</span></h4>
        
        <InputGroup setID={setID} name="Location" total={126}/>
        </div>
    <div className="col-lg-8 col-12"> 
    <div className="row">
        <Cards page="/location/" results={results} />
    </div>
    </div>

    </div>

     </div>
  )
}

export default Location;