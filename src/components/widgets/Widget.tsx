import {BiDetail} from 'react-icons/bi';
import {FaRegEdit} from 'react-icons/fa';
import {RiDeleteBin2Line} from 'react-icons/ri';
// Styles
import './Widget.css'; 
// Types
import {WidgetType} from '../../shared/types/widget';
type Props = {
    widget: WidgetType;
    selectedId: number;
    onDetails: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const Widget: React.FC<Props> = ({widget, selectedId, onDetails, onEdit, onDelete}) => {
    return (
        <div className={`widget_container ${selectedId === widget.id ? "selected_widget" : ""}`}>
            <div className="widget_title">
                <div>{widget.name}</div>
            </div>
            <div className="widget_toolbar">
              <div>
                <div className="toolbar_button" 
                  title="Show details"
                  onClick={() => onDetails(widget.id)}>
                    <BiDetail />
                </div>
                <div className="toolbar_button"
                  title="Edit widget"
                  onClick={() => onEdit(widget.id)}>
                    <FaRegEdit />
                </div>
                <div className="toolbar_button"
                  title="Delete widget"
                  onClick={() => onDelete(widget.id)}>
                    <RiDeleteBin2Line />
                </div>
              </div>
            </div>
        </div>
    )
}

export default Widget
