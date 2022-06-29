import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

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

    //add job chuyền từ Component con lên cha
    addNewJob = (job) => {
        // let currentJob = this.state.jobs;
        // currentJob.push(job);

        this.setState({
            jobs: [... this.state.jobs, job]
            // jobs: currentJob
        })
    }

    //delete job chuyền từ Component child lên cha
    deleteJob = (job) => {
        console.log('pt xoa: ', job);
        let currentJobs = this.state.jobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            jobs: currentJobs
        })
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

                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    address={this.state.address} jobs={this.state.jobs}
                    deleteJob={this.deleteJob}
                />

            </>
        );
    }
}

export default Component;