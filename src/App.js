import ToDo from "./components/ToDo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My ToDos</h1>
      <ToDo text="Explore"></ToDo>
      <ToDo text="Observe"></ToDo>
      <ToDo text="Master"></ToDo>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
