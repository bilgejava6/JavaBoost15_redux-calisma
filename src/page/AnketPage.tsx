import React from 'react'
import ButonList from '../components/molecules/ButonList'

function AnketPage() {
  return (
    <div className="container">
        <div className="row mt-4">
            <label className='form-label'>Sahip olduğunuz yazılım bilgileri (max 7 özellik seçiniz)</label>
        </div>
        <div className="row">
            <ButonList />
        </div>
    </div>
  )
}

export default AnketPage