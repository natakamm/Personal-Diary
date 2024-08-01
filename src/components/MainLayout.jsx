import Header from "./Header";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import NewEntryModal from "./NewEntryModal";

const MainLayout = () => {
  const [entries, setEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEntryModalOpen, setIsEntryModalOpen] = useState(false);

  useEffect(() => {
    const storedEntries = localStorage.getItem("notebookNotes");
    const parsedEntries = storedEntries ? JSON.parse(storedEntries) : [];
    setEntries(parsedEntries);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openEntryModal = () => setIsEntryModalOpen(true);
  const closeEntryModal = () => setIsEntryModalOpen(false);

  return (
    <div>
      <Header />
      <div>Here go all entries</div>;
      <div>
        {entries.length > 0 ? (
          entries.map((entry, index) => <Card entry={entry} key={index} />)
        ) : (
          <div>No entries available.</div>
        )}
      </div>
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
