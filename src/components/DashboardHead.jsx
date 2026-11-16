import React from 'react';
import { useSelector } from 'react-redux';

function DashboardHead() {
  const potions = useSelector((state) => state.potions);
  const favorites = potions.filter((p) => p.favorite).length;
  const totalValue = potions.reduce((sum, p) => sum + Number(p.price || 0), 0);
  const legendary = potions.filter((p) => p.rarity === 'legendaire').length;

  return (
    <div className="dashboard">
      <div className="stat">
        <span className="stat-value">{potions.length}</span>
        <span className="stat-label">POTIONS</span>
      </div>
      <div className="stat">
        <span className="stat-value">{totalValue}</span>
        <span className="stat-label">PIECES D'OR</span>
      </div>
      <div className="stat">
        <span className="stat-value">{favorites}</span>
        <span className="stat-label">FAVORITES</span>
      </div>
      <div className="stat">
        <span className="stat-value">{legendary}</span>
        <span className="stat-label">LEGENDAIRES</span>
      </div>
      <div className="dashboard-extra">
        <span>Potions favorites : {favorites}</span>
        <span>Valeur totale des potions : {totalValue}</span>
        <span>Total des pièces d'or : {totalValue}</span>
        <span>Potions légendaires : {legendary}</span>
      </div>
    </div>
  );
}

export default DashboardHead;