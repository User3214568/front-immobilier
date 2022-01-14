import { Splide , SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default function LatestAnnonces(props) {
  
    return (
        <section class="section service gray-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 text-center">
                        <div class="section-title">
                            <h2>Nouveaux Annonces</h2>
                            <div class="divider mx-auto my-4"></div>
                        </div>
                    </div>
                    <div class="col-12">
                    <Splide options={ {
                                   perPage    : 3,
                                   height     : '10rem',
                                   cover      : false,
                                   rewind: true,
                                   gap   : '1rem',
                                   breakpoints: {
                                     height: '6rem',
                                   },
                            } }>
                                <SplideSlide>
                                    <img  height="150" src="https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg" alt="Image 1"/>
                                </SplideSlide>
                                <SplideSlide>
                                    <img height="150" src="https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg" alt="Image 2"/>
                                </SplideSlide>
                            </Splide>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}