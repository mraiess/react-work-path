import React from 'react';
import { useDispatch } from 'react-redux';
import { resetAtelier } from '../Redux/Actions';

function ResetPotion() {
  const dispatch = useDispatch();
  return (
    <section className="reset">
      <p>Restaure l'état initial de l'atelier : les 3 potions de départ, l'inventaire d'ingrédients complet, les filtres et le formulaire.</p>
      <button onClick={() => dispatch(resetAtelier())}>Réinitialiser l'atelier</button>
    </section>
  );
}

export default ResetPotion;