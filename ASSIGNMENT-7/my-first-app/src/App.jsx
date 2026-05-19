import Header from "./components/Header";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div>
      <Header title="📋 Student App" />

      <StudentCard name="Rishabh" marks={92} />
      <StudentCard name="Supriya" marks={78} />
      <StudentCard name="Paul" marks={85} />
    </div>
  );
}

export default App;