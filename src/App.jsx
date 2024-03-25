/* eslint-disable react-hooks/exhaustive-deps */
import QuizBox from './comps/QuizBox'
import * as React from 'react'
import './pattern.css'
function App() {
  const questions= [
      {
        "id": 1,
        "question": "What does HTML stand for?",
        "options": [
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Tool Markup Language"
        ],
        "answer": "Hyper Text Markup Language"
      },
      {
        "id": 2,
        "question": "What is the correct way to write a comment in JavaScript?",
        "options": [
          "// This is a comment",
          "<!-- This is a comment -->",
          "This is a comment",
          "/* This is a comment */"
        ],
        "answer": "// This is a comment"
      },
      {
        "id": 3,
        "question": "Which symbol is used for single-line comments in JavaScript?",
        "options": [
          "//",
          "#",
          "/",
          "<!--"
        ],
        "answer": "//"
      },
      {
        "id": 4,
        "question": "What does CSS stand for?",
        "options": [
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets"
        ],
        "answer": "Cascading Style Sheets"
      },
      {
        "id": 5,
        "question": "Which HTML tag is used to link an external JavaScript file?",
        "options": [
          "<js>",
          "<javascript>",
          "<script>",
          "<link>"
        ],
        "answer": "<script>"
      },
      {
        "id": 6,
        "question": "What is the result of the following expression: \"2\" + 2?",
        "options": [
          "\"22\"",
          "4",
          "\"4\"",
          "NaN"
        ],
        "answer": "\"22\""
      },
      {
        "id": 7,
        "question": "Which method is used to add a new element to the end of an array?",
        "options": [
          "append()",
          "push()",
          "addToEnd()",
          "addElement()"
        ],
        "answer": "push()"
      },
      {
        "id": 8,
        "question": "What is the output of console.log(typeof [])?",
        "options": [
          "\"object\"",
          "\"array\"",
          "\"array object\"",
          "\"array[]\""
        ],
        "answer": "\"object\""
      },
      {
        "id": 9,
        "question": "What is the purpose of the addEventListener method in JavaScript?",
        "options": [
          "To create new event listeners",
          "To remove event listeners",
          "To add styling to elements",
          "To handle events triggered by elements"
        ],
        "answer": "To handle events triggered by elements"
      },
      {
        "id": 10,
        "question": "What does the this keyword refer to in JavaScript?",
        "options": [
          "The current function",
          "The parent function",
          "The global object",
          "The current object"
        ],
        "answer": "The current object"
      },
      {
        "id": 11,
        "question": "What is the correct way to declare a variable in JavaScript?",
        "options": [
          "var x = 5;",
          "variable x = 5;",
          "x = 5;",
          "int x = 5;"
        ],
        "answer": "var x = 5;"
      },
      {
        "id": 12,
        "question": "What does JSON stand for?",
        "options": [
          "JavaScript Object Notation",
          "JavaScript Object Naming",
          "JavaScript Oriented Notation",
          "JavaScript Object Nullification"
        ],
        "answer": "JavaScript Object Notation"
      },
      {
        "id": 13,
        "question": "What does API stand for in the context of web development?",
        "options": [
          "Application Programming Interface",
          "Advanced Programming Interface",
          "Application Process Interface",
          "Automated Program Interface"
        ],
        "answer":  "Application Programming Interface"
      },
      {
        "id": 14,
        "question": "What is a closure in JavaScript?",
        "options": [
          "A function defined within another function",
          "A variable defined within a function",
          "A way to prevent code execution",
          "A way to access global variables"
        ],
        "answer": "A function defined within another function"
      },
      {
        "id": 15,
        "question": "What is the purpose of the Promise object in JavaScript?",
        "options": [
          "To handle asynchronous operations",
          "To execute code sequentially",
          "To define classes and objects",
          "To create event listeners for promises"
        ],
        "answer": "To handle asynchronous operations"
      },
      {
        "id": 16,
        "question": "What is the difference between == and === in JavaScript?",
        "options": [
          "== compares both value and type, whereas === only compares value",
          "== only compares value, whereas === compares both value and type",
          "== is used for assignment, whereas === is used for comparison",
          "There is no difference between == and === in JavaScript"
        ],
        "answer": "== only compares value, whereas === compares both value and type"
      },
      {
        "id": 17,
        "question": "What does the term \"hoisting\" refer to in JavaScript?",
        "options": [
          "A feature that allows variables and functions to be used before they are declared",
          "A way to prioritize certain code execution over others",
          "An error that occurs when using undeclared variables",
          "A technique to optimize code performance in loops"
        ],
        "answer": "A feature that allows variables and functions to be used before they are declared"
      },
      {
        "id": 18,
        "question": "What is destructuring in JavaScript?",
        "options": [
          "A way to create a copy of an object or array",
          "A method to automatically sort arrays",
          "A technique to break down objects or arrays into smaller parts",
          "A process to convert strings into numbers"
        ],
        "answer": "A technique to break down objects or arrays into smaller parts"
      },
      {
        "id": 19,
        "question": "What is the purpose of async and await in JavaScript?",
        "options": [
          "To handle asynchronous operations and make asynchronous code look synchronous",
          "To handle synchronous operations and make synchronous code look asynchronous",
          "To create asynchronous loops",
          "To execute code conditionally based on promises"
        ],
        "answer": "To handle asynchronous operations and make asynchronous code look synchronous"
      },
      {
        "id": 20,
        "question": "What is the purpose of the try and catch blocks in JavaScript?",
        "options": [
          "To handle errors that may occur in a block of code",
          "To execute code repeatedly until a condition is met",
          "To prevent a block of code from executing",
          "To check if a variable is defined or not before using it"
        ],
        "answer": "To handle errors that may occur in a block of code"
      }
    ] 
    
    const [disable, setDisable] = React.useState([true,false])
  const handleAnswer = (questionID, value) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [questionID]: value
      }
    })
    console.log(answers)
    }
    const checkAnswer = (questionID, value) => {
      if (answers[questionID] === value) {
        return true
      } else {
        return false
      }
    }
  const [questionIndex, setQuestionIndex] = React.useState(0)
  const [answers, setAnswers] = React.useState()
  React.useEffect(() => {
    if(questionIndex === 0){
      setDisable([true,false])
    }else if(questionIndex === questions.length - 1){
      setDisable([false,true])
    }else{
      setDisable([false,false])
    }},[questionIndex]);
    

  return (
    
    <main className='bg-black w-screen h-screen grid place-items-center  pt-10 '>
    {/*quiz box */ }
          <QuizBox 
            key={questions[questionIndex].id}
            questionID={questions[questionIndex].id}
            question={questions[questionIndex].question}
            options={questions[questionIndex].options}
            setAnswer={handleAnswer}
            defaultValue={answers?.[questions[questionIndex].id]} 
          />
{/*button group */}
<div className='flex gap-5'>
            <button disabled={disable[0]}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => setQuestionIndex((prev) => prev -1)}
            >previous</button>
            <button  onClick={()=>{console.log(checkAnswer())}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            check
            </button>
            <button disabled={disable[1]}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => setQuestionIndex((prev) => prev + 1)}
            >Next</button>
</div>

    </main>
  )
}

export default App
