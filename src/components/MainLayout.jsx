import Header from "./Header";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import NewEntryModal from "./NewEntryModal2";
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
  }, []);

  const addEntry = (entry) => {
    const updatedEntries = [entry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem("notebookNotes", JSON.stringify(updatedEntries));
  };

  //For the new Entry FORM
  //const openModal = () => {
  //const today = new Date().toISOString().split("T")[0];
  // const existingDate = entries.find((entry) => entry.date === today);

  // if (!existingDate) {
  //   setIsModalOpen(true);
  // } else {
  //   alert("An entry for today already exists. Please tray again tomorrow");
  // }
  // };

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
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-3xl">My Entries</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8 w-full max-w-6xl">
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

        {isModalOpen && (
          <NewEntryModal onClose={closeModal} onAddEntry={addEntry} />
        )}
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
