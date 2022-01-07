import React , {useEffect, useState} from "react"
import axios from "axios"
import './App.css';

function App() {

  const [dataState, setDataState] = useState({loading: true, places: []})
  const fetchData = async () => {
    try{
      const res = await axios.get("/v1/events/")
      const data = res.data.data.slice(0, 200)
      const filteredData = data.filter((item, index)=> data.indexOf(item) === index)
      setDataState({loading: false, places: data})

    }catch(error){
      console.log(error)

    }
  }

  useEffect(()=> {
    fetchData()

    
    


  }, [])
  return (
    <div className="App" style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>

      {/* {dataState && <p>{dataState.data.name}</p>} */}
      <>

      {!dataState.loading ? 


       dataState.places.map((p, index) => (
         <div key={index} style={{width: "500px", padding: "10px", boxShadow: "0 1px 4px rgba(0,0,0,0.16)", margin: "20px"}}>

           <div style={{width: "100%", height: "300px", position: "relative"}}>
             <img src={p.description.images.length && p.description.images[0].url} alt={p.name.fi} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
             {/* <p>{p.description.images[0].url}</p> */}

           </div>

           <p style={{fontWeight: "bold"}}>{p.name.fi}</p>
           {/* <p>{p.description.body}</p> */}
           {/* <p>{p.location.address.street_address}</p> */}
           {/* <p>{p.info_url}</p> */}

         </div>
        
          
        ))
      
    
    : "loading"
    }
</>
    
    
        
       
      

      

      

     
    </div>
  );
}

export default App;
