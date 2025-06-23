declare module "mf_navbar/Navbar" {
    const Navbar: React.FC  
    export default Navbar;
}

declare module "mf_vue_cards/placeCards" {
    const placeCards: (el) => void  
    export default placeCards;
}

declare module "mf_card_detail/CardDetail" {
    const CardDetail: React.FC<ICardDetail>
    export default CardDetail;
}