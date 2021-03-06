import {useState, useEffect} from 'react';
// material-ui
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@material-ui/core';
// Styles 
import './EditPopup.css';
// Types
import {WidgetType, KeyValuePair} from '../../shared/types/widget';
type Props = {
    widgetToEdit: WidgetType | undefined;
    onClose: () => void;
    onSubmit: (widget: WidgetType) => void;
}


const EditWidgetPopup: React.FC<Props> = ({widgetToEdit, onClose, onSubmit}) => {
    const {name = '', magicNumber = 0, magicNumberStr = '', keyValuePairs = [], id = 0} = widgetToEdit || {};

    const [widgetName, setWidgetName] = useState('');
    const [widgetMagicNumber, setWidgetMagicNumber] = useState<number>(0);
    const [widgetKeyValuePairs, setWidgetKeyValuePairs] = useState<KeyValuePair[]>([]);
    
    useEffect(() => { 
        const initPopup = () => {
            if(id > 0) {
                setWidgetName(name);
                setWidgetMagicNumber(magicNumber);
                setWidgetKeyValuePairs(keyValuePairs);
            } else {
              const tempCount = 5;
              const tempKeyValuePair = {key: 0, value: ''};
              const tempWidgetKeyValuePairs: KeyValuePair[] = [];
              for(let i = 0; i < tempCount; i++) {
                tempWidgetKeyValuePairs.push(tempKeyValuePair);
              }
              setWidgetKeyValuePairs(tempWidgetKeyValuePairs);
            }
        
        }

        initPopup();
    }, []);

    const buildKeyValuePairs = (magicNumStrArr: any) => {
      if(magicNumStrArr > 0) {
       const keyValArr = [];
       for(let i = 0; i < magicNumStrArr.length; i++) {
         const newPair = {key: magicNumStrArr[i], value: ''}
         keyValArr.push(newPair);
       }
       setWidgetKeyValuePairs(keyValArr);
      } else {
        setWidgetKeyValuePairs([]);
      }
    }

    const handleMagicNumber = (num: number) => { 
        const tempNum = num.toString().replace(/^0+/, '');
        setWidgetMagicNumber(Number(tempNum));
        const magicNumStrArr = num.toString().split('.')[0];
        buildKeyValuePairs(magicNumStrArr)
    }

    const handleKeyValuePairs = (_index: number, _value: string) => {
        widgetKeyValuePairs[_index].value = _value;
        setWidgetKeyValuePairs(widgetKeyValuePairs);
    } 

    const onSubmitForm = () => {
        if(widgetName !== '' && magicNumber > 0) {
            let magicNumberStr = '';
            keyValuePairs.map(pair => {
                magicNumberStr += pair.value + ' ';
            });
            const widgetId = id ? id : 0;
            const updatedMagicNumber = widgetMagicNumber && widgetMagicNumber > 0 ? widgetMagicNumber : 0;
            const updatedWidget = {name: widgetName, magicNumber: updatedMagicNumber, magicNumberStr: magicNumberStr, keyValuePairs: widgetKeyValuePairs, id: widgetId};
            
            setWidgetName('');
            setWidgetMagicNumber(0);
            setWidgetKeyValuePairs([]);
    
            onSubmit(updatedWidget);
        }
    }

    return (
        <Dialog open={true} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{id > 0? 'Edit widget' : 'Create widget'}</DialogTitle>
            <DialogContent>
               <form>
               <div className='form-control'>
                    <label>Name</label>
                    <input type='text' name="widgetName" value={widgetName} 
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWidgetName(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Magic number</label>
                    <input type="number" name="magicNumber" value={widgetMagicNumber}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                handleMagicNumber(Number(e.target.value))
                                            }} />
                </div>

                {widgetKeyValuePairs.map((pair, index) => (
                    <div className='form-control' key={index}>
                        <label>Key:&nbsp;{pair.key}&nbsp;&nbsp;Value:&nbsp;{pair.value}</label>
                                  <input type="text"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                handleKeyValuePairs(index, e.target.value)
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

export default EditWidgetPopup
