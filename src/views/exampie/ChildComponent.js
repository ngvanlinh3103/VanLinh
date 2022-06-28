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

    render() {

        let { address, jobs } = this.props;
        let { showJobs } = this.state;

        //ss showJobs ===true nếu đúng lấy pt1 sai lấy phần tử thứ 2
        let check = showJobs === true ? 'showJobs = true' : 'showJobs=false';
        //console.log('Conditional: ', check);

        return (
            <>
                <div>Địa Chỉ: {address}</div>

                {showJobs === false ?
                    <button className="show" onClick={() => this.clickShowHide()}>Show</button>
                    :
                    <>
                        <div className="job-list">
                            {
                                jobs.map((item, index) => {
                                    return (

                                        <div key={item.id}>
                                            {item.tittle} - {item.Salary} $
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className="hide" onClick={() => this.clickShowHide()}>Hide</button>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;