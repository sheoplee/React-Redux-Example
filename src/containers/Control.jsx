import Control from '../components/Control';
import { connect } from 'react-redux';

export default connect(null,
    function(dispatch){
        return {
            onClick:function(mode){
                if(mode === 'sliceStore/DELETE_PROCESS'){
                    if(!window.confirm('정말로 삭제하시겠습니까?')){
                        return;
                    }
                }
                dispatch({type:mode});
            }
        };
    }
)(Control);