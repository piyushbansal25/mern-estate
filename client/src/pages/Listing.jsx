import { set } from 'mongoose';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';


export default function Listing() {

  SwiperCore.use([Navigation]);  
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();
    useEffect(() => {
        const fetchListing = async() => {
            try {
                setLoading(true);
                const res = await fetch(`/api/listing/get/${params.listingId}`);
                const data = await res.json();
                if(data.success === false){
                    setError(true);
                    setLoading(false);
                }
                setListing(data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
           
        }
        fetchListing();
    }, [params.listingId])
  
    return <main>
        {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
        {error &&<div className='flex flex-col'>
        <p className='text-center text-red-600 my-7 text-2xl'>Error fetching Listing </p>
        <Link to={'/'} className='text-blue-600 underline text-center'>Go to home page</Link> 
        </div> 
        }

        {listing && !error && !loading && <div >
        <Swiper navigation>
            {listing.imageUrls.map((url) => (
                <SwiperSlide key={url}>
                    <div className='h-[550px]' style={{background: `url(${url}) center no-repeat`, backgroundSize:'cover'}} >

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>}
    </main>
}
