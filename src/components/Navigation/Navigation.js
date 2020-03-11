import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn){
        return(
            <nav>
                <p className="underline pa1 black bg-black white b f2 f1-ns dib ma3" title="count-faces">count-faces</p>
                <div>
                    {/* <p onClick={() => onRouteChange('sign-in')} className="w-20 pointer ba pa1 link dim white f6 f5-ns dib mr3" title="See full Rank">Rank</p>
                    <p onClick={() => onRouteChange('sign-in')} className="w-20 pointer ba pa1 link dim white f6 f5-ns dib mr3" title="About">About</p>
                    <p onClick={() => onRouteChange('sign-in')} className="w-20 pointer ba pa1 link dim white f6 f5-ns dib mr3" title="Contact">Contact</p> */}
                    <p onClick={() => onRouteChange('sign-in')} className="w-20 pointer underline pa1 link dim white f6 f5-ns dib" title="Sign Out">Sign Out</p>
                </div>
            </nav>
        );
    }else{
        return(
            <nav>
                <p className="underline pa1 black bg-black white b f2 f1-ns dib ma3" title="count-faces">count-faces</p>
            </nav>
        );
    }
}

export default Navigation;