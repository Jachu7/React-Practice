import { useState } from "react";

import AddQuestionGroup from "./components/AddQuestionGroup/AddQuestionGroup";
import AddCategory from "./components/AddCategory/AddCategory";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import InitTextEditor from "./components/InitTextEditor/InitTextEditor";
import QuestionView from "./components/QuestionView/QuestionView";

function App() {
  return (
    <>
      <div className="border border-danger p-4 d-flex justify-content-center">
        <AddQuestionGroup />
        <AddCategory />
        <AddQuestion />
        <InitTextEditor />
      </div>
      <QuestionView />
    </>
  );
}

export default App;
