import React, { useState } from "react";
import {
  BsArrowsMove,
  BsFillDashCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import InitTextEditor from "../InitTextEditor/InitTextEditor";
import "./QuestionView.css";
import AddCategory from "../AddCategory/AddCategory";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function QuestionView() {
  const [showEditor, setShowEditor] = useState(false);
  function handleEditorClick() {
    setShowEditor(true);
  }

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-12 p-0">
          <div className="border border-primary blue-view-container">
            <div className="bg-primary text-white p-2 d-flex justify-content-between align-items-center">
              <span>
                <BsArrowsMove className="me-4 mb-1 clickable" size={24} />{" "}
                Question group
              </span>
              <div>
                <BsFillDashCircleFill className="mx-2 mb-1 clickable" />
                <BsFillArrowUpCircleFill className="me-1 mb-1 clickable" />
              </div>
            </div>
            <div className="pdl">
              <p className="mt-4 mb-1 pgr">Question group intro</p>
              <InitTextEditor onEditorClick={handleEditorClick} />
            </div>
            {showEditor && (
              <Editor
                wrapperClassName="wysiwyg"
                editorClassName="editor"
                toolbarClassName="toolbar"
              />
            )}
            <div className="pdl pb-4">
              <AddCategory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionView;
