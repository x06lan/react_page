import "./Image_block.css"
import SketchfabBlock from "./Sketchfab_block"
function ImageBlock (props) {
    if (props.data.sketchfab_id!= null){
        return (
            <a href={props.data.href}className="block_div" target="_blank"  rel="noopener noreferrer">
                    <SketchfabBlock  item_id={props.data.sketchfab_id}/>
                <h3 className="block_title">{props.data.name}</h3>
            </a>
        )
    }
    else{
        return (
            <a href={props.data.href}className="block_div" target="_blank"  rel="noopener noreferrer">
                    <img className="block_image"src={props.data.src} alt="not net"/>
                <h3 className="block_title">{props.data.name}</h3>
            </a>
        )
    }
}
function ImageBlockList (props) {
    return (
        <div className="block_list container">
            {props.datas.map(function(item,index){
                return <ImageBlock key={index} data={item}/>
            })}
        </div>
    )
}
export default ImageBlockList;
