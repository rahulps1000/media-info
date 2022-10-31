import "./App.css";
import image from "./assets/multimedia.png";
import { useDropzone } from "react-dropzone";
import { getInfo } from "react-mediainfo";
import { useState } from "react";
import JsonDataTable from "./components/table";

function App() {
  const [file_info, setFile_info] = useState(null);
  const onDrop = async (files) => {
    const info = await getInfo(files[0]);
    setFile_info(info.media.track);
  };

  var classname = "media-container";

  if (file_info !== null) {
    classname = "media-container small";
  }

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [],
      "video/*": [],
      "audio/*": [],
    },
    onDrop,
  });

  return (
    <div className="App">
      <div className="header">Media Info</div>
      <div {...getRootProps({ className: classname })}>
        <img src={image} alt="multimedia" />
        Drag 'n' drop some file here, or click to select file
        <input {...getInputProps()} />
      </div>
      <JsonDataTable data={file_info} />
      <div className="footer">
        Made with ❤️ by <a href="https://github.com/rahulps1000">Rahul</a>
      </div>
    </div>
  );
}

export default App;
