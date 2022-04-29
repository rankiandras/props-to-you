import './App.css';

import Header from'./components/Header'
import IntroductionCard from './components/IntroductionCard';
/* import Footer from './components/Footer'; */
// import Footer2 from './components/Footer2';
import Footer3 from './components/Footer2';

function App() {
  const logoName = "This is the new logo name"

  const name = "Andras";
  const school = "CodeCool";
  const age = "40";
  const hobbyList = ["Playing Piano", "Fishing"];
  const hairColor = 'brown';
  const favoriteDrink = 'water';
  const numberOfPets = 3;
  
  const name2 = "Helga";
  const school2 = "CodeCool";
  const age2 = "99";
  const hobbyList2 = ["cooking", "swimming"];
  const hairColor2 = 'white';
  const favoriteDrink2 = 'ginger ale';
  const numberOfPets2 = 5;

  // const className1 = 'footer'


  const date = Date().slice(0, 15).split(' ').reverse().join('-')
  return (
    <div className="App">
      <Header logo={logoName}/>
      <IntroductionCard name={name} school={school} age={age} hobbyList={hobbyList} hairColor={hairColor} favoriteDrink={favoriteDrink} numberOfPets={numberOfPets}/>
      <IntroductionCard name={name2} school={school2} age={age2} hobbyList={hobbyList2} hairColor={hairColor2} favoriteDrink={favoriteDrink2} numberOfPets={numberOfPets2}/>
      {/* <Footer date={date} /> */}
      {/* <Footer2 date={date}/> */}
      <Footer3 date={date}/>
    </div>
  );
}

export default App;
