export default function Form(){
    return(
        <form className="border rounded-3 p-3 flex-fill" style={{height: "440px", bordeTop: "var(--bs-primary) solid 6px !important"}}>
            <label style={{color: "var(--primary-color)"}}>+ Thêm hồ sơ mới</label>


            <div className="mb-3">
                <label for="">Tên trường</label>
                <input type="text" className="form-control" placeholder="VD: Trường THPT Nguyễn Huệ"/>
            </div>

            <div className="mb-3">
                <label for="">Đơn vị quản lý</label>
                <select name="" id="" className="form-select">
                    <option value="" selected disabled>--Chọn đơn vị--</option>
                    <option>Phòng GD&ĐT TP.Thủy Lợi</option>
                    <option>Phòng GD&ĐT TP.Thủy Nguyên</option>
                    <option>Phòng GD&ĐT TP.Thủy Hồng Bàng</option>
                </select>
            </div>


            <div className="mb-3">
                <label for="">Trạng thái chuyển đổi</label>
                <select name="" id="" className="form-select">
                    <option value="" selected disabled>--Chọn Trạng thái--</option>
                    <option>Đang triển khai</option>
                    <option>Chưa bắt đầu</option>
                    <option>Hoàn thành</option>
                </select>
            </div>

            <div className="mb-3">
                <label for="">Mô tả tiến độ</label>
                <input type="text" className="form-control" placeholder="Mô tả tình hình chuyển đổi số"/>
            </div>

            <button className="btn btn-primary w-100 text-white fw-bold">+ Thêm hồ sơ</button>
        </form>
    )
}