import {useState, useEffect} from 'react';
// Style
import './App.css';
// Components 
import WidgetsContainer from './components/widgets/WidgetsContainer';
import DetailsContainer from './components/details/DetailsContainer';
import EditPopup from './components/details/DetailsContainer';
import EditWidgetPopup from './components/edit-popup/EditWidgetPopup';
// types
import {WidgetType} from './shared/types/widget';
// services
import {fetchWidgets, deleteWidget, editWidget, saveWidget} from './shared/services/api-service';

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

  // delete widget
  const onDeleteWidget = async (id: number) => {
    await deleteWidget(id);
    setWidgets(widgets.filter((widget) => widget.id !== id));
  }

  const onEditWidget = async (id: number) => {
    const widget = widgets.find(_widget => _widget.id === id);
    setWidgetToEdit(widget);
    setSwitchEditPopup(true);
  }

  const onCreateWidget = async () => {
    const addWidget = {
      name: '',
      magicNumber: 0,
      magicNumberStr: '',
      keyValuePairs: []
    }
    setWidgetToEdit(addWidget);
    setSwitchEditPopup(true);
  }

  const closeEditPopup = () => {
    setSwitchEditPopup(false);
  }

  const submitEditPopup = async (_widgetToUpdate: WidgetType) => {
    console.log(_widgetToUpdate)
    closeEditPopup();
    if(_widgetToUpdate.id) {
      const data = await editWidget(_widgetToUpdate);
      setWidgets(widgets.map(_widget => _widget.id === _widgetToUpdate.id ? data: _widget));
    } else {
      const data = await saveWidget(_widgetToUpdate);
      setWidgets([...widgets, data]);
    }
  }

  return (
    <div className="main_container">
      {selectedWidget && selectedWidget.id ? (
            <WidgetsContainer 
            widgets={widgets} 
            selectedId={selectedWidget.id}
            onDetails={showDetails} 
            onEdit={onEditWidget} 
            onDelete={onDeleteWidget} 
            onCreate={onCreateWidget} />
      ) : ('')}
      {selectedWidget ? (
        <DetailsContainer selectedWidget={selectedWidget} /> 
      ) : ('Widget not selected')}

      {switchEditPopup ? (
        <EditWidgetPopup widgetToEdit={widgetToEdit} onClose={closeEditPopup} onSubmit={submitEditPopup} />
      ) : ('')}
    </div>
  );
}
{/* <EditPopup widgetToEdit={widgetToEdit} isOpenPopup={switchEditPopup} onClose={closeEditPopup} onSubmit={submitEditPopup} /> */}
export default App;
