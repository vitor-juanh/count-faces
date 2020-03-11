import React, { Fragment } from 'react';

const Rank = ({name, entries}) => {
    return(
        <Fragment>
                <p className='f3 center white pa2 bg-black-20'>{`${name}, you have ${entries} entries`}</p>
        </Fragment>
    );
}

export default Rank;