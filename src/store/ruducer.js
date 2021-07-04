const INITIAL_STATE = {
name : [
      {
          ali: "Father"
      }
  ],
  questions : [
      {
        question : "The capital of Pakistan is ________",
              optiions: [
                "Lahore",
                "karachi",
                "Islamabad"
              ],
              correctanswer : "Islamabad"
      },{
        question : "__________ is the biggest station of Pakistan",
                      optiions: [
                        "Rohdi",
                        "Mian Chunnu",
                        "Lahore"
                      ],
                      correctanswer : "Rohdi"
      },{
        question : "________ is called the city of Light",
              optiions: [
                "Lahore",
                "karachi",
                "Islamabad"
              ],
              correctanswer : "karachi"
      }
  ]
};

const reducer = (state = INITIAL_STATE)=>{
    return state
}

export default reducer;

