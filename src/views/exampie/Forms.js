import React from "react";

class Forms extends React.Component {

    state = {
        firstName: "",
        lastName: ""
    }

    handleOnChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleOnChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('data>>> : ', this.state);
    }
    render() {

        return (
            <>
                <form>
                    <label >First name:</label><br />
                    <input type="text" value={this.state.firstName}
                        onChange={(event) => this.handleOnChangeFirstName(event)} /><br />
                    <label >Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleOnChangeLastName(event)} /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
}

export default Forms;