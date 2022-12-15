function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border rounded-xl shadow-md p-8">
        <h3 className="text-3xl sm:text-5xl text-center font-semibold py-3">Form</h3>
        <p className="max-w-sm text-center mb-6">Please enter your name and pick the Sectors you are currently involved in.</p>
        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered w-full" />
      </div>
    </div>
  );
}

export default App;
