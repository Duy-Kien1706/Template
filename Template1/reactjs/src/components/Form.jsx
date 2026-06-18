import { useState } from "react"
export default function Form( { className, setDataUser, dataUsers } ) {

    const [ dataForm, setDataForm ] = useState(
        {
            receiver: "",
            location: "",
            status: ""
        }
    )

    const handleChange = ( e ) => {
        return setDataForm(
            {
                ...dataForm,
                [ e.target.name ]: e.target.value
            }
        )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        return setDataUser(
            [
                
                    ...dataUsers, dataForm
                
            ]
        )
    }


    return (
        <>
            <div className={`${ className } border rounded-3`}>
                <div className="p-3 rounded-top-3 " style={{ backgroundColor: "#f0f0f0" }} >
                    <h3>Tạo đơn mới</h3>
                    <p className="text-muted ">Nhập thông tin vận chuyển</p>
                </div>

                <form className="mt-3 px-3" onSubmit={handleSubmit}>
                    <div>
                        <label className="form-label fw-bold">Người nhận</label>
                        <input type="text" placeholder="Nhập tên người nhận" className="form-control" name="receiver" onChange={handleChange} />
                    </div>

                    <div>
                        <label className="form-label fw-bold" >Địa điểm</label>
                        <select name="" id="" className="form-select" name="location" onChange={handleChange}>
                            <option defaultValue="" selected disabled>--Chọn Địa điểm--</option>
                            <option >Hà Nội</option>
                            <option >Hải Phòng</option>
                            <option >Cần Thơ</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-label fw-bold" >Loại hàng</label>
                        <div className="d-flex gap-3">
                            <div>
                                <input type="radio" className="form-check-input" defaultChecked name="loaihang" />
                                <label className="form-check-label">Thường</label>
                            </div>

                            <div>
                                <input type="radio" className="form-check-input" name="loaihang" />
                                <label className="form-check-label">Nhanh</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="form-label fw-bold" >Trạng thái</label>
                        <select name="" id="" className="form-select" name="status" onChange={handleChange}>
                            <option defaultValue="" selected disabled>--Chọn trạng thái--</option>
                            <option >Chờ lấy</option>
                            <option >Đang giao</option>
                            <option >Đã giao</option>
                        </select>
                    </div>

                    <button type="submit" className="text-white fw-bold w-100 bg-dark btn mt-5">Thêm đơn</button>
                </form>
            </div>
        </>
    )
}