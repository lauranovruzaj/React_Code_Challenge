import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Pagination = (props) => {
  

  const changeUrl = () => {
   props.changeUrl(props.url)
  } 

    return (
        
          <li><button onClick={changeUrl}>{props.label}</button></li>
        
    )

}

export default Pagination;