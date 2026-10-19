import { useState } from 'react';

function PseudoInput() {
  const [pseudo, setPseudo] = useState('');

  const MAX = 20;

  return (
    <div style={{ marginBottom: '30px' }}>
      <label>
        Ton pseudo :
        <br />
        <input
          type="text"
          maxLength={MAX}
          placeholder="Écris ton pseudo..."
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
      </label>

      <p style={{ color: pseudo.length >= MAX ? 'red' : 'black' }}>
        {pseudo.length} / {MAX} caractères
      </p>

      <div
        style={{
          border: '1px solid #999',
          borderRadius: '8px',
          padding: '10px',
        }}
      >
        <h3>Aperçu en direct</h3>
        <p>Bonjour, {pseudo.trim() === '' ? '...' : pseudo} !</p>
      </div>
    </div>
  );
}

export default PseudoInput;
