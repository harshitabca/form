import "./styles.css";
import Display from "./Display";
import Event from "./eventlistener";
import Example from "./states";
import NotesApp from "./notes.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Students</h1>
      <h2>Props Function Example in React</h2>
      <div className="list1">
        <div className="list2">
          <div className="dis1">
            <Display name="Harshita" class="BCA 2" />
            <Display name="Pooja" class="BCA 2" />
            <Display name="Preet" class="BCA 2" />
          </div>
          <div className="dis2">
            <Display name="Lajja" class="BCA 2" />
            <Display name="Bhavesh" class="BCA 2" />
            <Display name="Rehan" class="BCA 2" />
          </div>
        </div>
        <div className="dis3">
          <Display name="Karan" class="BCA 2" />
        </div>
      </div>
      <Event />
      <Example />
      <NotesApp />
    </div>
  );
}
