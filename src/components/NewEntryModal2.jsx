import { useEffect, useState } from "react";

const NewEntriesModal = ({ onClose, onAddEntry }) => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    content: "",
    image: null,
  });

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setForm((prevForm) => ({
      ...prevForm,
      date: today,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!form.title || !form.content || !form.date) {
      alert("Please fill in all required fields.");
      return; // Exit the function if validation fails
    }

    // Create new note with the form data
    const newNote = { ...form };

    // Handle image URL directly
    if (form.image) {
      newNote.image = form.image; // Use the image URL directly
    } else {
      newNote.image = null; // Ensure image is null if not provided
    }
    onAddEntry(newNote);
    onClose(); // Save updated notes array to local storage
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[url('/public/notebook.png')] bg-cover bg-center p-4  max-w-2xl w-full rounded-lg">
        <div className="p-10 ml-5">
          <h2 className="text-xl font-bold mb-4">Create a New Note</h2>
          <div className="mb-4">
            <label className="block mb-2">
              Title:
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="bg-transparent w-full p-2 border-2 rounded"
                placeholder="Enter title"
              />
            </label>
          </div>
          <div className="mb-4">
            {/*<label className="block mb-2">
            Date:
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label> */}
            <label className="block mb-2">
              Date:
              <input
                type="text"
                name="date"
                readonly
                value={form.date}
                className="w-full p-2 border-2 rounded bg-transparent"
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
                className="w-full h-40 p-2 border-2 rounded bg-transparent"
                placeholder="Start writing here..."
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2">
              Image:
              <input
                type="text"
                placeholder="Image URL"
                name="image"
                onChange={handleChange}
                className="w-full p-2 border-2 rounded"
              />
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={handleSave}
              className="bg-secondary text-black py-2 px-4 rounded"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="bg-primary text-black py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEntriesModal;

<img src="src\assets\notebook.png" alt="" />;
