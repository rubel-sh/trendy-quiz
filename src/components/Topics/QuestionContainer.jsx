import { Interweave } from "interweave";
import React, { useState } from "react";
import { ImEye } from "react-icons/Im";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./QuestionContainer.css";

const QuestionContainer = ({ ques, index, score, setScore }) => {
  const { question, options, correctAnswer } = ques;
  // States
  const [isAnswered, setAnswered] = useState(false);
  // Toast
  const notify = () =>
    toast.info(`Correct Answer: ${correctAnswer}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const correctAnsNotify = (ans) =>
    toast.success(`Correct: ${ans}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const wrongAnsNotify = (ans) =>
    toast.error(`Wrong: ${ans}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  // Handlers

  // If the question is correct add +1 to score.correct
  // else add +1 to score.incorrect also display toast
  const isCorrect = (option, e) => {
    setAnswered(!isAnswered);
    console.log(isAnswered);
    if (option === correctAnswer) {
      correctAnsNotify(option);
      e.target.classList.add("corrrect_ans");
      setScore((prevState) => ({
        ...prevState,
        correct: +score.correct + 1,
      }));
    } else {
      wrongAnsNotify(option);
      e.target.classList.add("incorrect_ans");
      setScore((prevState) => ({
        ...prevState,
        incorrect: +score.incorrect + 1,
      }));
    }
  };

  return (
    <div className="mb-10 neomorph relative">
      <div className="absolute top-6 right-10 cursor-pointer text-3xl">
        <button onClick={notify}>
          <ImEye className="hover:text-red-600 text-slate-800" />
        </button>
      </div>
      <h2 className="py-5  text-2xl font-bold">Quiz: {index}</h2>
      <Interweave
        className="font-medium py-5 interweave"
        content={question}
      ></Interweave>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-5 w-5/6 mx-auto py-8">
        {options.map((option) => (
          <div
            key={option}
            className="neomorph-btn text-sm font-medium  border-slate-500 py-5 px-4  border-1  hover:text-sky-700 cursor-pointer"
            onClick={(e) => isAnswered || isCorrect(option, e)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionContainer;
