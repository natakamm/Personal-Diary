import "../App.css";
import defaultImage from "/Book Yellow.webp";
const CardDetailsModal = ({ entry, closeModal }) => {
  //when entry (props for selectedEntry value is false, then it shows nothing. It is false when its null, undefined, 0, NaN, "" (empty string), and false
  if (!entry) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-box bg-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center border-b-2 border-gray-300 pb-2 mb-4">
            <div className="flex-1">
              <h3 className="font-bold text-lg">{entry.title}</h3>
            </div>

            <div className="text-gray-500">
              <span>{entry.date}</span>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={entry.image || defaultImage}
              alt={entry.title}
              className="mb-5 rounded-xl w-full bg-gray-300 "
            />

            <textarea
              readOnly={true}
              className="w-full h-full border-none outline-none p-4 bg-gray-100 rounded-lg resize-none notebook-textarea"
              rows="15"
              defaultValue={entry.content}
            ></textarea>
          </div>
        </div>

        <div className="modal-action ">
          <button
            className="bg-primary rounded-full px-4 py-2 flex font-bold "
            onClick={closeModal}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsModal;
