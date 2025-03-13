import './App.css';

const title = "SUBSCRIBE"
const par = "Sign up with your email address to receive news and updates"

const Hero = (
  <div>
    <h1>{title}</h1>
    <p>{par}</p>
  </div>
)

const Form = (
  <div>
    <input placeholder='First name'></input>
    <input placeholder='Last name'></input>
    <input placeholder='Email'></input>
  </div>
)

const SubmitButton = (
  <div>
    <button>Subscribe</button>
  </div>
)

const user = {
  firstName: "Giuseppe",
  lastName: "Cifarelli",
  work: "FullStack Developer",
  from: "Italia",
  skills: ["HTML","CSS","JS","TS","Angular","React","C#",".NET","SQL Server","Windev"],
  joinDate: "01/01/2023"
}

const skillsFormatted = user.skills.map(skill => <p className='skills'>{skill}</p>)

const userCard = (
  <div>
    <div>
      <img src='logo192.png' alt='logo'></img>
    </div>
    <div>
        {user.firstName} {user.lastName}
    </div>
    <div>
      {user.work}, {user.from}
    </div>
    <p>SKILLS</p>
    <div className='skillContainer'>
      {skillsFormatted}
    </div>
    <div>
      {user.joinDate}
    </div>
  </div>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Hero}
        {Form}
        {SubmitButton}
        {userCard}
      </header>
    </div>
  );
}

export default App;
