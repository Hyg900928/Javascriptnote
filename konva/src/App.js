import React from 'react';
// import KonvaComponent from "./Components/KonvaComponent";
// import Collision from "./Components/Collision";
// import Test from "./Components/Test";
// import UseEffectDemo from "./Components/Hooks/UseEffectDemo";
// import QuillEditor from './Components/QuillEditor';
import ScrollCanvas from './Components/konva/ScrollCanvas'
import TransformerComponent from "./Components/TransformerComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <TransformerComponent />
      </div>
    );
  }
}

export default App;
