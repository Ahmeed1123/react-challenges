import '../css/style.css';

export default function Modal({isVisible , message , status}) {
    if(isVisible) {
        return (
            <div className="modales">
                <div className="model-content">
                    <h1 className={status}>{message}</h1>
                </div>
            </div>
        );
    } else {
        return (<></>);
    }
}