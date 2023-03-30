import "./InitTextEditor.css";
import { BsFillCaretRightFill } from "react-icons/bs";

function InitTextEditor() {
  return (
    <button className="btn btn-dark BlackBtn">
      Init Text Editor
      <BsFillCaretRightFill className="ArrowIcon" />
    </button>
  );
}

export default InitTextEditor;
