import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import { RxCross2 } from "react-icons/rx";

function App() {
  const [sectors, setSectors] = useState([]);
  const [saving, setSaving] = useState(false);
  const [involvedInSectors, setInvolvedInSectors] = useState([]);

  const handleSave = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const agreeToTerms = e.target.agreeToTerms.checked;

    console.log({ name, agreeToTerms, involvedInSectors })
  }

  console.log(involvedInSectors)

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
        <form onSubmit={handleSave}>
          <input type="text" placeholder="Enter your name" name="name" className="input input-bordered w-full" required />

          {
            !!involvedInSectors.length && <div className="flex items-center gap-1 mt-5 flex-wrap max-w-md">
              <h4 className="mr-3 text-lg font-semibold">Involved In: </h4>
              {
                involvedInSectors.map((sector, i) => <div className="flex items-center gap-3 py-1 px-3 rounded-full bg-neutral/10" key={i}>{sector} <RxCross2 className="cursor-pointer hover:bg-neutral/20 rounded-full" onClick={() => setInvolvedInSectors([...involvedInSectors].filter(sr => sr !== sector))} /> </div>)
              }
            </div>
          }

          <div className="w-full flex flex-col justify-center gap-2 py-5">
            <Dropdown sector={{ sector: 'Select Sector', subSectors: sectors }} others={{ involvedInSectors, setInvolvedInSectors }} />
          </div>

          <div className="flex items-center gap-2 py-3">
            <input type="checkbox" name="agreeToTerms" className="checkbox" />
            <span>Agree to <a href="/" className="text-blue-500">Terms and Conditions</a></span>
          </div>
          <button className={`btn ${saving && 'loading'}`}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
