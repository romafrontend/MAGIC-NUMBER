import {useState, useEffect} from 'react';
// material-ui
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@material-ui/core';
// Styles 
import './EditPopup.css';
// Types
import {WidgetType, KeyValuePair} from '../../shared/types/widget';
type Props = {
  widget: WidgetType | undefined;
  open: boolean;
  onClose: () => void;
  onSave: (widget: WidgetType) => void;
}

const EditPopup: React.FC<Props> = ({widget, open, onClose, onSave}) => {   
    const [name, setName] = useState('');
    const [magicNumber, setMagicNumber] = useState<number | undefined>();
    const [keyValuePairs, setKeyValuePairs] = useState<KeyValuePair[]>([]);
    
    useEffect(() => {
        const initPopup = () => {
            if(widget && widget.id) {
                setName(widget.name);
                setMagicNumber(widget.magicNumber);
                setKeyValuePairs(widget.keyValuePairs);
            
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
       setKeyValuePairs(keyValrr);
      } else {
        setKeyValuePairs([]);
      }
    }


    const handleMagicNumberInputChange = (num: any) => {
        const magicNumStrArr = num.toString().split('.')[0];
        buildKeyValuePairs(magicNumStrArr)
    }

    const onSubmit = () => {
        let magicNumberStr = '';
        keyValuePairs.map(pair => {
            magicNumberStr += pair.value + ' ';
        });
        const widgetId = widget?.id ? Number(widget.id) : 0;
        const updatedWidget = {id: widgetId, name: name, magicNumber: Number(magicNumber), magicNumberStr: magicNumberStr, keyValuePairs: keyValuePairs};
        onSave(updatedWidget);
    }

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{widget && widget.id ? 'Edit widget' : 'Create widget'}</DialogTitle>
            <DialogContent>
               <div className='form-control'>
                    <label>Name</label>
                    <input type='text' name="name" value={name} 
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Magic number</label>
                    <input type="number" name="magicNumber" value={magicNumber}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                setMagicNumber(Number(e.target.value)); 
                                                handleMagicNumberInputChange(e.target.value)
                                            }} />
                </div>

                {keyValuePairs.map((pair, index) => (
                    <div className='form-control' key={index}>
                        <label>{pair.key}</label>
                        <input type="text"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                keyValuePairs[index].value = e.target.value;
                                setKeyValuePairs(keyValuePairs);
                            }} />
                    </div>
                ))}

            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()} color="primary">
                    Cancel
                </Button>
                <Button type='submit' onClick={() => onSubmit()} color="primary">
                    Save
                </Button>
            </DialogActions>
      </Dialog>
    )
}

export default EditPopup