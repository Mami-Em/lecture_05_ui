function App() {
    // const [count1,setCount1] = React.useState(1)
    // const [count2,setCount2] = React.useState(2)
    const[state, setState] = React.useState({
        count1: 1,
        count2: 2,
        response: ""
    })
    
    function updateResponse(e) {
        setState ({
            //everything remain the same
            ...state,
            response: e.target.value
        })
    }

    return (
        <div>
            <div>{state.count1} + {state.count2}</div>
            <input onChange = {updateResponse} value = {state.response} />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));