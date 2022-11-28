


const stateDefault = {
    arrXucXac: [
        { img: './img/1.png', diem: 1 },
        { img: './img/2.png', diem: 2 },
        { img: './img/3.png', diem: 3 },
    ],
    diemCuoc: true, //true: tài, false :xỉu
    soBanThang: 0,
    soLanCuoc: 0
};
export const baiTapGameReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            let newState = { ...state };
            newState.diemCuoc = action.payload;
            return newState;
        }
        case 'PLAY_GAME': {
            let newState = { ...state };
            //arrXXNN = [{},{},{}];
            let arrXXNN = [];
            for (let i = 0; i < 3; i++) {
                //Mỗi lần lặp random tạo số ngẫu nhiên
                let soNN = Math.floor(Math.random() * 6) + 1;
                //Từ số ngẫu nhiên tạo ra ob xúc xắc ngẫu nhiên
                let xxNN = { img: `./img/${soNN}.png`, diem: soNN };
                //Đưa vào mảng xúc xắc mới
                arrXXNN.push(xxNN);
            }
            //Cập nhật kết quả
            let diem = 0;
            for (let xx of arrXXNN) {
                diem += xx.diem;
            }
            if ((diem > 11 && newState.diemCuoc == true) || (diem <= 11 && newState.diemCuoc == false)) {
                newState.soBanThang += 1;
            }
            //Cập nhật lại state
            newState.arrXucXac = arrXXNN;
            //Cập nhật số lần cược
            newState.soLanCuoc += 1;
            return newState;
        }
        default: return state;
    }
}


