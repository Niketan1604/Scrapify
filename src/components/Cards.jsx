import { React, useState, useEffect } from 'react'

function Cards({ data }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 768;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    return (
        <div className='px-3'>
            {data.map((item, i) => {
                return (
                    <div id={`card_${i}`} className={`${isMobile ? "bg-light py-2 my-4 d-flex flex-column justify-content-evenly px-4 rounded" : "bg-light py-2 my-4 d-flex flex-column justify-content-evenly px-4 rounded-pill"}`} style={{ minHeight: '300px' }}>
                        <img src={item.img} className=" rounded img-thumbnail img-center mx-auto " alt="..." style={{ height: '80px', width: '100px' }} />

                        <div className="">
                            <h6 className="">{item.details}</h6>
                            <h5 className="">Price : {item.price}</h5>
                            <a href={item.link} className="btn btn-secondary" target={'_blank'} rel="noreferrer">Buy Now</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards




