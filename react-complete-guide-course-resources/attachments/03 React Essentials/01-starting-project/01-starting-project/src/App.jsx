import { useState } from 'react';
import componentImg from './assets/components.png';

import Header from './components/Header';
import TabButton from './components/TabButton';


const CoreConcepts = (props) => {
  return (
    <li>
      <img src={props.image} alt='...'/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button')
  
  const handleClick = (selectedButton) => {
        setSelectedTopic(`${selectedButton} clicked`)
    }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts 
              title='Components'
              description= 'The core UI building block'
              image={componentImg} 
            />
            <CoreConcepts 
              title='Components'
              description= 'The core UI building block'
              image={componentImg} 
            />
            <CoreConcepts 
              title='Components'
              description= 'The core UI building block'
              image={componentImg} 
            />
            <CoreConcepts 
              title='Components'
              description= 'The core UI building block'
              image={componentImg} 
            />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <TabButton onClick={() => handleClick('components')}>Components</TabButton>
          { selectedTopic }
        </section>
      </main>
    </div>
  );
}

export default App;
