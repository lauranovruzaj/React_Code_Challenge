import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Pagination = (props) => {

    let linkUrl, page;

    return (

        <ul className="pagination">{props.links.map((link, index) => 
            {  if (link.url == null) {
                    page= 1;
                   
                } else {
                    linkUrl = new URL(link.url);
                    page = linkUrl.searchParams.get("page")
                }
                
                return <li key={index} className={`item item-${link.label} ${link.active==true ? 'active':''}`}><Link to={`/facts/page/${page}`} >{link.label}</Link></li>}
        
            )}</ul>

         
    
    )
}

export default Pagination;