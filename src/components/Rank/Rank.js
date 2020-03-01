import React, { Fragment } from 'react';

const Rank = ({name, entries}) => {
    return(
        <Fragment>
            <div className='f3 pa2 white'>
                {`${name}, with ${entries} entries your current rank is:`}
            </div>
            <div className='f2 white b'>
                {'#5'}
            </div>
        </Fragment>
    );
}

export default Rank;