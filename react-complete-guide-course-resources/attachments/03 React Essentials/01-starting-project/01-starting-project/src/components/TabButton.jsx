
const TabButton = (props) => {

    return (
        <li>
            <button className="active" onClick={props.onClick}>{props.children}</button>
        </li>
    )
}

export default TabButton;