import Magnet from "../components/Magnet";
import { useNavigate } from "react-router";
import FuzzyText from "../components/FuzzyText";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-fit mx-auto flex-col items-center justify-center mt-20 gap-20">
      <div className="flex flex-col text-center justify-center items-center gap-2">
        <FuzzyText
          fontWeight={200}
          color="black"
          baseIntensity={0.1}
          hoverIntensity={0.2}
          fontSize={70}
          enableHover={true}
        >
          404
        </FuzzyText>
        <FuzzyText
          fontWeight={200}
          fontFamily="inherit"
          color="black"
          baseIntensity={0.1}
          hoverIntensity={0.2}
          fontSize={30}
          enableHover={true}
        >
          not found
        </FuzzyText>
      </div>
      <button
        onClick={() => navigate("/")}
        className="cursor-pointer rounded bg-white text-black py-2"
      >
        <FuzzyText
          fontWeight={200}
          fontFamily="inherit"
          color="black"
          baseIntensity={0.1}
          hoverIntensity={0.2}
          fontSize={16}
          enableHover={true}
        >
          Go Back Home
        </FuzzyText>
      </button>
    </div>
  );
};

export default NotFound;
