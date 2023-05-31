import React from 'react'
import Cards from './Cards'

function Result({ product, amazonData, flipkartData }) {
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 450) {
            document.getElementById('amazon').classList.remove('w-50');
            document.getElementById('flipkart').classList.remove('w-50');
        }
        else {
            if (!document.getElementById('amazon').classList.contains('w-50')){
                document.getElementById('amazon').classList.add('w-50');
                document.getElementById('flipkart').classList.add('w-50');
            }

        }
    })
    return (
        <div>
            <p className='fs-4 px-5 pt-4' >Showing results for {product}</p>
            <div className="container text-center">
                <div className="row align-items-center justify-items-center">
                    <div className="col">
                        {amazonData && (<><div id='amazon' className='bg-light p-1 rounded-pill w-50 mx-auto fs-4'>Amazon</div><Cards data={amazonData} /></>)}

                    </div>
                    <div className="col">
                        {flipkartData && (<><div id='flipkart' className='bg-light p-1 rounded-pill w-50 mx-auto fs-4'>Flipkart</div><Cards data={flipkartData} /></>)}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Result
