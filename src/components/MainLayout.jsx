import Header from "./Header";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import NewEntryModal from "./NewEntryModal";

const MainLayout = () => {
  const [entries, setEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedEntries = localStorage.getItem("storage");
    storedEntries ? JSON.parse(storedEntries) : [];
    setEntries(storedEntries);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Header />
      <div>Here go all entries</div>;
      {/*<div>
       {entries.length > 0 ? (
          entries.map((entry) => <Card entry={entry} key={entry.title} />)
        ) : (
          <div>No entries available.</div>
        )}
      </div>*/}
      <div className="App">
        {/* Button to open the modal */}
        <div className="flex justify-center items-center min-h-screen">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add New Note
          </button>
        </div>
        {/* Conditionally render the modal based on state */}
        {isModalOpen && <NewEntryModal onClose={closeModal} />}
      </div>
    </div>
  );
};

export default MainLayout;
