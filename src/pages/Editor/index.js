import { useState } from "react";

import QuillEditor from "react-quill";

import "react-quill/dist/quill.snow.css";

const Editor = () => {
  // Editor state
  const [value, setValue] = useState("");

  /* This is just a temporary page */
  return (
    <div>
      <label>Editor Content</label>
      <QuillEditor
        theme="snow"
        value={value}
        onChange={(value) => setValue(value)}
      />
      <div>Content Below!</div>
      <div>{value}</div>
    </div>
  );
};

export default Editor;