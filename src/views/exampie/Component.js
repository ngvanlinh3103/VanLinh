import React from 'react';

class Component extends React.Component {

    handleClick = () => {
        alert('click rồi.')
    }

    render() {

        //oject
        this.state = {
            name: 'NVL',
            job: 'PQC'
        }

        return (
            // neu ko muon bov banh the div co the dung:
            // "<>code</>"or"<React.Fragment>code</React.Fragment>"

            // <div className='cha'>
            <>
                <div className='first'>
                    hello Component, ten toi la: {this.state.name}
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