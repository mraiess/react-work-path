import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter, setSearch, setSort } from '../Redux/Actions';

function PotionFilter() {
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.filterCategory);
  const search = useSelector((state) => state.search);
  const sortBy = useSelector((state) => state.sortBy);

  const categories = [
    { value: 'all', label: 'Toutes les potions' },
    { value: 'soin', label: 'Soin' },
    { value: 'magie', label: 'Magie' },
    { value: 'protection', label: 'Protection' },
  ];

  return (
    <section className="potion-filter">
      <div className="filter-categories">
        {categories.map((c) => (
          <button
            key={c.value}
            className={filterCategory === c.value ? 'active' : ''}
            onClick={() => dispatch(setCategoryFilter(c.value))}
          >
            {c.label}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Rechercher par nom..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <select value={sortBy} onChange={(e) => dispatch(setSort(e.target.value))}>
        <option value="none">Tri par défaut</option>
        <option value="priceAsc">Prix croissant</option>
        <option value="priceDesc">Prix décroissant</option>
      </select>
    </section>
  );
}

export default PotionFilter;