import { FaCartArrowDown } from "react-icons/fa";
import { Badge } from "react-bootstrap";
const CartWidgetIcons = () => {
    return(
        <div>
            < FaCartArrowDown fontSize={'1.5rem'}/>
            <Badge bg="secondary">{5}</Badge>
        </div>
    )
}

export default CartWidgetIcons


