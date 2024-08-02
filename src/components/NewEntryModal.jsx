import { useState } from "react";

const NewEntriesModal = ({ onClose }) => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({
        ...form,
        image: e.target.files[0], // Store the file object
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = () => {
    if (!form.title || !form.content || !form.date) {
      alert("Please fill in all required fields.");
      return; // Exit the function if validation fails
    }

    const notes = JSON.parse(localStorage.getItem("notebookNotes")) || []; // Retrieve existing notes or initialize as empty array
    const newNote = { ...form, image: null }; // Create new note without the file object
    // Handle image separately
    if (form.image) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result; // This is a data URL
        // Create a URL object for the image
        const urlObject = URL.createObjectURL(form.image);
        // Update the note with the URL object
        newNote.image = urlObject; // Store only the URL object reference
        notes.unshift(newNote); // Add new note to the array
        localStorage.setItem("notebookNotes", JSON.stringify(notes)); // Save updated notes array to local storage
        console.log("Image URL object saved to local storage:", urlObject); // Log the URL object
      };
      reader.readAsDataURL(form.image); // Convert file to data URL
    } else {
      notes.unshift(newNote); // Add new note to the array
      localStorage.setItem("notebookNotes", JSON.stringify(notes)); // Save updated notes array to local storage
    }
    // Log the data to the console
    console.log("Saving note with data:");
    console.log("Title:", form.title);
    console.log("Date:", form.date);
    console.log("Content:", form.content);
    console.log(
      "Image URL:",
      form.image ? URL.createObjectURL(form.image) : "No image"
    );
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 border-2 border-gray-300 shadow-lg max-w-2xl w-full">
        <h2 className="text-xl font-bold mb-4">Create a New Note</h2>
        <div className="mb-4">
          <label className="block mb-2">
            Title:
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter title"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Date:
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Content:
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              className="w-full h-40 p-2 border rounded"
              placeholder="Start writing here..."
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Image:
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewEntriesModal;
