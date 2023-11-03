import styles from "./error.module.css";
import { Link } from "react-router-dom";
function Error(params) {
    
return  <div className={styles.errorWrapper}>

<div className={styles.errorHeader}>Error 404 - Page Not Found</div>
<div  className={styles.errorBody}>Go Back To 
    <Link to='/' className={styles.homelink}> Home</Link>
   </div>
</div>

}

export default Error;