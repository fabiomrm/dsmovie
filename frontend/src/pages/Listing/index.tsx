import { MovieCard } from "components/MovieCard";
import { Pagination } from "components/Pagination";
import axios from 'axios';
import { BASE_URL } from "utils/requests";
import { useState, useEffect } from "react";
import { MoviePage } from '../../types/movieTypes';

export const Listing = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<MoviePage>({
        content:[],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=128&page=${pageNumber}`)
        .then(res => {
            const data = res.data as MoviePage;
            setPage(data);
        })

    }, [pageNumber])
    
    
   
    
    return(
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    {
                        page.content.map((movie, index) => (
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" key={index}>
                                <MovieCard movie={movie} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};