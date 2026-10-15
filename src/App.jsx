import './App.css';

function App() {


  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    console.log(data);

  }
  return (
    <div>
      <h1>Membership Registration</h1> <br />

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" required />

        <br /><br />

        <label>Last Name:</label>
        <input type="text" name="lastName" required />

        <br /><br />

        <label>Adresse:</label>
        <input type="text" name="adresse" required />

        <br /><br />

        <label>Email:</label>
        <input type="email" name="email" required />

        <br /><br />

        <label>Phone Number:</label>
        <input type="tel" name="phone" required />

        <br /><br />

        <label>city and state spaced by gomma:</label>
        <input type="text" name="city" required />

        <br /><br />

        <label>Zip Code:</label>
        <input type="number" name="zcode" required />

        <br /><br />

        <label>Membership Level:</label> <br />

        <label >
          <input
            type="radio"
            name="membership"
            value="Bronze"
            required
          />
          Bronze</label>
        <label >
          <input
            type="radio"
            name="membership"
            value="Silver"
          />
          Silver</label>
        <label >
          <input
            type="radio"
            name="membership"
            value="Gold"
          />
          Gold</label>
        <label >
          <input
            type="radio"
            name="membership"
            value="Platinum"
          />
          Platinum</label>

        <br /><br />

        <button type="submit">Register</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default App;
