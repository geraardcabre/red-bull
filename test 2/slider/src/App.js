import React from 'react';
import Card from './Card';

function App() {
    return (
        <div className="app-container">
            <h1 className="title">Oracle In Practice</h1>
              <div className="card-container">
                <Card 
                  text="Oracle Virtual Lap In Monza" 
                  icon="/play.png" 
                  label="Virtual Lap" 
                  minutes="6 min read"
                  image="bg-card-1.png"
                  link="https://www.redbullracing.com/int-en"
                />
                
                <Card 
                  text="Oracle Strategy Guide"
                  icon="/play.png" 
                  label="Oracle Strategy Guide" 
                  minutes="4 min" 
                  image="bg-card-2.png"
                  link="https://www.redbullracing.com/int-en"
                />

                <Card 
                  text="Oracle Cloud Telemetry Data Checo"
                  icon="/infographic.png" 
                  label="Data" 
                  minutes="3 min read" 
                  image="bg-card-3.png"
                  link="https://www.redbullracing.com/int-en"
                />    
            </div>
        </div>
    );
}

export default App;