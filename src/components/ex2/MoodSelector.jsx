import { useState } from "react";
import Display from "./moodDisplay";
import History from "./moodHistory";


function Mood() {
    const [selectedMood, setselectedMood] = useState (null)
    const [selectedColor, setselectedColor] = useState("#ffffff")
    const [history, setHistory] = useState([])
    const moods = [
        { label: "😊 Heureux", value: "Heureux", color: "#ffeb3b" },
        { label: "😴 Fatigué", value: "Fatigué", color: "#81d4fa" },
        { label: "😡 Stressé", value: "Stressé", color: "#ef9a9a" },
        { label: "😎 Motivé", value: "Motivé", color: "#a5d6a7" },
    ];

    function updqteMood(item) {
        
    }
    return (
        <div>
            <h2>🎨 Mood Board</h2>
            {
                moods.map((item,key) => (
                    <button key={key}
                        style={
                            { backgroundColor:  item.color ,margin : 10+"px", width : 170 , height : 50+"px", borderRadius : 20+"px"}
                        } onClick={() => {setselectedMood(item.value); setselectedColor(item.color)}}>
                            {item.label}
                    </button>
                ))
            }

                <Display selectedMood={selectedMood} selectedColor = {selectedColor}/>
                <History selectedMood={selectedMood} selectedColor = {selectedColor} history={history} />
        </div>
    );
}



export default Mood; 