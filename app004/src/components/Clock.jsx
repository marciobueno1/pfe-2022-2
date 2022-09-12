import React, { useEffect, useState } from "react";

export const Clock = ({ texto }) => {
  const [date, setDate] = useState(new Date());
  const [timerID, setTimerID] = useState(0);

  useEffect(() => {
    console.log("no useEffect");
    setTimerID(setInterval(() => setDate(new Date()), 1000));

    return () => {
      console.log("no return do useEffect");
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    console.log("Dentro do useEffect do texto");
    return () => {
      console.log("dentro do return do useEffect do texto");
    };
  }, [texto]);

  return (
    <div>
      <h1>{texto}</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};
