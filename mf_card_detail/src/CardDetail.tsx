import { useEffect, useState } from "react";
import TiltedCard from "./TiltedCard";
import "./index.css";
interface ICardDetail {
    id: string;
}

export interface Planet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: null | string;
}

export interface Transformation {
  id: number;
  name: string;
  image?: string;
  description?: string;
  ki?: string;
}

export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: null | string;
  originPlanet: Planet;
  transformations: Transformation[];
}

const CardDetail = ({ id }: ICardDetail) => {
  const [card, setCard] = useState<Character | null>(null);
  useEffect(() => {
    const fetchCard = async () => {
      const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
      const data = await response.json();
      setCard(data);
    };
    fetchCard();
  }, [id]);
  return (
    <div className="flex justify-center">
      {card ? (
        <>
        <TiltedCard
          imageSrc={card.image}
          altText={`${card.name} Character Card`}
          captionText={card.name}
          containerHeight=""
          containerWidth="400px"
          imageHeight="600px"
          imageWidth="400px"
          rotateAmplitude={14}
          scaleOnHover={1.1}
          showMobileWarning={true}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="flex h-full text-white text-sm flex-col flex-grow rounded p-2 bg-black/50 justify-end">
              <p>{card.name} - {card.race}</p>
              <p>Power Level: {card.ki}</p>
            </div>
          }
        />
        <div className="ml-8 p-6 bg-white rounded-lg shadow-lg max-w-lg">
          <h2 className="text-3xl text-black font-bold mb-4">{card.name}</h2>
          
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="rounded-md">
              <h3 className="font-bold mb-1">Basic Info</h3>              <p><span>Gender:</span> {card.gender}</p>
              <p><span>Affiliation:</span> {card.affiliation}</p>
            </div>
            
            <div className="rounded-md">
              <h3 className="font-bold mb-1">Power Levels</h3>
              <p><span>Max Power:</span> {card.maxKi}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Description</h3>
            <p>{card.description}</p>
          </div>
          
          {card.originPlanet && (
            <div className="mb-6 rounded-md">
              <h3 className="font-bold mb-1">Planet of Origin</h3>
              <p><span>Name:</span> {card.originPlanet.name}</p>
              <p><span>Status:</span> {card.originPlanet.isDestroyed ? "Destroyed" : "Intact"}</p>
            </div>
          )}
          
          {card.transformations && card.transformations.length > 0 && (
            <div className="rounded-md">
              <h3 className="font-bold mb-2">Transformations</h3>
              <ul className="list-disc list-inside space-y-1">
                {card.transformations.map((t, idx) => (
                  <li key={idx}>{t.name}{t.ki ? ` - Power: ${t.ki}` : ""}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardDetail;
