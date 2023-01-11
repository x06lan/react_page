import "./Icon_block.css"
function IconBlock(props){
    if (props.data.href ===""){
        return (
        <div className="block_div">
            <img src={props.data.src} className="icon_image"/>
            <h3 className="icon_title">{props.data.name}</h3>
        </div>
        )
    }
    else{
        return(
            <a href={props.data.href}className="block_div" target="_blank"  rel="noopener noreferrer">
                <img src={props.data.src} className="icon_image"/>
                <h3 className="icon_title">{props.data.name}</h3>
            </a>
        )
    }
}
function IconBlockList (props){
    return(
        <div className="block_list container">
            {props.datas.map(function(item,index){
                return <IconBlock key={index} data={item}/>
            })}
        </div>
    )
}
export default IconBlockList;
