"use client";
import "./index.css";

export const Searchbar: React.FC = () => {
  return (
    <div className="Searchbar">
      <input id="input" name="data" list="data" placeholder="search" />

      <datalist id="data">
       
        {/* insert the data and search function here */}
    <option value="Herr" selected></option>
    <option value="Frau"></option>
    <option value="Fraulein"></option> 
      </datalist>
    </div>
  );
};
