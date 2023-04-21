import React, {useState , useEffect} from "react"; 
import Cards from "../Components/Cards/Cards";
import InputGroup from "../Components/Filters/Category/InputGroup";


const Episodes = () => {

    const [id, setID] = useState(1);
    const [info, setInfo] = useState([]);
    const [results, setResults] = useState([]);

    const {air_date, name} = info;

    const api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(()=>{
        (async function(){
            let data = await fetch(api).then(res=> res.json());
            setInfo(data);

            let aux = await Promise.all(
                data.characters.map((x)=>{
                    return fetch(x).then((res)=>res.json())
                })
            );
            setResults(aux);
        })();
    },[api])

  return (
    <div className="container">



    <div className="row my-2">
    
        <h1 className="text-center ">
        <span className=" bg-white">Episode</span>: {" "}
            <span className="text-success bg-white">
            { name === ""? "Unknown": name} </span>
        </h1>
        <h5 className="text-center">
        <span className=" bg-white"> Air Date {air_date === ""? "Unknown": air_date}</span>
        </h5>
        
    </div>
    <div className="row">

    <div className="col-lg-3 col-12">
        <h4 className="text-center mb-4">  <span className=" bg-white"> Pick Episodes </span> </h4>
        <InputGroup setID={setID} name="Episode" total={51}/>
        </div>
    <div className="col-lg-8 col-12"> 
    <div className="row">
        <Cards page="/episodes/" results={results} />
    </div>
    </div>

    </div>

     </div>
  )
}

export default Episodes;