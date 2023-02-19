import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore} from 'redux'

var initState = {
    mode: 'WELCOME',
    welcome_content:{
        title:'WEB',
        desc:'Hello, WEB'
    },
    selected_id:2,
    max_content_id:3,
    contents:[
        {id:1,title:'HTML',desc:'HTML is ..'},
        {id:2,title:'CSS', desc:'CSS is ..'},
        {id:3,title:'JS', desc:'JSS is ..'}
    ]
}

function reducer(state=initState, action){
    if(action.type === 'WELCOME'){
        return {...state, mode:'WELCOME'};
    }
    else if(action.type === 'READ'){
        return {...state, mode:'READ', selected_id:action.id};
    }
    else if(action.type === 'CREATE'){
        return {...state, mode:'CREATE'};
    }
    else if(action.type === 'UPDATE'){
        return {...state, mode:'UPDATE'};
    }
    else if(action.type === 'CREATE_PROCESS'){
        var newID = state.max_content_id + 1;
        var newContents = [...state.contents, {
          id:newID,
          title:action.title,
          desc:action.desc
        }];
        return {
          ...state, 
          contents:newContents,
          max_content_id:newID,
          mode:'READ',
          selected_id:newID
        }
      }
      else if(action.type === 'UPDATE_PROCESS'){
        newContents = [...state.contents];
        for(var i=0; i<state.max_content_id; i++){
            if(newContents[i].id === action.id){
                newContents[i].title = action.title;
                newContents[i].desc = action.desc;
                break;
            }
        }
        return {
          ...state, 
          contents:newContents,
          mode:'READ',
          selected_id:action.id
        }
      }
      else if(action.type === 'DELETE_PROCESS'){
        newContents = state.contents.filter(function(e){
            if(e.id === state.selected_id){
                return false;
            } else {
                return true;
            }
        });
        return {
            ...state, 
            contents:newContents,
            mode:'WELCOME'  
        }
      }
  
    return state;
}

export default createStore(reducer, composeWithDevTools());