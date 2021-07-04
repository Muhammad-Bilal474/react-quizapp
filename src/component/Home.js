import { useSelector } from "react-redux";
import {useState} from 'react';


function Home(){
    const state = useSelector(state => state);
    const [ind,setInd] = useState(0);
const [selectedValue, setSelectedValue] = useState("");
const [score,setScore] = useState(0);
const [showResult, setShowResult] = useState(false)

function checkAnswer(){
  let correctAnswer = state.questions[ind].correctanswer;
  if(selectedValue == correctAnswer){
    setScore(score+1)
  } if (state.questions.length == ind + 1) {
      setShowResult(true);
    } else {
      setInd(ind + 1);
    }
  
}
console.log(state.questions)
    return(
    <div className = "App">
  {showResult ? (
            <div className=" container my-5 p-3 bg-white border border-primary h-100 d-inline-block rounded shadow text-dark">
              <p className="fs-1 font-weight-bold font-italic bold">Result</p>
              <progress
                className="p-3"
                id="file"
                value={score}
                max={state.questions.length}
              ></progress>
              <h3>{((score / state.questions.length) * 100).toFixed(2)} %</h3>
              <h3 className="bold">
                {(score / state.questions.length) * 100 < 60 ? "Fail" : "Pass"}{" "}
              </h3>
            </div>
          ) : null}

   {!showResult ? (
     <div className = "container w-75 box bg-primary text-light shadow my-5 p-2">
     <p className="fs-1">
                Question Number <span className="fs-1">{ind + 1}</span> of{" "}
                {state.questions.length}
              </p>
              <p className="fs-1">{state.questions[ind].question}</p>
              <div  className = "row mt-5">
       {state.questions[ind].optiions.map((e,i)=>{
         return(
          <div className="mt-1">
               <div key ={i} className= "py-2">
             <button onClick={() => setSelectedValue(e)}
                   className="btn btn-light options rounded px-5">
           {e}
             </button>
             </div>
          </div>
         )
       })}

     </div>
     </div>
     
   ):null}

        {!showResult ? (
            <div className="container">
            <button onClick={()=> checkAnswer()}
              class="btn btn-danger px-5 rounded"
            >
              Next
            </button>
          </div>
        ):null}
      
    </div>
    )
}
 

export default Home;
