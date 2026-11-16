import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPotion } from '../Redux/Actions';

function AddPotion() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('soin');
  const [rarity, setRarity] = useState('commune');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !category || !rarity || price === '') {
      setError('Veuillez renseigner tous les champs obligatoires.');
      return;
    }
    const newPotion = {
      id: Date.now(),
      name: name.trim(),
      category,
      rarity,
      price: Number(price),
      favorite: false,
    };
    dispatch(addPotion(newPotion));
    setName('');
    setCategory('soin');
    setRarity('commune');
    setPrice('');
    setError('');
  };

  return (
    <section className="add-potion">
      <h2>Fabriquer une potion</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Nom *</label>
          <input
            type="text"
            placeholder="Ex : Philtre de Brume"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Catégorie *</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="soin">Soin</option>
            <option value="magie">Magie</option>
            <option value="protection">Protection</option>
          </select>
        </div>
        <div className="field">
          <label>Rareté *</label>
          <select value={rarity} onChange={(e) => setRarity(e.target.value)}>
            <option value="commune">Commune</option>
            <option value="rare">Rare</option>
            <option value="legendaire">Légendaire</option>
          </select>
        </div>
        <div className="field">
          <label>Prix en pièces d'or *</label>
          <input
            type="number"
            placeholder="Ex:75"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Fabriquer la potion</button>
      </form>
    </section>
  );
}

export default AddPotion;