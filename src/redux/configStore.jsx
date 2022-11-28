import {configureStore} from '@reduxjs/toolkit'
import { baiTapGameReducer } from './reducers/baiTapGameReducer';
import { arrNguoiDungReducer } from './reducers/nguoiDungReducer';

export const store = configureStore({
    reducer: {
        //Nơi chứa state của ứng dụng
        fontSize:(state = 30,action) => {
            console.log('action1',action);
            switch(action.type){
                case 'TANG_GIAM_FONTSIZE':{
                    state += action.payload;
                    return state
                };
                default : return state;
            }
        },
        imgSrc:(state= './img/red-car.jpg',action)=>{
            switch(action.type) {
                case 'CHANGE_COLOR':{
                    state = action.payload;
                    return state;
                }
                default : return state;
            }
        },
        arrNguoiDungReducer,
        baiTapGameReducer
    }
})



