import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ButtonBack = ({ page }: { page: string }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-12 p-6 text-sm text-[#646464]">
      <button onClick={() => navigate("/")}>Home</button>
      <MdKeyboardArrowRight />
      <p>{page}</p>
    </div>
  );
};

export default ButtonBack;
