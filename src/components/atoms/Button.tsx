import React, {useMemo, useState} from 'react'
import { useDispatch } from 'react-redux';
import { ProductDispatch, useAppSelector } from '../../store';
import { addSelect, removeSelect } from '../../store/feature/anketSlice';
interface IButton{
    name: string
}
function Button(props: IButton) {
    const dispatch = useDispatch<ProductDispatch>();
    const isLimit = useAppSelector(state=>state.anket.isLimit);
    const name = props.name;
    const [isChecked, setisChecked] = useState(false);
    const butonaTikladin = ()=>{
        if(isChecked)
            dispatch(removeSelect());
        else
            dispatch(addSelect());

        setisChecked(!isChecked);
    }
    console.log('button render oldu....: ', name);
  return (
    <div className='col-2 m-1 p-3 shadow rounded-3 d-grid'>
        <input 
            disabled= {isLimit && !isChecked}
            type="button" 
            value={name} 
            className={isChecked ? 'btn btn-primary' : 'btn btn-outline-success'}
            onClick={butonaTikladin}
            />
    </div>
  )
}

export default React.memo(Button);