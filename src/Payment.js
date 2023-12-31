// import React, { useEffect, useState } from 'react'
import "./Payment.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import CurrencyFormat from "react-currency-format";
// import { getBasketTotal } from './reducer';
// import axios from './axios';


function Payment() {
    // const navigate=useNavigate();
    const [{basket,user},dispatch]= useStateValue();

    // const stripe=useStripe();
    // const elements= useElements();

    // const [succeeded,setSucceeded]=useState(false);
    // const [processing,setProcessing]=useState("");
    // const [error,setError]=useState(null);
    // const [disabled,setDisabled]=useState(true);
    // const [clientSecret,setClientSecret]=useState(true);

    // useEffect(()=>{
    //     //generate special stripe secret
    //     const getClientSecret = async ()=>{
    //         const response = await axios({
    //             method:'post',
    //             url:'/payments/create?total=${getBasketTotal(basket)*100}'
    //         });
    //         setClientSecret(response.data.clientSecret)
    //     }
    // },[basket])

    // const handleSubmit= async (e) =>{
    //     //stripe stuff
    //     e.preventDefault();
    //     setProcessing(true);

    //     const payload = await stripe.confirmCardPayment(clientSecret,{
    //         payment_method:{
    //         card: elements.getElement(CardElement)
    //         }
    //     }).then(({paymentIntent})=>{
    //         //pymnt confirmation
    //         setSucceeded(true);
    //         setError(null);
    //         setProcessing(false);

    //         navigate("/orders",{replace:true});
    //     })
    // }
    // const handleChange= e => {
    //     setDisabled(e.empty);
    //     setError(e.error?e.error.message:"");
    // }



  return (
    <div className='payment'>
        <div className='payment_container'>
             
            <h1>
                Checkout {<Link to="/checkout"> {basket?.length} items</Link>}
            </h1>



            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                </div>
            </div>


            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review Items and delivery</h3>

                </div>
                <div className='payment_items'>
                    {basket.map(item =>(
                        <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                        />
                    ))}
                </div>




            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                {/* <div className='payment_details'>
                    <form onSubmit={handleSubmit}>

                        <CardElement onChange={handleChange}/>
                        <div className='payment_priceContainer'>
                        <CurrencyFormat 
                                renderText={(value) => (
                                    <>
                                    <h3>Order Total: {value}</h3>
                                
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeperator={true}
                                prefix={"Rs "}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span> {processing?<p>Processing</p>:"Buy Now"} </span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}


                    </form> */}
                {/* </div> */}




            </div>





        </div>






    </div>
  )
}



export default Payment