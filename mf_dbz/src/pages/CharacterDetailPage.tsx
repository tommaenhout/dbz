import { useParams } from "react-router";
import { lazy, Suspense } from "react";
const CharacterDetail = lazy(() => import("mf_card_detail/CardDetail"));

const CharacterDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <CharacterDetail id={id} />
    </>
  );
};

export default CharacterDetailPage;
