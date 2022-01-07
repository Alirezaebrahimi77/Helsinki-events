import React , {useEffect, useState} from "react"
import axios from "axios"
import './App.css';
import Event from "./components/Event";
import Layout from "./Layer/Layout";

function App() {

  const [dataState, setDataState] = useState({loading: true, events: []})
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const date = new Date();
  const fetchData = async () => {
    try{
      const res = await axios.get("/v1/events/")
      const data = res.data.data.slice(0, 10)


      const filteredData = data.filter(e => e.name.fi === "Lautapelikerho")


      setDataState({loading: false, events: data})

    }catch(error){
      console.log(error)

    }
  }

  useEffect(()=> {

    fetchData()
  

  }, [])
  return (
    <div className="App">
      <Layout dataState={dataState}>

        <div className="w-full">
          <h3 className="text-left text-xl text-semibold mb-6">{`${month[date.getMonth()]} Events`}</h3>
          <div className="flex justify-start items-center overflow-scroll space-x-3 px-4">

          
            {!dataState.loading ? (
              dataState.events.map(e => (
                <Event key={e.id} event={e}/>

              ))

            ): "loading"}
          </div>

        </div>
      

      </Layout>

    </div>
  );
}

export default App;
