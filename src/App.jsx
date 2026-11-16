import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import DashboardHead from './components/DashboardHead';
import AddPotion from './components/AddPotion';
import PotionFilter from './components/PotionFilter';
import PotionCard from './components/PotionCard';
import ResetPotion from './components/resetPotion';
import './App.css';

function App() {
  const { potions, filterCategory, search, sortBy } = useSelector((state) => state);

  let filtered = potions.filter((p) => {
    const matchCategory = filterCategory === 'all' || p.category === filterCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (sortBy === 'priceAsc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceDesc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="App">
      <Header />
      <DashboardHead />
      <AddPotion />
      <PotionFilter />
      <div className="potions-list">
        {filtered.map((potion) => (
          <PotionCard key={potion.id} potion={potion} />
        ))}
      </div>
      <ResetPotion />
    </div>
  );
}

export default App;