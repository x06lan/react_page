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
    if (props.href===undefined){
        return (
        <div className="block_div">
            <img src={props.src} alt="nice" className="icon_image"/>
            <h3 className="icon_title">{props.name}</h3>
        </div>
        )
    }
    else{
        return(
            <a href={props.href}className="block_div" target="_blank"  rel="noopener noreferrer">
                <img src={props.src} alt="nice" className="icon_image"/>
                <h3 className="icon_title">{props.name}</h3>
            </a>
        )
    }
}
function IconBlockList (props:propsType){
    console.log(props)
    return(
        <div className="block_list container">
            {props.info.map(function(value,index){
                return <IconBlock key={index} {...value}/>
            })}
        </div>
    )
}

export default IconBlockList;
