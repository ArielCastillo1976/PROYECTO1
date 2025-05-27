const ButtonMultiuso = (props) => {

    return (
        <button className={props.cssStyle} style={props.styles} onClick={props.handler}>
            {props.texto}
        </button>
    )
}
export default ButtonMultiuso

