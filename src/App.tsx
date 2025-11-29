import BorderText from "./components/BorderText";
import { useState } from "react";

function App() {
  const textList = ["Bli medlem du også!", "Skriv e-posten din inn nedenfor"];
  const [showText, setShowText] = useState<boolean>(false);
  const buttonClick = () => {
    setShowText(!showText);
  };

  return (
    <>
      <h1>Johannas nettside</h1>
      <img className="img-style" src="./bilde.JPG" alt="View from a dock" />
      {textList.map((text) => (
        <BorderText borderText={text} />
      ))}
      <p></p>
      <button onClick={buttonClick}>Trykk her!</button>
      {showText && <p>Nei, lenger ned</p>}
      <p>{showText ? "Tull!" : "haha"}</p>
    </>
  );
}

export default App;
