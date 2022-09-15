import React, { useEffect, useState, createContext } from 'react';
import { useParams } from 'react-router-dom';
import ReactSwitch from "react-switch";

import axios from 'axios';

import PageContent from './PageContent';
import Pagination from './Pagination';


export const ThemeContext = createContext(null);

const Facts = () => {

    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    
    let { id } = useParams();
    const factUrl = id != undefined ? `https://catfact.ninja/facts?page=${id}` :  "https://catfact.ninja/facts?page=1"

    const [factsData, setFactsData] = useState();
    const [factsLinks, setFactsLinks] = useState();

    let content = null;
    let pagination = null;

  

  useEffect(() => {
    axios.get(factUrl)
        .then(response => {
          setFactsData(response.data.data);
          setFactsLinks(response.data.links);
        })   
  },[factUrl])


const removeFact = (key) => {
    const result = factsData.filter((element, index) => index != key);
    setFactsData(result);
}

if (factsData) {
    content = <ul className="pageContent">{factsData.map( (fact, index) => 
        <PageContent fact={fact.fact} index={index} deleteFact={removeFact}/>
    )}</ul>
  }

  if (factsLinks) {
    pagination = <Pagination links={factsLinks}/>
  }

 
  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="facts" id={theme}>
        {content}
        {pagination}
            <div className="switch">
                <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
        </div>
    </ThemeContext.Provider>
  );

}

export default Facts;