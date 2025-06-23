import { useParams } from "react-router";
import CharacterDetail from "mf_card_detail/CardDetail";

const CharacterDetailPage = () => {
    const { id } = useParams();
    return (
        <CharacterDetail id={id} />
    );
};

export default CharacterDetailPage;