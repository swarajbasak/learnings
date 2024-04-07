import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max+1));
}

const Header = () => {

  const descriptions = reactDescriptions[getRandomInt(2)]

  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descriptions} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
  )
}

export default Header;