import {useState, useEffect} from 'react';
// Style
import './App.css';
// Components 
import WidgetsContainer from './components/widgets/WidgetsContainer';
import DetailsContainer from './components/details/DetailsContainer';
import EditPopup from './components/edit-popup/EditPopup';
// types
import {WidgetType} from './shared/types/widget';
// services
import {fetchWidgets, deleteWidgetById} from './shared/services/api-service';

const App = () => {
  const [widgets, setWidgets] = useState<WidgetType[]>([]);
  const [selectedWidget, setSelectedWidget] = useState<WidgetType>();
  const [widgetToEdit, setWidgetToEdit] = useState<WidgetType>();
  const [switchEditPopup, setSwitchEditPopup] = useState<boolean>(false);

  useEffect(() => {
    const getWidgets = async () => {
      const widgets = await fetchWidgets();
      setWidgets(widgets);
      setSelectedWidget(widgets[0]);
    }

    getWidgets();
  }, []);

  const showDetails = async (id: number) => {
    const widget = widgets.find(_widget => _widget.id === id);
    setSelectedWidget(widget);
  }

  const editWidget = async (id: number) => {
    const widget = widgets.find(_widget => _widget.id === id);
    setWidgetToEdit(widget);
    setSwitchEditPopup(true);
  }

  // delete widget
  const deleteWidget = async (id: number) => {
    await deleteWidgetById(id);
    setWidgets(widgets.filter((widget) => widget.id !== id));
  }

  const closeEditPopup = () => {
    setSwitchEditPopup(false);
  }

  return (
    <div className="main_container">
      <WidgetsContainer 
          widgets={widgets} 
          selectedId={selectedWidget ? selectedWidget.id : 0}
          onDetails={showDetails} 
          onEdit={editWidget} 
          onDelete={deleteWidget} />
      {selectedWidget ? (
        <DetailsContainer selectedWidget={selectedWidget} /> 
      ) : ('Widget not selected')}

      {widgetToEdit ? (
        <EditPopup widget={widgetToEdit} open={switchEditPopup} onClose={closeEditPopup} onSave={closeEditPopup} />
      ) : ('')}
    </div>
  );
}

export default App;
