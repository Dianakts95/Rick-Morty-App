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

    <div className="row mb-4">
        <h1 className="text-center mb-3">
            Location: {" "}
            <span className="text-success">
            { name === ""? "Unknown": name} </span>
        </h1>
        <h5 className="text-center">
            Dimension: {" "} {dimension === ""? "Unknown": dimension}
        </h5>
        <h6 className="text-center">
            Type: {" "} {type === ""? "Unknown": type}
        </h6>
        
    </div>
    <div className="row">

    <div className="col-3">
        <h4 className="text-center mb-4">Pick Location</h4>
        <InputGroup setID={setID} name="Location" total={126}/>
        </div>
    <div className="col-8"> 
    <div className="row">
        <Cards page="/location/" results={results} />
    </div>
    </div>

    </div>

     </div>
  )
}

export default Location;