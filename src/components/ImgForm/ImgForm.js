import React, { Fragment } from 'react';

const ImgForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <Fragment>
            <div>
                <div className='center'>
                    <div className='center pa4 br1 bg-transparent shadow-4'>
                        <input className='f3 ba w-70 center bg-black-20 hover-bg-black hover-white' type='text' onChange={onInputChange} />
                        <button
                         className='f3 grow w-30 link b ba b--black bg-white hover-bg-black hover-white ph3 pv2 dib pointer'
                         onClick={onButtonSubmit}
                        >Detect
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ImgForm;