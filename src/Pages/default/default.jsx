import Navbar from "../../Components/Navbar";

const Default = () => {
  return (
    <>
      <div className="bg-green-300">
        <Navbar />
      </div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded p-8">
          <h1 className="text-4xl font-bold mb-6">Hello, Asra Company</h1>
          <p className="text-gray-700 text-lg">
            Check Navbar for your sample project in ☝️
          </p>
        </div>
      </div>
    </>
  );
};

export default Default;
