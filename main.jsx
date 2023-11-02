import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <App />
      {/*       <form>
        <label for="1">First Name: </label>
        <input id="1" placeholder="First Name"/>
      </form> */}
    </div>
  </React.StrictMode>
);
