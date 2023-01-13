
import "./Icon_block.css"
export type IconBlockInfo={
    href?: string;
    src: string;
    name: string;
}
type propsType ={
    info: IconBlockInfo[];
}
function IconBlock(props:IconBlockInfo){
    // let blockStyle=["mx-1","backdrop-blur-lg"]
    function ImgText({src,text}:{src:string,text:string}):JSX.Element{
        return(
            <>
                <img src={src} alt="nice" className={"block-image"}/>
                <h3 className={"block-text"}>{text}</h3>
            </>
        ) 
    }
    if (props.href===undefined||props.href.length===0){
        return (
            <div className={"block"}>
                <ImgText src={props.src} text={props.name} ></ImgText>
            </div>
        )
    }
    else{
        return(
            <a href={props.href}className={"block"} target="_blank"  rel="noopener noreferrer">
                <ImgText src={props.src} text={props.name} ></ImgText>
            </a>
        )
    }
}
function IconBlockList (props:propsType){
    console.log(props)
    return(
        <div className={"block-container"} style={{maxWidth:"80%",minWidth:"60"}}>
            {props.info.map(function(value,index){
                return <IconBlock key={index} {...value}/>
            })}
        </div>
    )
}

export default IconBlockList;
