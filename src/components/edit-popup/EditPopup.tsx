import {useState, useEffect} from 'react';
// material-ui
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@material-ui/core';
// Styles 
import './EditPopup.css';
// Types
import {WidgetType, KeyValuePair} from '../../shared/types/widget';
type Props = {
    widgetToEdit: WidgetType;
    isOpenPopup: boolean;
    onClose: () => void;
    onSubmit: (widget: WidgetType) => void;
}

const EditPopup: React.FC<Props> = ({widgetToEdit, isOpenPopup, onClose, onSubmit}) => {   
    const {name, magicNumber, magicNumberStr, keyValuePairs, id} = widgetToEdit || {};

    const [widgetName, setWidgetName] = useState('');
    const [widgetMagicNumber, setWidgetMagicNumber] = useState<number>(0);
    const [widgetKeyValuePairs, setWuidgetKeyValuePairs] = useState<KeyValuePair[]>([]);
    
    useEffect(() => { 
        const initPopup = () => {
            if(widgetToEdit && widgetToEdit.id) {
                setWidgetName(name);
                setWidgetMagicNumber(magicNumber);
                setWuidgetKeyValuePairs(keyValuePairs);
            
            //     const count = widget.magicNumber.toString().split('.')[0].length || 0;
            //     buildKeyValuePairs(count)
            } else {
              
            }
        
        }

        initPopup();
    }, []);

    const buildKeyValuePairs = (magicNumStrArr: any) => {
      if(magicNumStrArr.length > 0) {
       const keyValrr = [];
       for(let i = 0; i < magicNumStrArr.length; i++) {
         const newPair = {key: magicNumStrArr[i], value: ''}
         keyValrr.push(newPair);
       }
       setWuidgetKeyValuePairs(keyValrr);
      } else {
        setWuidgetKeyValuePairs([]);
      }
    }


    const handleMagicNumberInputChange = (num: any) => {
        const magicNumStrArr = num.toString().split('.')[0];
        buildKeyValuePairs(magicNumStrArr)
    }

    const onSubmitForm = () => {
        let magicNumberStr = '';
        keyValuePairs.map(pair => {
            magicNumberStr += pair.value + ' ';
        });
        const widgetId = id ? id : 0;
        const updatedWidget = {name: name, magicNumber: magicNumber, magicNumberStr: magicNumberStr, keyValuePairs: keyValuePairs, id: widgetId};
        
        setWidgetName('');
        setWidgetMagicNumber(0);

        onSubmit(updatedWidget);
    }

    return (
        <Dialog open={true} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{widgetToEdit && widgetToEdit.id ? 'Edit widget' : 'Create widget'}</DialogTitle>
            <DialogContent>
               <form>
               <div className='form-control'>
                    <label>Name</label>
                    <input type='text' name="name" value={widgetName} 
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWidgetName(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Magic number</label>
                    <input type="number" name="widgetMagicNumber" value={widgetMagicNumber}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                setWidgetMagicNumber(Number(e.target.value)); 
                                                handleMagicNumberInputChange(e.target.value)
                                            }} />
                </div>

                {widgetKeyValuePairs.map((pair, index) => (
                    <div className='form-control' key={index}>
                                  <input type="text"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                widgetKeyValuePairs[index].value = e.target.value;
                                setWuidgetKeyValuePairs(widgetKeyValuePairs);
                            }} />
                    </div>
                ))}
               </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()} color="primary">
                    Cancel
                </Button>
                <Button type='submit' onClick={() => onSubmitForm()} color="primary">
                    Save
                </Button>
            </DialogActions>
      </Dialog>
    )
}

export default EditPopup