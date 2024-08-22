import React from 'react';
// import KonvaComponent from "./Components/KonvaComponent";
// import Collision from "./Components/Collision";
// import Test from "./Components/Test";
// import UseEffectDemo from "./Components/Hooks/UseEffectDemo";
// import QuillEditor from './Components/QuillEditor';
import ScrollCanvas from './Components/konva/ScrollCanvas'
// import TransformerComponent from "./Components/TransformerComponent";
// import Progress from "./Components/Progress";
// import GuideLine from "./Components/GuideLine";
import ScratchCard from './Components/ScratchCard';
class App extends React.Component {
  render() {
    return (
      <div>
        <ScratchCard width={500} height={800} />
      </div>
    );
  }
}

export default App;
