import Header from "./Header";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import NewEntryModal from "./NewEntryModal";
import CardDetailsModal from "./CardDetailsModal";
import { CutiveMono } from "./FontFamily";

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
  }, [entries]);

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
    <div style={CutiveMono}>
      <Header />
      <div className="mx-20">
        <div>
          <h2 className="text-3xl">My Entries</h2>
        </div>
        <div className="flex flex-wrap gap-8 my-8">
          {entries.length > 0 ? (
            entries.map((entry, index) => (
              <Card entry={entry} key={index} onOpenModal={openEntryModal} />
            ))
          ) : (
            <div>No entries available.</div>
          )}
        </div>
      </div>
      <div className="App relative">
        {/* Button to open the modal */}
        <div className="flex justify-center items-center ">
          <button
            onClick={openModal}
            className="bg-neutral text-white py-2 px-4 rounded font-bold fixed bottom-12 right-8"
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
