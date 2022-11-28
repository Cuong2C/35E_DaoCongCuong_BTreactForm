

//Lưu ý: Đối với reference value (object, array) thì khi cập nhật state trên redux cần clone giá trị ra object hoặc array mới khi return về giá trị mới đó.
const stateDefault =[
    {taiKhoan:'userA',matKhau:'123'},
    {taiKhoan:'userB',matKhau:'456'}
] //OXXX




export const arrNguoiDungReducer = (state = stateDefault,action) =>{
    switch(action.type){
        case 'THEM_NGUOI_DUNG':{
            state.push(action.payload);
            return [...state]; //immutable :tính chất bất biến
        }
        default:return state;
    }
}