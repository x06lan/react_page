
// import "./Icon_block.css"
export type IconBlockInfo={
    href?: string;
    src: string;
    name: string;
}
type propsType ={
    info: IconBlockInfo[];
}
function IconBlock(props:IconBlockInfo){
    let blockStyle=["bg-transparent","mx-1","backdrop-blur-lg"]
    let imageStyle=["w-20","h-20","rounded-lg","bg-white"]
    let textStyle=["text-white","text-center"]
    function ImgText({src,text}:{src:string,text:string}):JSX.Element{
        return(
            <>
                <img src={src} alt="nice" className={imageStyle.join(" ")}/>
                <h3 className={textStyle.join(" ")}>{text}</h3>
            </>
        ) 
    }
    if (props.href===undefined||props.href.length===0){
        return (
            <div className={blockStyle.join(" ")}>
                <ImgText src={props.src} text={props.name} ></ImgText>
            </div>
        )
    }
    else{
        return(
            <a href={props.href}className={blockStyle.join(" ")} target="_blank"  rel="noopener noreferrer">
                <ImgText src={props.src} text={props.name} ></ImgText>
            </a>
        )
    }
}
function IconBlockList (props:propsType){
    console.log(props)
    return(
        <div className="bg-gradient-to-r from-purple-400 md:from-yellow-500">
            <div className={"flex flex-wrap flex-row "}>
                {props.info.map(function(value,index){
                    return <IconBlock key={index} {...value}/>
                })}
            </div>
        </div>
    )
}

export default IconBlockList;
