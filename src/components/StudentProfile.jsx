import { useState } from 'react';

function StudentProfile() {
  const [isVisible, setIsVisible] = useState(false);
  let profile= {
    name : "Mohamed Raiess",
    filliere : "dev digital"
  };


  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {
          (isVisible ? "masquer": "afficher")
        }
      </button>
      {
          (isVisible ? 
            (
              <div>
                <p>
                  name = {profile.name} <br />
                  filiere = {profile.filliere}
                </p>
              </div> 
            ):"")
        }
    </div>
  );
};
export default StudentProfile;
