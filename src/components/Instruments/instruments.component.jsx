import React, { Component } from 'react';
import './instruments.styles.scss';



class IntrumentCollectionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBrandActive: '',
            isModelActive: '',
            isConditionActive: '',
            isPriceActive: ''
        };
        this.handleClickBrand=this.handleClickBrand.bind(this);
        this.handleClickModel=this.handleClickModel.bind(this);
        this.handleClickCondition=this.handleClickCondition.bind(this);
        this.handleClickPrice=this.handleClickPrice.bind(this);
    }

    handleClickBrand() {
        this.setState(prevState => ({
        isBrandActive: !prevState.isBrandActive
      }));
    }
    handleClickModel() {
        this.setState(prevState => ({
        isModelActive: !prevState.isModelActive
      }));
    }
    handleClickCondition() {
        this.setState(prevState => ({
        isConditionActive: !prevState.isConditionActive
      }));
    }
    handleClickPrice() {
        this.setState(prevState => ({
        isPriceActive: !prevState.isPriceActive
      }));
    }


    render() {
        let { instruments } = this.props;
        return (
            <div className='container-fluid instrument-container'>
            <div className='row instrument-container-row'>
                <div className='col-12 instrument-container-col-title'>
                    <h3 className='instrument-container-title'>INSTRUMENTS</h3>
                </div>
                <div className='col-2 instrument-container-row-col1'>
                    <div className='col-12 instrument-container-row-col1-brand-filter'>
                        <h5 className='brand-filter' onClick={this.handleClickBrand}>&#9660; Brand</h5>
                            { this.state.isBrandActive ? (
                                <div className='brand-filter-container'>

                                </div>
                            ) : ''}
                        <h5 className='model-filter' onClick={this.handleClickModel}>&#9660; Model</h5>
                        { this.state.isModelActive ? (
                                <div className='brand-filter-container'>

                                </div>
                            ) : ''}
                        <h5 className='condition-filter' onClick={this.handleClickCondition}>&#9660; Condition</h5>
                        { this.state.isConditionActive ? (
                                <div className='brand-filter-container'>

                                </div>
                            ) : ''}
                        <h5 className='price-filter' onClick={this.handleClickPrice}>&#9660; Price</h5>
                        { this.state.isPriceActive ? (
                                <div className='brand-filter-container'>

                                </div>
                            ) : ''}
                    </div>
                </div>
                <div className='col-9 instrument-container-row-col2'>
                    {instruments.map( i => 
                        <div className='instrument-item' key={i.id}>
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
            
            </div>            
        </div>
        )
    }
}



export default IntrumentCollectionPage;