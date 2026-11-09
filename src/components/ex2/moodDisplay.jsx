function Display(props) {
    const cardStyle = {
    backgroundColor: props ? props.selectedColor : '#c5e1a5', 
    color: '#2e4620', 
    padding: '30px 40px',
    borderRadius: '16px',
    boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.15)', 
    textAlign: 'center',
    fontSize: '22px',
    fontFamily: 'sans-serif',
    fontWeight: '500',
    maxWidth: '450px',
    margin: '30px auto'
  };
    return (
        <div style={cardStyle}>
            <p>
                aujourd'hui, je me sens {(props.selectedMood ? props.selectedMood : "Aucun Humeur !" )}
            </p>
        </div>
    );
}
export default Display;