import React from 'react'
import TekList from '../../utils/TekList.json';
import Button from '../atoms/Button';
interface ITekList{
    id: number,
    name: string,
    type: string
}
function ButonList() {
    const teknikListe: ITekList[] = TekList;
  return (
    <>
    {
        teknikListe.map((tk,index)=>{
            return (
                <Button key={index} name={tk.name}/>
            )
        })
    }
    </>
  )
}

export default ButonList