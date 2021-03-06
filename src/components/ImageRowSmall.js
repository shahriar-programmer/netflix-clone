import React, { useState } from 'react'
import Modal from './Modal'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactModal from 'react-modal';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobileLandscape: {
        breakpoint: { max: 464, min: 320 },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 320, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function ImageRowSmall(props) {
    const { title, movieByGenre } = props
    const [state, setstate] = useState(false)
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

    // function Show(i) {
    //     if (state.type === true) {
    //         setstate({ data: {}, type: false })
    //     }
    //     else {
    //         setstate({ data: i, type: true })
    //     }
    // }

    // function OffModal(event) {
    //     const listofclass = Array.from(event.target.classList).filter(i => i === "mod")
    //     console.log(listofclass)
    //     if (state.type === true && (listofclass.length === 0)) {
    //         setstate({ data: {}, type: false })
    //     }
    //     console.log(Array.from(event.target.classList))
    // }

    return (
        <>
            <div className="row">
                <h1 className="text-xl">{title}</h1>
                <div className="poster_row overflow-y-hidden flex gap-2 py-2 overflow-x-scroll">
                    <Carousel
                        containerClass="carousel-container"
                        itemClass="carousel-item"
                        responsive={responsive}
                    >
                        {
                            movieByGenre ? movieByGenre.map(
                                movie => (
                                    <div onClick={() => setstate(true)} className="over_container">
                                        <img key={movie.id} className="poster_img object-contain w-64 h-auto" src={BASE_IMG_URL + movie.backdrop_path}
                                            alt={movie.title || movie.name} />
                                        <div className="middle">
                                            <p className="middle_text">{movie.name || movie.title}</p>
                                        </div>
                                    </div>
                                )
                            ) : ""
                        }
                    </Carousel>
                </div>
                <div>
                    <ReactModal isOpen={state.type} style={{
                        overlay: {
                            backgroundColor: 'transparent'
                        },
                        content: {
                            backgroundColor: "transparent",
                            border: "none",
                        }
                    }}>
                        <Modal movie={state.data} />
                    </ReactModal>
                </div>
            </div>
        </>
    )
}

export default ImageRowSmall