import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'Experience face detection in your photos. Try it now!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-3'>
                    <input 
                        className='f4 pa2 w-70 center' type='text' 
                        onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-green' 
                        onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;