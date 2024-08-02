const CardDetailsModal = ({ entry, closeModal }) => {
  //when entry (props for selectedEntry value is false, then it shows nothing. It is false when its null, undefined, 0, NaN, "" (empty string), and false
  if (!entry) return null;

  return (
    <div>
      <dialog id="my_modal_1" className="modal" open>
        <div className="modal-box">
          <h3 className="font-bold text-lg">{entry.title}</h3>
          <p>{entry.date}</p>
          <p className="py-4">{entry.content}</p>
          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CardDetailsModal;
