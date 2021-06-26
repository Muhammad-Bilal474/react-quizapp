import {useState} from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [questions,setQuestion] = useState([
    {
      question : "The capital of Pakistan is ________",
      optiions: [
        "Lahore",
        "karachi",
        "Islamabad"
      ],
      correctanswer : "Islamabad"
    },
    {
      question : "________ is called the city of Light",
      optiions: [
        "Lahore",
        "karachi",
        "Islamabad"
      ],
      correctanswer : "karachi"
    },
    {
      question : "__________ is the biggest station of Pakistan",
      optiions: [
        "Rohdi",
        "Mian Chunnu",
        "Lahore"
      ],
      correctanswer : "Rohdi"
    }
  ])
const [ind,setInd] = useState(0);
const [selectedValue, setSelectedValue] = useState("");
const [score,setScore] = useState(0);
const [showResult, setShowResult] = useState(false)

function checkAnswer(){
  let correctAnswer = questions[ind].correctanswer;
  if(selectedValue == correctAnswer){
    setScore(score+1)
  } if (questions.length == ind + 1) {
      setShowResult(true);
    } else {
      setInd(ind + 1);
    }
  
}



  return (
 <div className = "App">
    {showResult ? (
            <div className=" container my-5 p-3 bg-info rounded shadow text-dark">
              <p className="fs-2 font-weight-bold font-italic">Result</p>
              <progress
                className="p-3"
                id="file"
                value={score}
                max={questions.length}
              ></progress>
              <h3>{((score / questions.length) * 100).toFixed(2)} %</h3>
              <h3>
                {(score / questions.length) * 100 < 60 ? "Fail" : "Pass"}{" "}
              </h3>
            </div>
          ) : null}

   {!showResult ? (
     <div className = "container bg-primary text-light rounded shadow my-5 p-2">
     <p className="fs-4">
                Question Number <span className="fs-1">{ind + 1}</span> of{" "}
                {questions.length}
              </p>
              <h3>{questions[ind].question}</h3>
              <div  className = "row mt-5">
       {questions[ind].optiions.map((e,i)=>{
         return(
           <div key ={i} className= "col-md-4 py-2">
             <button onClick={() => setSelectedValue(e)}
                   className="btn btn-light rounded px-5">
           {e}
             </button>
             </div>
         )
       })}

     </div>
     </div>
     
   ):null}

        {!showResult ? (
            <div className="container">
            <button onClick={()=> checkAnswer()}
              class="btn btn-dark px-5 rounded"
            >
              Next
            </button>
          </div>
        ):null}
        

    </div>
  );
}

export default App;
