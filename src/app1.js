function App() {

    const amazing = [
        {
            name: 'Mami',
            descript: 'Long descript',
            birthday: '04/13/1998'
        },
        {
            name: 'Dera',
            descript: 'Long descript',
            birthday: '05/03/1998'
        }
    ]

    return (
        <div>
            {amazing.map((amaz) => (
                // need a key for maping
                <div key={amaz.name}>
                    <div>{amaz.name}</div>
                    <div>{amaz.descript}</div>
                    <div>{amaz.birthday}</div>
                </div>
                )
            )}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));