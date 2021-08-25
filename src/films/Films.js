import React, { Component } from "react"

// CLASS
class Films extends Component {
    // State & Props
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = { 
            loaded: false,
            results: [],
            people: [],
            fname: this.props.fname
        }
        console.log(this.state)
    }

// this is the same goal as useEffect(() => (), [])
async componentDidMount() {
    let res = await fetch("https://ghibliapi.herokuapp.com/films");
    let json = await res.json()
    // only enumerate the key value pais we're updating
    // this is an async method with no execution guarantees
    this.setState({
        // greeting: "Hello, I've loaded",
        loaded: true,
        results: json
    })
}

// After the results are set, if the people [] is empty, get all the people from each film
async componentDidUpdate() {
        
}

    render() {
        let { favNumber } = this.props
        // don't do the below without default values. this.state isn't a prop
        // let {greeting, fname} = this.state;
        return (
            <div>
                {favNumber}
                {!this.state.loaded 
                  ? "Loading"
                    /* Display films with a custom Film Class Comp? */
                  : this.state.results.map(film => <li key={film.id}>{film.title}</li>)
                }
                {/* Display peoples names? */}
            </div>
        )
    }
}

// FUNCTIONAL
// const Films = () => {
//     return (
//         <>
//              This is the films comp
//         </>
//     )
// }
export default Films