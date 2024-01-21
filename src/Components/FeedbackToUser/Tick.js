import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Tick(props){
    return(
        <div className="flex flex-row mt-2">
                <FontAwesomeIcon icon={faCheckCircle} style={{color: props.color === 'green' ? '#00BC1E':'#A6A6A6'}} className="w-3 h-6"/>
                <div className={`ml-2 ${props.color === "green" ? 'text-green-600' : 'text-neutral-400'} text-base font-bold font-['Anderson Grotesk']`}>{props.message}</div>
        </div>
    )
}