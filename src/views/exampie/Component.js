import React from 'react';

class Component extends React.Component {

    render() {

        //oject
        this.state = {
            name: 'NVL',
            job: 'dsada'
        }

        return (
            // neu ko muon bov banh the div co the dung:
            // "<>code</>"or"<React.Fragment>code</React.Fragment>"

            // <div className='cha'>
            <>
                <div className='first'>
                    hello Component, ten toi la: {this.state.name}
                </div>
                <div className='second'> culi: {this.state['job']}</div>
            </>
            // </div>
        );
    }
}

export default Component;