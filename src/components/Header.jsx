const Header = () => {
  const currentDate = new Date().toLocaleString();

  return (
    <div>
      <div className="navbar bg-accent text-primary-content flex justify-between">
        <button className="btn btn-ghost text-xl">My Personal Diary</button>
        <span>{currentDate}</span>
      </div>
    </div>
  );
};

export default Header;
