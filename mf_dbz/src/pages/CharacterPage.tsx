import placeCards from "mf_vue_cards/placeCards";
import { useEffect, useRef } from "react";

const CharacterPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    placeCards(ref.current);
  }, []);

  return (
    <>
      <div ref={ref}></div>
    </>
  );
};

export default CharacterPage;
