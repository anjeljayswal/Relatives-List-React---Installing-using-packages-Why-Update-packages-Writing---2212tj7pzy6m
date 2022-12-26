import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
             let relatives = ["bhanu", "prashansha", "rashi"];
        return(
        <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
            <div id="main">
               {/* Do not remove the main div */}
            </div>
        );
    }
}


export default App;
