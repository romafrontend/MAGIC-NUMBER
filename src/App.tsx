import {useState, useEffect} from 'react';
// Style
import './App.css';
// Components 
import WidgetsContainer from './components/widgets/WidgetsContainer';
import DetailsContainer from './components/details/DetailsContainer';
// types
export type WidgetType = {
  id: number;
  name: string;
  magicNumber: string;
  keyValuePairs: KeyValuePair[];
}

export type NewWidgetType = {
  name: string;
  magicNumber: string;
  keyValuePairs: KeyValuePair[];
}

export type KeyValuePair = {
  key: number;
  value: string;
}

const App = () => {
  const [widgets, setWidgets] = useState<WidgetType[]>([]);

  useEffect(() => {
    const tempWidgets = [
      {
        id: 111,
        name: 'Stam',
        magicNumber: 'One hundred twenty three',
        keyValuePairs: [
          {key: 1, value: 'One hundred'},
          {key: 2, value: 'twenty'},
          {key: 3, value: 'three'}
        ]   
      }
    ];

    setWidgets(tempWidgets);
  });

  return (
    <div className="main_container">
      <WidgetsContainer />
      <DetailsContainer /> 
    </div>
  );
}

export default App;
