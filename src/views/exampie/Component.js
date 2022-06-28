import React from 'react';
import ChildComponent from './ChildComponent';

class Component extends React.Component {

    //oject
    state = {
        name: '',
        jobs: [
            { id: '1', tittle: 'Free', Salary: '500' },
            { id: '2', tittle: 'PQC', Salary: '600' },
            { id: '3', tittle: 'DEV', Salary: '600' }
        ],
        phone: '099554655',
        address: 'Hà Nội'
    }

    handleClick = () => {
        alert('click rồi. ' + this.state.name)
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        return (

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
                    Phone: {this.state['phone']}
                </div>

                <ChildComponent address={this.state.address} jobs={this.state.jobs}
                />

                {/* <div className='button'>
                    <button onClick={() => this.handleClick()}>Click</button>
                </div> */}

            </>
        );
    }
}

export default Component;