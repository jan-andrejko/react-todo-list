import React from 'react';
import { Link } from 'react-router-dom';

const TasksListing = (props) => {
    const renderlist =({datalist}) =>{
        if(datalist){
            return datalist.map((item) => {
                return (
                    <Link to={`/tasks/${item.id}`} key={item.id}>
                        <div className="row">
                            <span className="topTemp">
                                {item.title}
                            </span>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <div>
            {renderlist(props)}
        </div>
    )
}

export default TasksListing;