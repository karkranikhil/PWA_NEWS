import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import MediaCard from './MediaCard'
import Grid from '@material-ui/core/Grid';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-18&sortBy=publishedAt&apiKey=b84166fa08d94634a8f0b29d5314afba').then(function(response) { 
      return response.json();
    }).then(function(result) {
      console.log(result)
      setData(result.articles);
    });
  },[]);
const getNewsCard=()=>(
  data? data.map((item, index)=>(
  <Grid item xs={12} sm={3} key={index}>
      <MediaCard data={item}/>
   </Grid>
  )):null
 )
  return (
    <div className="App">
    <Navbar/>
    <Grid container spacing={24} className="padding20Px">
        {getNewsCard()}
      </Grid>
    </div>
  );
}

export default App;
