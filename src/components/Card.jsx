import defaultImage from "../assets/Book Yellow.webp";

const Card = ({ entry, onOpenModal }) => {
  //function to show modal
  return (
    <div className="flex justify-center my-4">
      <div className="card glass overflow-hidden max-w-sm">
        <figure className="relative w-full h-48 bg-gray-300 ">
          <img
            src={entry.image || defaultImage}
            alt={entry.title}
            className=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{entry.title}</h2>
          <p>{entry.date}</p>
          <div className="card-actions justify-end">
            <button
              className="p-4 bg-primary hover:bg-secondary rounded-xl"
              onClick={() => onOpenModal(entry)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
