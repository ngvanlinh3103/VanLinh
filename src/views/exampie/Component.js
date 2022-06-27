import React from 'react';

class Component extends React.Component {

    //oject
    state = {
        name: '',
        job: 'PQC'
    }

    handleClick = () => {
        alert('click rồi. ' + this.state.name)
    }

    handleChangeName = (event) => {
        //console.log(event)
        this.setState({
            name: event.target.value
        })
    }

    render() {

        return (
            // neu ko muon bov banh the div co the dung:
            // "<>code</>"or"<React.Fragment>code</React.Fragment>"

            // <div className='cha'>
            <>
                <div className='name'>
                    <input type="text" value={this.state.name}
                        onChange={(event) => this.handleChangeName(event)}
                    />
                </div>
                <div className='first'>
                    hello , ten toi la: {this.state.name}
                </div>
                <div className='second'>
                    culi: {this.state['job']}
                </div>
                <div className='button'>
                    <button onClick={() => this.handleClick()}>Click</button>
                </div>
            </>
            // </div>
        );
    }
}

export default Component;