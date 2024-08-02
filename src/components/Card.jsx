const Card = ({ entry, onOpenModal }) => {
  //function to show modal
  return (
    <div className="bg-primary p-5 m-4">
      <h3>{entry.title}</h3>
      <p>{entry.date}</p>
      <img src={entry.image} alt={entry.title} />
      <button className="btn" onClick={() => onOpenModal(entry)}>
        View Details
      </button>
    </div>
  );
};

export default Card;
