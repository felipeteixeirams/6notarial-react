import '@/_assents/css/responsive.css';
import '@/_assents/fonts/themify/themify-icons.css';

const Card = (props) => {
    return (
        <div className="col-lg-3 col-sm-6 col-md-6 test-author-thumb">
            <a href="_" data-toggle="modal" data-target={`#modal${props.modalId}`}>
                <div className="web-service-block">
                    <i className={`${props.icon} icons`}></i>
                    <h3>{props.content}</h3>
                </div>
            </a>
        </div>
    );
}

export default Card;