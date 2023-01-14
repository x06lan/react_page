import SketchfabBlock from "./Sketchfab_block"
import {BlockInfo} from "./Icon_block"
import "./block.css"
type propsType ={
    info: BlockInfo[];
}
function ImageBlock(props:BlockInfo){
    function ImgText({src,text,sketchfab_id}:{src:string,text:string,sketchfab_id?:string}):JSX.Element{
        console.log(sketchfab_id)
        if(sketchfab_id!==undefined && sketchfab_id){
            return(
                <>
                    <SketchfabBlock name={text} sketchfab_id={sketchfab_id}></SketchfabBlock>
                    <h3 className={"block-text"}>{text}</h3>
                </>
            ) 
        }
        else{
            return(
                <>
                    <img src={src} alt="loading?" className={"block-image image-size"}/>
                    <h3 className={"block-text"}>{text}</h3>
                </>
            ) 

        }
    }
    if (props.href===undefined||props.href.length===0){
        return (
            <div className={"main-block"}>
                <ImgText src={props.src} text={props.name} sketchfab_id={props.sketchfab_id} ></ImgText>
            </div>
        )
    }
    else{
        return(
            <a href={props.href}className={"main-block"} target="_blank"  rel="noopener noreferrer">
                <ImgText src={props.src} text={props.name} sketchfab_id={props.sketchfab_id} ></ImgText>
            </a>
        )
    }
}
function ImageBlockList (props:propsType){
    console.log(props)
    return(
        // <div className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-green-700 opacity-50">

        // </div>
        <div className="mask-gradient container">
            <div className={"image-container "} >
                {props.info.map(function(value,index){
                    console.log(value.sketchfab_id,index)
                    return <ImageBlock key={index} {...value}/>
                })}
            </div>

        </div>
    )
}

export default ImageBlockList;

