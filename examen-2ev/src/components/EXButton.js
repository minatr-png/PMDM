import './EXButton.css';

const EXButton = (props) => {
    return (
        <button onClick={props.onClick} type={'submit'}>{props.title}</button>
    );
}

export default EXButton;