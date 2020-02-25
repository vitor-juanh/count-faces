import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn){
        return(
            <nav className='tc bg-black-10'>
                <p className="underline pa1 black bg-black white b f2 f1-ns dib ma3" title="count-faces">count-faces</p>
                <div>
                    <p onClick={() => onRouteChange('sign-in')} className="w-20 pointer ba pa1 link dim white f6 f5-ns dib mr3" title="See full Rank">Rank</p>
                    <p onClick={() => onRouteChange('sign-in')} className="w-20 pointer ba pa1 link dim white f6 f5-ns dib mr3" title="About">About</p>
                    <p onClick={() => onRouteChange('sign-in')} className="w-20 pointer ba pa1 link dim white f6 f5-ns dib mr3" title="Contact">Contact</p>
                    <p onClick={() => onRouteChange('sign-in')} className="w-20 pointer ba pa1 link dim white f6 f5-ns dib" title="Sign Out">Sign Out</p> 
                </div>
                <p className='f3 center white pa2 bg-black-20'>{'This magic will detect faces of your images'}</p>
            </nav>
        );
    }else{
        return(
            <nav className='bg-black-10'>
                <p className="underline pa1 black bg-black white b f2 f1-ns dib ma3" title="count-faces">count-faces</p>
                <div>
                    <p onClick={() => onRouteChange('sign-in')} className="w-20 pointer ba mr3 pa1 link dim white f6 f5-ns dib" title="See Full Rank">Rank</p>
                    <p onClick={() => onRouteChange('sign-in')} className="w-20 pointer ba mr3 pa1 link dim white f6 f5-ns dib" title="About">About</p>
                    <p onClick={() => onRouteChange('sign-in')} className="w-20 pointer ba mr3 pa1 link dim white f6 f5-ns dib" title="Contact">Contact</p>
                </div>
            </nav>
        );
    }
}

export default Navigation;