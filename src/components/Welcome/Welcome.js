import './Welcome.scss';
import DinoPreview from '../../assets/img/item_dino_preview.png';

function Welcome(){
    return (
        <div id="Welcome" className="mb-2">
            <h1 className="mb-2">Welcome</h1>
            <div className="content flex">
                <div className="col-md-5 mr-2 align-right">
                    <p className="text-m">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus facilisis quam, et tincidunt ipsum bibendum gravida. Etiam id vulputate justo. Vivamus ornare porta imperdiet.</p>
                    <p className="text-m">Fusce ligula metus, fermentum at vulputate et, pretium vel sapien. Mauris sed aliquet metus. Donec vitae ultrices lacus.</p>
                </div>
                <img className="col-md-3 img-welcome" src={DinoPreview}/>
                {/* <div className="col-md-3 img-container"> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Welcome;