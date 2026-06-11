import './listpage.scss';
import {listData} from '../../lib/dummydata'
function ListPage(){
    const data=listData;
    return(
        <div className="listPage">
            <h1>List Page</h1>
        </div>
    );
}
export default ListPage;