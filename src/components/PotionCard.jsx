import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePotion, toggleFavorite } from '../Redux/Actions';

function PotionCard({ potion }) {
  const dispatch = useDispatch();
  return (
    <div className="potion-card">
      <h3>{potion.name}</h3>
      <p>Catégorie : ({potion.category})</p>
      <p>Rareté : {potion.rarity}</p>
      <p>{potion.price} po</p>
      <div className="card-actions">
        <button onClick={() => dispatch(toggleFavorite(potion.id))}>
          {potion.favorite ? '★ Retirer des favoris' : '☆ Ajouter aux favoris'}
        </button>
        <button onClick={() => dispatch(deletePotion(potion.id))}>X Supprimer</button>
      </div>
    </div>
  );
}

export default PotionCard;