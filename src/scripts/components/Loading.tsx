import '../../styles/Loading.css'

const Loading : React.FC = ()=>{
    return(
        <div className="loadingSpinner">
            <div className="doubleBounce1"></div>
            <div className="doubleBounce2"></div>
        </div>
    )
}

export default Loading;