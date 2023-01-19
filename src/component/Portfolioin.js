import React from 'react';
import portfolio from '../json/portfolio.json';
import shopitem from '../json/item.json';
function Portfolioin(props) {
    // const iteminfo = shopitem[1].shop[0].diffuser;

    return (
        <div id={props.portfolioId} 
        className='py-5'>
            <h2 
            className='text-uppercase text-center'>
                {props.portfolioId}
            </h2>
            <p className='text-center'>
                {portfolio[props.portfolioId].title}
            </p>
            <ul >
               <li>
                <img src={portfolio[props.portfolioId].img} alt="" />
               </li>
            </ul>

        </div>
    );
}

export default Portfolioin;