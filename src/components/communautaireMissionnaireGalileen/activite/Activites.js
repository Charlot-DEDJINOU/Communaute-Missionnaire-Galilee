import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import item from "../../../assets/bapteme1.jpg"
import item1 from "../../../assets/bapteme2.jpg"
import Activitie from "./Activite"
import "./activite.css"

function Activities()
{
    const data = [
        {
            "id" : 1 ,
            "image" : item ,
            "text" : "Adolescent"
        },
        {
            "id" : 2 ,
            "image" : item ,
            "text" : "Adolescent"
        },
        {
            "id" : 3 ,
            "image" : item ,
            "text" : "Adolescent"
        },
        {
            "id" : 4 ,
            "image" : item1 ,
            "text" : "Adolescent"
        },
        {
            "id" : 5 ,
            "image" : item1 ,
            "text" : "Adolescent"
        },
        {
            "id" : 6 ,
            "image" : item1 ,
            "text" : "Adolescent"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4.5, 
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 3000,
      };

    return(
        <section className="my-5 activites" id="activite">
            <h2 className='m-5'>Activites à la CMG</h2>
             <Slider {...settings}>
                { data.map(item => 
                    <Activitie {...item} key={item.id}/>
                )}
             </Slider>
        </section>
    )
}

export default Activities