import { useState , useRef} from "react";

export default function Player() {
  const refName = useRef();
  const [initialName, setName] = useState(null); 

  function clickButton(){
    setName(refName.current.value);
    refName.current.value = '';
  }


  return (
    <section id="player">
      <h2>Welcome { initialName ?? "unknow entity"}</h2>
      <p>
        <input type="text" ref={refName} />
        <button onClick={clickButton} >Set Name</button>
      </p>
    </section>
  );
}
