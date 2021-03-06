import  './DetailsContainer.css';

// Types 
import {WidgetType} from '../../shared/types/widget';
type Props = {
  selectedWidget: WidgetType;
}

const DetailsContainer: React.FC<Props> = ({selectedWidget}) => {
    return (
      <div className="details_container">
        <div>
          <div className="details_title">
            <div>{selectedWidget.name}</div>
          </div>
          <div className="magic_number">
            <div>{selectedWidget.magicNumberStr}</div>
          </div>
        </div>
      </div>
    )
}

export default DetailsContainer
