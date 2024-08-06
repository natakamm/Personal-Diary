import defaultImage from "/Book Yellow.webp";

const Card = ({ entry, onOpenModal }) => {
  //function to show modal
  return (
    <div className="flex justify-center my-4">
      <div className="bg-[url('/public/sticky.png')] bg-cover bg-center p-8  max-w-2xl w-full rounded-lg">
        <div className=" overflow-hidden max-w-sm mx-auto mt-12">
          <figure className="relative w-full h-48  ">
            <img
              src={entry.image || defaultImage}
              alt={entry.title}
              className="object-cover w-full h-full absolute top-0 left-0 rounded-lg"
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
    </div>
  );
};

export default Card;
