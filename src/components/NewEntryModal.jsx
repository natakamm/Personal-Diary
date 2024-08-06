import { useEffect, useState } from "react";

const NewEntriesModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (title && date && image && content) {
      const newEntry = { title, date, image, content };
      onSave(newEntry);
      onClose();
    } else {
      alert("Please fill in all fields");
    }
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
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Date:
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Image Url:
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Content:
            <textarea
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-40 p-2 border rounded"
              placeholder="Start writing here..."
            />
          </label>
        </div>
        <div className="mb-4"></div>
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
  );
};

export default NewEntriesModal;
