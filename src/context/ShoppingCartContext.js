import {createContext, useContext, useState} from "react";
import { ShoppingCart } from "../components/Shoppingcart";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ({children}) {
    const [isOpen,setIsOpen] = useState(false)
    const [cartItems,setCartItems] = useState([])

    const cartQuantity = cartItems.reduce(
        (quantity,item) => item.quantity +quantity,0
    )
    const openCart =() => setIsOpen(true)
    const closeCart =() => setIsOpen(false)

    function getItemQuantity(id){
        return(
            cartItems.find(item =>item.id === id)?.quantity || 0
        )
    }
    function increaseCartQuantity(id){
        setCartItems(currItems =>{
            if (currItems.find(item => item.id === id) == null){
                return [...currItems,{id, quantity:1 }]
            }
            else {
                return currItems.map(item =>{
                    if (item.id === id){
                        return {...item,quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
        return(
            cartItems.find(item =>item.id === id)?.quantity || 0
        )
    }
    function decreaseCartQuantity(id){
        setCartItems(currItems =>{
            if (currItems.find(item => item.id === id)?.quantity ===1){
                return currItems.filter(item => item.id !==id )
            }
            else {
                return currItems.map(item =>{
                    if (item.id === id){
                        return {...item,quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
        return(
            cartItems.find(item =>item.id === id)?.quantity || 0
        )
    }
    function removeFromCart(id){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !==id)
        })
    }

    {/*Phần Phương thêm vào */}
    // const [user, setUser] = useState([
    //     {   name : 'Quốc',
    //         password : 'Q1234567',
    //         email : 'quoc@gmail.com',
    //         tel : '0912345678'
    //     },
    //     {   name : 'Linh',
    //         password : 'L1234567',
    //         email : 'linh@gmail.com',
    //         tel : '0912345679'
    //     },
    //     {   name : 'Phương',
    //         password : 'p1234567',
    //         email : 'phuong@gmail.com',
    //         tel : '0912345680'
    //     }
    // ])
    // const [useLogin, setUseLogin] = useState({name:'', password:'',})
    // function LoginUse(e) {
    //     setUseLogin({
    //         name: usename,
    //         password: password
    //     })
    //     console.log(useLogin);
    // }
 
    return(
            <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart,
            openCart, closeCart, cartItems,cartQuantity, }}>
                {children}
                <ShoppingCart isOpen={isOpen}/>
            </ShoppingCartContext.Provider>
  
    )
};


export default ShoppingCartProvider;

