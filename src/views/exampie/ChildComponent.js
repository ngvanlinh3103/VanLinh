import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    clickShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        this.props.deleteJob(job);
    }

    render() {

        let { address, jobs } = this.props;
        let { showJobs } = this.state;

        //ss showJobs ===true nếu đúng lấy pt1 sai lấy phần tử thứ 2
        let check = showJobs === true ? 'showJobs = true' : 'showJobs=false';
        //console.log('Conditional: ', check);

        return (
            <>
                {showJobs === false ?
                    <button className="show" onClick={() => this.clickShowHide()}>Show</button>
                    :
                    <>
                        <div className="job-list">
                            {
                                jobs.map((item, index) => {
                                    return (

                                        <div key={item.id}>
                                            {item.tittle} - {item.Salary}$ <></>
                                            <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className="hide" onClick={() => this.clickShowHide()}>Hide</button>
                    </>
                }
                <br />
                <div>Địa Chỉ: {address}</div>
            </>
        )
    }
}

export default ChildComponent;