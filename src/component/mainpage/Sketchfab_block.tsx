import React, { useEffect} from "react";
import  { BlockInfo } from "./Icon_block";
function SketchfabBlock(props:{name:string,sketchfab_id: string}) {
    let src="https://sketchfab.com/models/"+props.sketchfab_id+"/embed?autospin=0&autostart=1&camera=0&preload=1&ui_theme=dark"
    useEffect(() => {
        src="https://sketchfab.com/models/"+props.sketchfab_id+"/embed?autospin=0&autostart=1&camera=0&preload=1&ui_theme=dark"
    }, [props.sketchfab_id]);
    
    return ( 
        <div className="block">
        <iframe title={props.name} 
            allowFullScreen={true}
            allow="fullscreen; autoplay; vr" xr-spatial-tracking ="true"
            execution-while-out-of-viewport="true" execution-while-not-rendered="true"
            width="200" height="200"  
            web-share="true"
            src={src}
            // style={{borderRadius:"5% 5% 5% 5%"}}
            // className="block block-image rounded-lg"
            >
        </iframe>
        </div>
    )
}

export default SketchfabBlock;
