import {useState, useEffect} from 'react';
// Style
import './App.css';
// Components 
import WidgetsContainer from './components/widgets/WidgetsContainer';
import DetailsContainer from './components/details/DetailsContainer';
// types
import {WidgetType} from './shared/types/widget';

// services
import {fetchWidgets} from './shared/services/api-service';


const App = () => {
  const [widgets, setWidgets] = useState<WidgetType[]>([]);

  useEffect(() => {
    const getWidgets = async () => {
      const widgets = await fetchWidgets();
      setWidgets(widgets);
    }

    getWidgets();
  }, []);

  const addWidget = async (id: number) => {
    console.log(id);
  }

  const editWidget = async (id: number) => {

  }

  const deleteWidget = async (id: number) => {

  }

  return (
    <div className="main_container">
      <WidgetsContainer 
          widgets={widgets} 
          onAdd={addWidget} 
          onEdit={editWidget} 
          onDelete={deleteWidget} />
      <DetailsContainer /> 
    </div>
  );
}

export default App;
