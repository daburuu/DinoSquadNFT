import './Roadmap.scss';
import Accordion from './Accordion';
function Roadmap(){

    return (
        <div id="Roadmap" className="mb-2">
            <h2>Roadmap</h2>
            <div className="content flex">
                <div className="col-md-6">
                    <Accordion />
                </div>
                <div className="col-md-4 img-container">
                </div>
            </div>
        </div>
    );
}

export default Roadmap;