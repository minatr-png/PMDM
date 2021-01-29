import './EXButton.css';

const EXButton = (props) => {
    return (
        <button onClick={props.onClick} type={'submit'}>{props.text}</button>
    );
}

export default EXButton;