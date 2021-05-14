import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import mypic from './download.jpg';
import Fetchdata from './fetchdatafc';
import reactDom from 'react-dom';
//**********FETCHING DATA IN CLASS COMPONENT*****************//

//*********************using Fetch API in class component*************************

class Compo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [],
      postId: [],
      postdata: [],
      coviddata: [],

    };
  }
  componentDidMount() {

//     //GET 
    const url = 'https://hplussport.com/api/products';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      // //can also be written as
      // .then(response => response.json())

      .then((data) => {
        this.setState({
          news: data
        })  
      })
      // //can also be writte as 
      // .then(data =>  this.setState({ news: data }) )

      .catch((error) => console.log(error));


  //  POST
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example', userId: 12345 })
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data }));

    //GETPOSTED 

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //      this.setState({
    //          postdata : data
    //      })
    //     })




  }  //end of componentDidMount


  render() {
    return (
      <div>

        {/* display the data from API in the form of List item  */}
        {/* <p> GET </p>
        <p>ORIGINAL DATA : {this.state.news.map(originaldata => <li>{originaldata.id} : {originaldata.name}</li>)}</p>
        <p> FILTERING DATA based on id = 429 : {this.state.news.filter(result => result.id == 429).map(filresult => <li>{filresult.name}</li>)}</p>
        <p> FILTERING DATA based on 'water' keyword{this.state.news.filter(result => result.name.includes('Water')).map(filresult => <li>{filresult.name}</li>)}</p>
        */}

        <p> POST </p>
        <p>{this.state.postId.id} : {this.state.postId.title} : {this.state.postId.userId}</p>
        
         
       {/* <p>GET POSTED DATA  : {this.state.postdata.map(postda => <li>{postda.id} : {postda.title} </li>)}</p> */}


   {/* display the data from API in the form of cards*/}
        {/* <h1 style={{ backgroundColor: 'orange', color: 'whitesmoke', textAlign: 'center' }}>List of available items.......</h1>

        <div className='bkcolor'>
          <hr></hr>
          <div className='row' style={{ margin: '10px' }}>{this.state.news.filter(result => result.name.includes('Water')).map(filresult =>

          <div className='col-3'>
            <div className='card'>
                <img className='card-img-top' src={mypic}></img>
                <div className='card-body'></div>
                <h5 className='card-title'>{filresult.name} </h5>
                <p className='card-text'>{filresult.description} </p>
            </div>
          </div>

          )}</div>

        </div> */}




{/* using cards with plain text */}
        {/* <div className ='col s4'>
<div className = 'card'>
  <img className = 'card-img-top' src = {mypic}></img>
<div className = 'card-body'></div>
<h5 className = 'card-title'>CARD TITLE </h5>
<p className = 'card-text'>hi there i am the card text </p>
</div>
</div>


<div className ='col s4'>
<div className = 'card'>
  <img className = 'card-img-top' src = {mypic}></img>
<div className = 'card-body'></div>
<h5 className = 'card-title'>CARD TITLE </h5>
<p className = 'card-text'>hi there i am the card text </p>
</div>
  </div> */}


  </div>


    )

  }


}





// ReactDOM.render(
//   <Compo />,
//   document.getElementById('root')
// )

ReactDOM.render(
  <Fetchdata/>,
  document.getElementById('root')
)



// ReactDOM.render(
//   <Fetchdata/>,
//   document.getElementById('root')
// ) 




