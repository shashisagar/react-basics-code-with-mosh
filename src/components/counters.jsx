import Counter from './counter';
const Counters = (props) => {
    return (<>
        <button onClick={props.onReset} className="btn btn-secondary btn-sm">Reset</button>
        {props.countArray.map(m => <Counter key={m.id} value={m.value} counter={m} onDelete={props.onDelete}
        onIncrement={props.onIncrement} selected={true}>
            <h4>Title #{m.id}</h4>
        </Counter>
        )}
    </>);
}

export default Counters;