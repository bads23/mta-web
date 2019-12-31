import React from 'react'
import Spinlogo from '../../common/assets/svg/MTA-SPIN.svg';

const Spinnerlogo = () =>{
    return(
        <>  
            <div id="spinLogo">
                <div id='loaderImgDiv' className="rotation">
                    <img src={Spinlogo} alt=""/>
                </div>
                <div id="middleM">
                    <p className="gold playfair">M</p>
                </div>
            </div>
        </>
    )
}


const Sidebar = () => {
    return(
        <>
            <div id="sidebar">
                <Spinnerlogo />
                <div id="logo-text">
                    <h2 className="playfair gold">MOTION</h2>
                    <hr/>
                    <p className="lato gold mg-v-10">TALENT AFRICA</p>
                </div>
                
                <div id="quote" className="playfair">
                    <p>"Imagination is more important than knowledge."</p>
                    <p className="quote-author"> - Albert Einstein</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar