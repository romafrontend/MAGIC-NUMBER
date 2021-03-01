// styles
import './WidgetsContainer.css'
// components
import Widget from './Widget';
// types
import {WidgetType} from '../../shared/types/widget';

type Props = {
    widgets: WidgetType[];
    selectedId: number;
    onDetails: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const WidgetsContainer: React.FC<Props> = ({widgets, selectedId, onDetails, onEdit, onDelete}) => {
    return (
        <div className="widgets_wrapper">
          <div>
            <div className="widgets_container">
                {widgets.length > 0 ? (
                    widgets.map((widget) => (
                        <Widget 
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
              <div>
                  <div>Add</div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default WidgetsContainer
