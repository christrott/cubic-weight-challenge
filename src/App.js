import React from 'react';
import './App.css';
import ProcessProducts from './components/ProcessProducts.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Challenge - Average Cubic Weight</h1>
        <p>Please click the Process button below to begin calculating the product average cubic weight</p>
        <ProcessProducts baseUrl="http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com" startUrl="/api/products/1" />
      </header>
    </div>
  );
}

export default App;
