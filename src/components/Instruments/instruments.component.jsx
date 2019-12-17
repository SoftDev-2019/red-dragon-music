import React from 'react';
import './instruments.styles.scss';

const IntrumentCollectionPage = ({ instruments }) => (
    <div className='container-fluid instrument-container'>
        {instruments.map( i => 
            <div className='instrument-item'>
                <div
                    className='image'
                    style={{
                    backgroundImage: `url(${i.imageUrl})`
                    }}
                />
                <div className='instrument-footer'>
                    <span className='name-model'>{i.name} {i.model}</span>
                    <span className='condition'>{i.condition}</span>
                    <span className='price'>{i.price}</span>
                </div>
            </div>
        )}
    </div>
)

export default IntrumentCollectionPage;