import './index.css';
export default function Circular_progressbar(props) {
    let fraction;
    if(props.value=='33')
        fraction = '1/3'
    else if(props.value=='66')
        fraction='2/3'
    else
        fraction='3/3'
    return <div
    role="progressbar"
    aria-valuenow={props.value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={{ '--value': props.value }}
>{fraction}</div>
}