import './App.css'
import React from 'react'
import ReactConcept from './components/ReactConcept'
import data from './init-data'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    /*<div>
       <ReactConcept title={data[0].title} description={data[0].description}/>
       <ReactConcept title={data[1].title} description={data[1].description}/>
       <ReactConcept title={data[2].title} description={data[2].description}/>
       <ReactConcept title={data[3].title} description={data[3].description}/>
     </div>*/

    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-6" key={index}>
            <ReactConcept>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <img src={item.image} alt={item.title} className="img-fluid"/>
            </ReactConcept>
          </div>
        ))}
      </div>
    </div>
  )
} 

export default App
