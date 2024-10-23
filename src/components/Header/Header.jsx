import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-11/12 md:w-10/12 mx-auto border-b-[1px] p-5">
      <div className="flex justify-between items-center">
        <div>
          <img src="" alt="" />
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
        <div>
          <span></span>
          <img src="" alt="" />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold">Knowlde Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
