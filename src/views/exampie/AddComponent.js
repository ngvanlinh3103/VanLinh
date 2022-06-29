import React from "react";

class AddComponent extends React.Component {

    state = {
        tittle: "",
        Salary: ""
    }

    handleOnChangeTittle = (event) => {
        this.setState({
            tittle: event.target.value
        })
    }
    handleOnChangeSalary = (event) => {
        this.setState({
            Salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.tittle || !this.state.Salary) {
            alert('Missing date');
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            tittle: this.state.tittle,
            Salary: this.state.Salary
        })
        this.setState({
            tittle: '',
            Salary: ''
        })
    }

    render() {

        return (
            <>
                <form>
                    <label >Tittle:</label><br />
                    <input type="text" value={this.state.tittle}
                        onChange={(event) => this.handleOnChangeTittle(event)} /><br />
                    <label >Salary:</label><br />
                    <input type="text" value={this.state.Salary}
                        onChange={(event) => this.handleOnChangeSalary(event)} /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form><br />
            </>
        )
    }
}

export default AddComponent;