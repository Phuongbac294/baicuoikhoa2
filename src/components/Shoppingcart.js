import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../ultilities/formatCurrency";
import { CartItem } from "./Cartitem";
import storeItems from "../data/items.json"

export function ShoppingCart({isOpen}){
    const {closeCart, cartItems} = useShoppingCart()
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title> Title</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item =>(
                <CartItem key={item.id} {...item}/>
                ))}
                <div className="ms-auto fw-bold fs-5">
                    Tortal {formatCurrency(cartItems.reduce((total,CartItem) =>{
                        const item = storeItems.find(i =>i.id === CartItem.id)
                        return total + (item?.price || 0) * CartItem.quantity
                    }, 0)
                    )}
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}