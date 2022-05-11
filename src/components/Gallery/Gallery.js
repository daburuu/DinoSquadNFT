import './Gallery.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick/lib/slider';
import Slide01 from '../../assets/img/img_01.png';
import Slide02 from '../../assets/img/img_02.png';
import Slide03 from '../../assets/img/img_03.png';
import Slide04 from '../../assets/img/img_04.png';
import Slide05 from '../../assets/img/img_05.png';
import Slide06 from '../../assets/img/img_06.png';
import DinoInternet from '../../assets/img/item_dino_internet.png';

function Arrow({pos, className, style, onClick}){
    return (
        <div className={`arrow ${pos == "left" ? "reverse" : ""}`} onClick={onClick}></div>
    )
}

function Gallery(){
    const sliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: <Arrow pos={"left"} />,
        nextArrow: <Arrow pos={"right"} />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    };

    return(
        <div id="Gallery">
            <h2>Gallery</h2>
            <div className="text-m mb-1 subtitle">Take a look within <span>5000</span> unique designs</div>
            <Slider {...sliderSettings}>
                <img src={Slide01} />
                <img src={Slide02} />
                <img src={Slide03} />
                <img src={Slide04} />
                <img src={Slide05} />
                <img src={Slide06} />
            </Slider>
            <img className="dino-internet mt-1" src={DinoInternet}></img>
        </div>
    )
}
export default Gallery;