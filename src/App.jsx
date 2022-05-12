import MyNewComponent from './components/MyNewComponent'
import PersonCard from './components/PersonCard'

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a Marathon</li>
        <li>Feed the Dogs</li>
      </ul>
      <MyNewComponent helloWorld={"Hello World"} />
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </>
  );
}

export default App;
