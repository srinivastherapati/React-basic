import reactImg from "../assets/react-core-concepts.png"
const readDymanic=["Fundamental","Core","Crucial"];
function generateRan(num){
  return Math.floor(Math.random() * (num+1))
}

export default function Header(){
 return ( <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {readDymanic[generateRan(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
 );
}