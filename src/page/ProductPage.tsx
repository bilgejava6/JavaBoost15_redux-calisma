import React from 'react'
import UrunArama from '../components/molecules/UrunArama'
import UrunListesi from '../components/organishm/UrunListesi'
import Sepet from '../components/molecules/Sepet'

function ProductPage() {
  return (
    <div className="container">
        <div className="row mt-4">
            <div className="col-8">                               
                <div className="row">
                    <UrunArama />
                </div>
                <div className="row">
                    <UrunListesi />
                </div>
            </div>
            <div className="col-4">
                    <Sepet />
            </div>
        </div>
    </div>
  )
}

export default ProductPage