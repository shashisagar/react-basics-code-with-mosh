function Counter(props) {
    function formatCount() {
        return props.counter.value === 0 ? "Zero" : props.counter.value;
    }
    const style = {
        fontSize: "10",
        fontWeight: "bold"
    }
    function getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    return (<div>
        <span style={style} className={getBadgeClasses()}>{formatCount()}</span>
        <button onClick={() => props.onIncrement(props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => props.onDelete(props.counter)} className="btn btn-danger btn-sm m-2">Delete</button>
    </div>);
}



export default Counter;