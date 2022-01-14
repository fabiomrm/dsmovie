import { MovieCard } from "components/MovieCard";
import { Pagination } from "components/Pagination";
import axios from 'axios';
import { BASE_URL } from "utils/requests";
import { useState, useEffect } from "react";
import { MoviePage } from '../../types/movieTypes';

export const Listing = () => {

    const [pageNumber, setPageNumber] = useState(0);
    
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=128&page=0`)
        .then(res => {
            const data = res.data as MoviePage;
            console.log(data)
            setPageNumber(data.number);
        })

    }, [])
    
    
   
    
    return(
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
};