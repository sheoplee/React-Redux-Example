import { createSlice } from '@reduxjs/toolkit';

const sliceStore = createSlice({
    name: 'sliceStore',
    initialState: { 
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
     },
    reducers: {
        WELCOME: (state, action) => {
            state.mode = 'WELCOME';
        },
        READ: (state, action) => {
            state.mode = 'READ';
            state.selected_id = action.id;
        },
        CREATE: (state, action) => {
            state.mode = 'CREATE';
        },
        UPDATE: (state, action) => {
            state.mode = 'UPDATE';
        },
        CREATE_PROCESS: (state, action) => {
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
        },
        UPDATE_PROCESS: (state, action) => {
            var newContents = [...state.contents];
            for(var i=0; i<state.max_content_id; i++){
                if(newContents[i].id === action.id){
                    newContents[i].title = action.title;
                    newContents[i].desc = action.desc;
                    break;
                }
            }
            state.contents = newContents;
            state.mode = 'READ';
            state.selected_id = action.id;
        },
        DELETE_PROCESS: function (state, action) {
            var newContents = state.contents.filter(function(e){
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
        },
      
    }
  
});

export default sliceStore;
export const {WELCOME, READ, CREATE, UPDATE} = sliceStore.actions;