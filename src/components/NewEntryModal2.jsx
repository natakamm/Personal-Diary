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
        onAddEntry(newNote);
        onClose();
      };
      reader.readAsDataURL(form.image); // Convert file to data URL
    } else {
      onAddEntry(newNote);
      onClose(); // Save updated notes array to local storage
    }
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
                type="file"
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
