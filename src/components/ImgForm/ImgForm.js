import React, { Fragment } from 'react';

const ImgForm = () => {
    return(
        <Fragment>
            <div>
                <div className='center'>
                    <div className='center pa4 br1 shadow-4'>
                        <input className='f4 w-70 center' type='text' />
                        <button className='f4 grow w-30 link ph3 pv2 dib pointer'>Detect</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ImgForm;