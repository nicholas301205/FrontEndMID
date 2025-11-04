//Komponen adalah fungsi yang return JSX
import { useState } from "react";
import HelloWorld from "./HelloWorld";

const App = () => {
  // let hello = "Hello World"; //Deklarasi variabel biasa
  const [hello, setHello] = useState("Hello World !!!"); //Deklarasi variable state

  const handleClick = () => {
    console.log("Button di klik");
    // hello = "Selamat Datang"; //Cara merubah variabel biasa
    setHello("Selamat Datang"); //Cara merubah variabel state

    // console.log(hello);
  };

  return (
    <>
      <div className="text-[25px] bg-blue-500 m-10 p-10 font-serif">
        {hello}
      </div>
      <HelloWorld text="Ini adalah Hello World 1" handleClick={handleClick} />
      <HelloWorld text="Ini adalah Hello World 2" />
      <button
        className="bg-blue-500 hover:bg-blue-700 py-4 px-4 rounded-2xl text-white"
        onClick={handleClick}
      >
        Click Me
      </button>
    </>
  );
};

export default App;
