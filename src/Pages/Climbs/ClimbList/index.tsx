import React, { useState } from "react";
import { ClimbElement } from "../../../types/response";

interface ClimbListProps {
  climbs: ClimbElement[];
  title: string;
}

const ClimbList: React.FC<ClimbListProps> = ({ climbs, title }) => {
  const [sortedBy, setSortedBy] = useState("added");
  const [reverse, setReverse] = useState(true);

  const formatString = (date: string) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${day}.${month}.${year}`;
  };

  const handleClick = (id: number) => {
    fetch("http://localhost:8000/climbs/" + id, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
    window.location.reload();
  };

  const sortClimbs = (climbList: ClimbElement[]) => {
    let resultat = climbList;
    if (sortedBy === "grade") {
      resultat = resultat.sort((a, b) => a.grade.localeCompare(b.grade));
    } else if (sortedBy === "date") {
      resultat = resultat.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else {
      resultat = resultat.sort((a, b) => a.id - b.id);
    }
    if (reverse === false) {
      resultat = resultat.reverse();
    }
    return resultat;
  };

  const toggleReverse = () => {
    return setReverse(!reverse);
  };

  return (
    <div className="ml-64 p-4">
      <h1 className="text-4xl text-center font-bold text-secondary py-6">
        {title}
      </h1>
      <div className="flex flex-row justify-between px-3">
        <form className="">
          <label>Sorted by: </label>
          <select name="sort" onChange={(e) => setSortedBy(e.target.value)}>
            <option value="added">Time added</option>
            <option value="grade">Grade</option>
            <option value="date">Date</option>
          </select>
        </form>
        <div className="">
          {/* Reverses the climblist when button is clicked */}
          <input
            className="h-6"
            type="image"
            src="/arrow-up-down-svgrepo-com.svg"
            onClick={() => setReverse(!reverse)}
          />
        </div>
      </div>
      {sortClimbs(climbs).map((climb) => (
        <div className="border border-b-slate-300 p-6 my-2" key={climb.id}>
          <h2 className="font-bold">
            {climb.climbType.charAt(0).toUpperCase() + climb.climbType.slice(1)}
          </h2>
          <p>Grade: {climb.grade}</p>
          <p>When: {formatString(climb.date)}</p>
          <button
            className="formelement--select"
            onClick={() => handleClick(climb.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ClimbList;
