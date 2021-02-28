// Styles
import './Widget.css'; 
// Types
import {WidgetType} from '../../shared/types/widget';
type Props = {
    widget: WidgetType;
    onAdd: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const Widget: React.FC<Props> = ({widget, onAdd, onEdit, onDelete}) => {
    return (
        <div className="widget_container">
            dfsd
        </div>
    )
}

export default Widget
