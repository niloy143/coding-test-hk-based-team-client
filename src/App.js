import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1234/sectors`)
      .then(res => res.json())
      .then(data => setSectors(data))
  }, [])

  return (
    <div className="py-5 flex justify-center w-full sm:w-[95vw]">
      <div className="w-full sm:w-auto border rounded-xl shadow-md p-8 mx-3 flex flex-col">
        <h3 className="text-3xl sm:text-5xl text-center font-semibold py-3">Form</h3>
        <p className="max-w-sm mx-auto text-center mb-6">Please enter your name and pick the Sectors you are currently involved in.</p>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Enter your name" name="name" className="input input-bordered w-full" />

          <div className="w-full flex flex-col justify-center gap-2 py-5">
            <Dropdown sector={{ sector: 'Select Sector', subSectors: sectors }} />
          </div>

          <div className="flex items-center gap-2 py-3">
            <input type="checkbox" className="checkbox" />
            <span>Agree to <a href="/" className="text-blue-500">Terms and Conditions</a></span>
          </div>
          <button className="btn">Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
