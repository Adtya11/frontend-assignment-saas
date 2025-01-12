import { useEffect, useState } from "react";
import "./App.css";
import { DataTable } from "./components/DataTable";
import { Pagination } from "./components/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
        ); // Example API
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setData(await response.json());
      } catch (error) {
        throw error;
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="App">
      <DataTable pageNumber={pageNumber} data={data.slice(pageNumber*5, pageNumber*5 + 5)} />
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
