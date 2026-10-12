import logo from './logo.svg';
import './App.css';

      function App() 
      {
        let styleList ={
          padding: 10+"px", 
          marging: 10+"px",
          backgroundColor : "red"
        }
        let ageStg = 19;
        let stg = {
          nom : "raiess",
          prenom : "mohamed",
          group : 201,
          filliere : "dev",
          age : ageStg,
        }
        
        function isAdult(){
          return stg.age > 20 ? "adult" : "mineur"
        }
        return (
          <div style = "{styleList}">
            201
            <p>nom : {stg.nom}</p>
            <p>prenom : {stg.prenom}</p>
            <p>group : {stg.group}</p>
            <p>age : {stg.age}-----{ageStg}</p>
            is adult :{isAdult()}

          </div>
        )
      };
      

export default App;
