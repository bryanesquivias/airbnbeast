import { de } from 'date-fns/locale';
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'


function displayResults(result){
  let results ='';
  const container = document.querySelector('demo');
    for(let i = 0; i < 13 ;i++){
       results =
            /*  <SearchResult
       img = 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'
        city = {result[i+2]}
        roomType = {result[i+1]} 
        price = {result[i]}  />;
        const newDiv = document.createElement('div');
        console.log('adddddd');
        console.log(results);
        container.appendChild(newDiv);*/
        results += '<div>HHHHHHH</div>';
        container.appendChild(results);
    }
    
}
function SearchPage() {
  function displayResults(result){
    let results ='';
    const container = document.querySelector('demo');
      for(let i = 0; i < 13 ;i++){
         let results = document.createElemenr('div')
              /*  <SearchResult
         img = 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'
          city = {result[i+2]}
          roomType = {result[i+1]} 
          price = {result[i]}  />;
          const newDiv = document.createElement('div');
          console.log('adddddd');
          console.log(results);
          container.appendChild(newDiv);*/
          results += '<div>${i}HELO</div>';
          container.appendChild(results);
      }
      
  }
  const arr = ["$100","Single","Willy","$100","Single","Willy"];
  <body onload = 'displayResults(arr)'></body>;
  return (
    <div className='searchPage' >
        <div className='searchPage__info'>
            <h1>Matches</h1>
            {/*<button>Cancellation Flexibility</button>
            <button>Type</button>
            <button>Price</button>
            <button>Rooms and beds</button>
            <button>More filters</button>*/}
  </div> <script>displayResults(arr)</script>
  <div id = 'demo'>
           
  </div>
        
    </div>
    
  )
}

export default SearchPage