import MainTask from "./MainTask";
import PositionOfTask from "./PositionOfTask";

export default function TaskManager() {
  return (
    <div className="main-wrapper">
      <PositionOfTask />
      <MainTask />
    </div>
  );
}
