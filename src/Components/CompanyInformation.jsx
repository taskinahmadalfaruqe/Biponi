import { Link } from "react-router-dom";

const CompanyInformation = () => {
  return (
    <div className="border-t border-borderColor bg-[#f5f5f5] text-[#b8b8b8] text-[11px] md:text-[15px] py-5">
      <div className="container">
        <h2 className="text-[#1e1e1e] font-medium text-xl md:text-2xl">Company information</h2>
        <ui className='flex gap-5 justify-center items-center py-5 flex-wrap'>
          <li>
            <Link to={"/"}>User agreement</Link>
          </li>
          <li>
            <Link to={"/"}>Contacts</Link>
          </li>
          <li>
            <Link to={"/"}>Delivery</Link>
          </li>
          <li>
            <Link to={"/"}>FAQ</Link>
          </li>
          <li>
            <Link to={"/"}>Become a partner</Link>
          </li>
          <li>
            <Link to={"/"}>Become a courier</Link>
          </li>
          <li>
            <Link to={"/"}>Eats for Business</Link>
          </li>
          <li>
            <Link to={"/"}>Plastic recycling</Link>
          </li>
          <li>
            <Link to={"/"}>Order food in the Yandex Go app</Link>
          </li>
          <li>
            <Link to={"/"}>Feedback</Link>
          </li>
        </ui>
      </div>
    </div>
  );
};

export default CompanyInformation;
