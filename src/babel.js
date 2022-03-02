function Hello(props) {
    return (
        <div>
            Hello, {props.name}!
        </div>
    )
}

function App() {
        return (
            <div>
                <Hello name="Jack" />
                <Hello name="Marry" />
            </div>
        );
    }

ReactDOM.render(<App />, document.querySelector("#app"));