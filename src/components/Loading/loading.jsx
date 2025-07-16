import { SyncLoader } from "react-spinners"
import "./loading.css"

const Loading = () => {
    return(
        <div className="loadingContainer">
            <SyncLoader color="#97fd3f" />
        </div>
    )
}

export default Loading