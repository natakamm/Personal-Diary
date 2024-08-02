import { CutiveMono } from "./FontFamily";

const Header = () => {
  const currentDate = new Date().toLocaleString();

  return (
    <div>
      <div
        className="px-10 py-2 navbar bg-accent text-primary-content flex justify-between"
        style={CutiveMono}
      >
        <div className="flex gap-4">
          <figure>
            <img
              src="src/assets/Book Yellow.webp"
              alt="logo"
              className="h-20"
            />
          </figure>
          <h1 className="text-xl font-bold">My Personal Diary</h1>
        </div>
        <span className="text-sm py-2 px-3 bg-secondary rounded-xl">
          {currentDate}
        </span>
      </div>
    </div>
  );
};

export default Header;
