import Nav from '../components/Nav';
import { connect } from 'react-redux';

export default connect(
    function(state){
        return{data:state.slice.contents};
    },

    function(dispatch){
        return {
            onClick:function(id){
                dispatch({type:'sliceStore/READ', id:id});
            }
        };
    }
)(Nav);