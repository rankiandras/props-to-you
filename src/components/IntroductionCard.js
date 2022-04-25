function IntroductionCard(props) {
    const name = props.name;
    const school = props.school;
    const age = props.age;
    const hobbyList = props.hobbyList;
    const hairColor = props.hairColor;
    const favoriteDrink = props.favoriteDrink;
    const numberOfPets = props.numberOfPets;


    let content = 
    <div className="introduction">
        <p className="introduction__text">Hello, my name is { name }. I am a student at { school }, and this is my very short introduction. I'm { age } years old, and my hobbies are { hobbyList.join(", ") }.<br/>My hair is { hairColor }.<br/> My favorite drink is {favoriteDrink}.<br/>I have { numberOfPets } pets.</p>
    </div>;

    return content;
}

export default IntroductionCard;