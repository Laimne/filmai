import { useContext } from 'react';
import Cats from "../../Context/Cats";
import Line from './Line';

function List() {

    const { cats } = useContext(Cats);

    return (
        <div className="card m-4">
            <h5 className="card-header">Cats List</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        cats?.map(s => <Line key={s.id} cat={s} />)
                    }
                </ul>
            </div>
        </div>
    );
}

export default List;