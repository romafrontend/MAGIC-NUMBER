// styles
import './WidgetsContainer.css'
// components
import WidgetItem from './WidgetItem';
// types
import {WidgetType} from '../../shared/types/widget';

type Props = {
    widgets: WidgetType[];
    selectedId: number;
    onDetails: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onCreate: () => void;
}

const WidgetsContainer: React.FC<Props> = ({widgets, selectedId, onDetails, onEdit, onDelete, onCreate}) => {
    return (
        <div className="widgets_wrapper">
          <div>
            <div className="widgets_container">
                {widgets.length > 0 ? (
                    widgets.map((widget) => (
                        <WidgetItem 
                            key={widget.id}
                            selectedId={selectedId}
                            widget={widget} 
                            onDetails={onDetails} 
                            onEdit={onEdit} 
                            onDelete={onDelete} />
                            ))
                ) : (
                    'No Widgegts To Show'
                )} 
            </div>
            <div className="widgets_toolbar">
              <div className="add_button" onClick={onCreate}>
                  <div>Add Widget</div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default WidgetsContainer
