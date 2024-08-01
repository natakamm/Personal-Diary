import Header from "./Header";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import NewEntryModal from "./NewEntryModal";
import CardDetailsModal from "./CardDetailsModal";

const MainLayout = () => {
  const [entries, setEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //when this state is null it counts as false, cause all values except null, undefined, 0, NaN, "" (empty string), and false are considered truthy
  //if we do !selectedEntry while its null, then its a falsy and the modal will not be
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const storedEntries = localStorage.getItem("notebookNotes");
    const parsedEntries = storedEntries ? JSON.parse(storedEntries) : [];
    setEntries(parsedEntries);
  }, []);

  //For the new Entry FORM
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //For each Entry
  const openEntryModal = (entry) => {
    setSelectedEntry(entry);
  };

  const closeEntryModal = () => {
    setSelectedEntry(null);
  };

  return (
    <div>
      <Header />
      <div>Here go all entries</div>
      <div>
        {entries.length > 0 ? (
          entries.map((entry, index) => (
            <Card entry={entry} key={index} onOpenModal={openEntryModal} />
          ))
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
        {selectedEntry && (
          <CardDetailsModal
            entry={selectedEntry}
            closeModal={closeEntryModal}
          />
        )}
      </div>
    </div>
  );
};

export default MainLayout;
