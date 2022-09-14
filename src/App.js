import './App.css';
import React from "react";
import axios from 'axios';
import { useEffect, useState, createContext } from 'react';
import Pagination from './components/Pagination';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [url, setUrl] = useState('https://catfact.ninja/facts');

  const [facts, setFacts] = useState();
  let content = null;
  let pagination = null;

  useEffect(() => {
    axios.get(url)
        .then(response => {
          setFacts(response.data)
        })
  },[url])

  const changeUrl = (url) => {
    setUrl(url);
  }
  
  const removeItem = (index) => {
    const filterfacts = facts.data.filter((fact, i) => i != index);
    console.log(filterfacts);
  }

  if (facts) {

    pagination = <ul className='pagination'>{facts.links.map( fact => 
      <Pagination 
          key = {fact.label}
          url= {fact.url}
          label = {fact.label}
          changeUrl = {changeUrl}
      />
  
      )}</ul>

    content = <ul>{facts.data.map( (fact, index) => 
      <li key={index}>{fact.fact}   <button className="btn btn-danger" onClick={() => removeItem(index)}>Delete</button> </li>

    )}</ul>
  }



    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="app" id={theme}>
          <div className='content'>
          {content}
          </div>
            
            {pagination}
            <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        </div>
        
      </ThemeContext.Provider >
       
    )

}

export default App;
