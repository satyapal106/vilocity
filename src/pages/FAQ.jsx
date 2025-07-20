import '../style/faq.scss';

export const FAQ = () => {

    const aa = document.getElementsByClassName('collapsible');
    const bb = document.getElementsByClassName('content');

    console.log(aa)

    const toggleCollapse = (event) =>{
        const id = event.target.id
        for(let a of aa){
            if(id == a.id){
                for(let b of bb){
                    if(b.id == a.id){
                        a.classList.toggle('active');
                        b.classList.toggle('show-content');
                    }
                }
            }
        }
    }

  return (
    <div className="faq">         
        <p className='title'>Frequently Asked Questions.</p>
        <div className="container">
            <div className="container1">
                <div className="btn1">
                    <button className="collapsible" onClick={toggleCollapse} id='1'>01. The order</button>
                    <div className="content" id='1'>
                        <p className='p-content'>When do I receive my order?</p>
                        <p className=''>When placing the order, a day of shipment is indicated. After the order has been placed, the same
                            delivery time will also be stated on the order confirmation. It is therefore never possible that
                            during the order, the shipping day on the website, is different than on the order confirmation.
                        </p>
                        <p className='p-content'>I now see the longer delivery time of (a part of) my order. How can I cancel it?</p>
                        <p className=''>If the order has a longer delivery time than you had previously seen, it is of course possible to
                            cancel (a part of) the order. For this you can contact our customer service. They will cancel
                            the order for you. The purchase amount will be back on your bank account within two working
                            days. When an order has already been shipped, it can no longer be cancelled.</p>
                        <p className='p-content'>When will I receive the invoice for my order?</p>
                        <p className=''>When you have paid for the order, you will not automatically receive an invoice for your order.
                            If you wish to receive an invoice, this can be done in two ways.The first way is through your
                            account at our store. When you log in to your account you can see your orders and download the
                            invoice.</p>
                    </div>
                </div>
                <div className="btn2">
                    <button  className="collapsible" onClick={toggleCollapse} id='2'>02. Shipment</button>
                    <div className="content" id='2'>
                        <p className='p-content'>When do I receive my order?</p>
                        <p>When placing the order, a day of shipment is indicated. After the order has been placed, the same
                            delivery time will also be stated on the order confirmation. It is therefore never possible that
                            during the order, the shipping day on the website, is different than on the order confirmation.
                        </p>
                        <p className='p-content'>I now see the longer delivery time of (a part of) my order. How can I cancel it?</p>
                        <p>If the order has a longer delivery time than you had previously seen, it is of course possible to
                            cancel (a part of) the order. For this you can contact our customer service. They will cancel
                            the order for you. The purchase amount will be back on your bank account within two working
                            days. When an order has already been shipped, it can no longer be cancelled.</p>
                        <p className='p-content'>When will I receive the invoice for my order?</p>
                        <p>When you have paid for the order, you will not automatically receive an invoice for your order.
                            If you wish to receive an invoice, this can be done in two ways.The first way is through your
                            account at our store. When you log in to your account you can see your orders and download the
                            invoice.</p>
                    </div>
                </div>
            </div>
            <div className="container1">
                <div className="btn1">
                    <button type="button" className="collapsible" onClick={toggleCollapse} id='3'>03.The order</button>
                    <div className="content" id='3'>
                        <p className='p-content'>When do I receive my order?</p>
                        <p>When placing the order, a day of shipment is indicated. After the order has been placed, the same
                            delivery time will also be stated on the order confirmation. It is therefore never possible that
                            during the order, the shipping day on the website, is different than on the order confirmation.
                        </p>
                        <p className='p-content'>I now see the longer delivery time of (a part of) my order. How can I cancel it?</p>
                        <p>If the order has a longer delivery time than you had previously seen, it is of course possible to
                            cancel (a part of) the order. For this you can contact our customer service. They will cancel
                            the order for you. The purchase amount will be back on your bank account within two working
                            days. When an order has already been shipped, it can no longer be cancelled.</p>
                        <p className='p-content'>When will I receive the invoice for my order?</p>
                        <p>When you have paid for the order, you will not automatically receive an invoice for your order.
                            If you wish to receive an invoice, this can be done in two ways.The first way is through your
                            account at our store. When you log in to your account you can see your orders and download the
                            invoice.</p>
                    </div>
                </div>
                <div className="btn2">
                    <button type="button" className="collapsible" onClick={toggleCollapse} id='4'>04.Returns,exchanges and complaints</button>
                    <div className="content" id='4'>
                        <p className='p-content'>When do I receive my order?</p>
                        <p>When placing the order, a day of shipment is indicated. After the order has been placed, the same
                            delivery time will also be stated on the order confirmation. It is therefore never possible that
                            during the order, the shipping day on the website, is different than on the order confirmation.
                        </p>
                        <p className='p-content'>I now see the longer delivery time of (a part of) my order. How can I cancel it?</p>
                        <p>If the order has a longer delivery time than you had previously seen, it is of course possible to
                            cancel (a part of) the order. For this you can contact our customer service. They will cancel
                            the order for you. The purchase amount will be back on your bank account within two working
                            days. When an order has already been shipped, it can no longer be cancelled.</p>
                        <p className='p-content'>When will I receive the invoice for my order?</p>
                        <p>When you have paid for the order, you will not automatically receive an invoice for your order.
                            If you wish to receive an invoice, this can be done in two ways.The first way is through your
                            account at our store. When you log in to your account you can see your orders and download the
                            invoice.</p>
                        <p>When you have paid for the order, you will not automatically receive an invoice for your order.
                            If you wish to receive an invoice, this can be done in two ways.The first way is through your
                            account at our store. When you log in to your account you can see your orders and download the
                            invoice.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
