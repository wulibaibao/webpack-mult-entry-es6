import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

const { useState , useEffect } = React;

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    // 与 componentDidMount 和 componentDidUpdate 类似:
    useEffect(() => {
        // 通过浏览器自带的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });
  
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
        </div>
    );
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: 'coconut',count : 0};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        console.log( this.state )
        // alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
  
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favorite La Croix flavor:
                        <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Example></Example>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <FlavorForm></FlavorForm>
    </div>, 
    document.getElementById('root')
);