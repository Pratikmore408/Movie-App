import { Component } from "react";
import styled from "styled-components";
import NavStyle from "./Navbar.module.css"







const CartCount = styled.div`
        background: ${(props)=> props.color};
        border-radius: 50%;
        color: white;
        padding: 4px 8px;
        position: absolute;
        right:10px;
        top:-5px;
        font-size:12px;
        visibility:  ${(props) => (props.show ? "visible":"hidden")};
`;



class Navbar extends Component{
    render(){
        const {count} = this.props;
        // console.log(this.props);
        return(
            <>
            <div className={NavStyle.Nav} >
            <div className={NavStyle.Title} >Movie-App</div>
            <div className={NavStyle.CartImgContainer}>
                    < img className={NavStyle.CartImg} alt="cart-Icon" src="https://cdn-icons-png.flaticon.com/128/6571/6571819.png" />
                    
                    <CartCount color="black" show ={count<1 ? 'false': 'true'}>{count}</CartCount>
                    
                </div>

            </div>
            </>
        )
    }
}

export default Navbar;
