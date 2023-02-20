import Read from '../components/Read';
import { connect } from 'react-redux';

export default connect(
    function(state){
        var title, desc;
        var state = state.slice;
        if(state.mode === 'WELCOME'){
            title = state.welcome_content.title;
            desc = state.welcome_content.desc;
        } else {
            for(var i=0; i<state.contents.length; i++){
                var d = state.contents[i];
                if(d.id === state.selected_id){
                    title = d.title;
                    desc = d.desc;
                    break;
                }
            }
        }
        return{title:title, desc:desc};
    },

    function(dispatch){
        return {
            onClick:function(id){
                dispatch({type:'READ', id:id});
            }
        };
    }
)(Read);