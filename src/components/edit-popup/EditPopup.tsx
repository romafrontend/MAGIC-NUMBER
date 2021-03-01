import {useState} from 'react';
// material-ui
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@material-ui/core';
// Types
import {WidgetType} from '../../shared/types/widget';
type Props = {
  widget: WidgetType;
  open: boolean;
  onClose: () => void;
  onSave: (widget: WidgetType) => void;
}

const EditPopup: React.FC<Props> = ({widget, open, onClose, onSave}) => {
    const [name, setName] = useState('');
    
    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
         xxxxxxxxxxx
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()} color="primary">
            Cancel
          </Button>
          <Button onClick={() => onClose()} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default EditPopup