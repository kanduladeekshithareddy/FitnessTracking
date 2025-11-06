
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
function Joke() {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("");
  const [targetMuscles, setTargetMuscles] = useState("");

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("https://exercisedb.p.rapidapi.com/exercises?limit=100", {
          method: "GET",
          headers: {
            'X-RapidAPI-Key': '1eccfec129msh937447e05d90a92p1abef2jsn88d310191b8d',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch exercises');
        }
        const data = await response.json();
        setExercises(data);
        console.log("here",data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchExercises();
  }, []);

  const renderExercises = (exercises) => {
    return exercises.map((exercise,index) => (
      <div key={index}>
        <h3>{exercise.name}</h3>
        <p>Body Parts: {exercise.bodyPart}</p>
        <p>Target: {exercise.target}</p>
        <img src={exercise.gifUrl} alt={exercise.name} />
        <ul>{exercise.instructions}</ul>
      </div>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Body Part:", bodyPart);
    console.log("Target Muscles:", targetMuscles);

    // Filter exercises based on the entered body part and target muscles
    console.log("hello the data is :",exercises)
    const filteredData = exercises.filter((exercise,index) => {
      // console.log(exercise);
      const matchBodyPart = bodyPart == exercise.bodyPart;
      // console.log("bodyPart === exercise.bodyParts",bodyPart,exercise.bodyPart,bodyPart == exercise.bodyParts)
      const matchTargetMuscles = targetMuscles == exercise.target;
      return matchBodyPart && matchTargetMuscles;
    });    
    console.log(filteredData);
    setFilteredExercises(filteredData);
  };

  return (
    <Container>
      {filteredExercises.length > 0 ? (
        <div>
          <h2>Filtered Exercises:</h2>
          <div className="exer">
            {renderExercises(filteredExercises)}
          </div>
        </div>
      ) : (
        <>
        <h2>Check The workouts</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bodyPart">Enter Body Part: </label>
          <input type="text" id="bodyPart" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} />
        </div>
        <div>
          <label htmlFor="targetMuscles">Enter Target Muscles: </label>
          <input type="text" id="targetMuscles" value={targetMuscles} onChange={(e) => setTargetMuscles(e.target.value)} />
        </div>
        <button type="submit">Get Exercise</button>
      </form>
      </>
      )}
    </Container>
  );
}
const Container=styled.div`
   .exer{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    overflow-y:scroll;
    height:100vh;
   }
   h2{
    padding-top:2rem;
    font-size: 30px;
    font-weight: 800;
    display:flex;
    align-items:center;
    justify-content:center;
   }
   form{
    padding:2%;
    display: flex;
    flex-direction: column;
    gap: 36px;
    align-items:center;
    justify-content:center;
   }
   label{
    padding:1rem;
   }
   input{
    padding:0.5rem;
   }
   button{
    border-radius: 10px;
    color: black;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: min-content;
    padding: 16px 26px;
    box-shadow: 1px 20px 35px 0px ${({ theme }) => theme.primary + 40};
    border: 1px solid ${({ theme }) => theme.primary};
   }
  @media (max-width: 600px) {
    padding: 8px 12px;
  }
`;
export default Joke;
