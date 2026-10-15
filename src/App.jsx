import './App.css';

function App() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Membership Registration</h1>

      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input id="firstName" type="text" name="firstName" required />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input id="lastName" type="text" name="lastName" required />
        </div>

        <div className="form-group">
          <label htmlFor="adresse">Address:</label>
          <input id="adresse" type="text" name="adresse" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input id="phone" type="tel" name="phone" required />
        </div>

        <div className="form-group">
          <label htmlFor="city">City and state (comma separated):</label>
          <input id="city" type="text" name="city" required />
        </div>

        <div className="form-group">
          <label htmlFor="zcode">Zip Code:</label>
          <input id="zcode" type="number" name="zcode" required />
        </div>

        <fieldset className="form-group membership-group">
          <legend>Membership Level:</legend>
          <label className="membership-option">
            <input type="radio" name="membership" value="Bronze" required /> Bronze
          </label>
          <label className="membership-option">
            <input type="radio" name="membership" value="Silver" /> Silver
          </label>
          <label className="membership-option">
            <input type="radio" name="membership" value="Gold" /> Gold
          </label>
          <label className="membership-option">
            <input type="radio" name="membership" value="Platinum" /> Platinum
          </label>
        </fieldset>

        <div className="form-actions">
          <button type="submit">Register</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default App;