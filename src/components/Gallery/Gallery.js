import './Gallery.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick/lib/slider';

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
        nextArrow: <Arrow pos={"right"} />
    };

    return(
        <div id="Gallery" className="mb-1">
            <h2>Gallery</h2>
            <div className="text-m mb-1 subtitle">Take a look within <span>5000</span> unique designs</div>
            <Slider {...sliderSettings}>
                <img src="img_01.png" />
                <img src="img_02.png" />
                <img src="img_03.png" />
                <img src="img_04.png" />
                <img src="img_05.png" />
                <img src="img_06.png" />
            </Slider>
            <img className="dino-internet mt-1" src="/item_dino_internet.png"></img>
        </div>
    )
}
export default Gallery;