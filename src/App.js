import React from 'react';
import './style.css';
import Tabs from './components/Tabs';
import NewTabs from './components/NewTabs';
import NewTab from './components/NewTab';

export default function App() {
  return (
    <div>
      <h1>Tabs demo</h1>
      <NewTabs>
        <NewTab label="Gator">
          See ya later, <em>Alligator!</em>
        </NewTab>
        <NewTab label="Croc">
          See ya later, <em>Crocodile!</em>
        </NewTab>
        <NewTab label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </NewTab>
      </NewTabs>
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
}
