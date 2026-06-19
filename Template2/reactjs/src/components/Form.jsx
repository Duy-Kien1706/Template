import {useState} from "react"
export default function Form({dataUsers,setDataUser}){

    const [dataForm,setDataForm] = useState(
        {
            id: "",
            receiver: "",
            location: "",
            status: ""
        }
    );

    const handleChange = (e)=>{
        return(
            setDataForm(
                {
                    ...dataForm,
                    [e.target.name] : e.target.value
                }
            )
        )
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        setDataUser(
            [
                ...dataUsers,dataForm
            ]
        )
    }


    

    return(
        <>
                    <div className="flex-fill border rounded-3 ">
            <div className="p-3 rounded-top-3 " style={{backgroundColor: "#f0f0f0"}}>
                <h3>Đăng ký hoạt động mới</h3>
                <p className="text-muted ">Nhập thông tin hoạt động</p>
            </div>

            <form className="mt-3 px-3" onSubmit={handleSubmit}>

                <div className="d-flex gap-3">
                    <div className="flex-fill">
                        <div className = "mb-3">
                            <label className="fw-bold">Tên hoạt động</label>
                            <input type="text" placeholder="Nhập tên hoạt động" className="form-control" name = "id" onChange = {handleChange}/>
                        </div>

                        <div>
                            <label className="fw-bold">Hình thức</label>
                            <div className="d-flex gap-3">
                                <div>
                                    <label for="">Trực tiếp</label>
                                    <input type="radio" placeholder="Nhập tên hoạt động" className="form-check-input"
                                        name="location" onChange = {handleChange} value = "Trực tiếp"/>
                                </div>
                                <div>
                                    <label for="">Trực tuyến</label>
                                    <input type="radio" placeholder="Nhập tên hoạt động" className="form-check-input"
                                        name="location" onChange = {handleChange} value = "Trực tuyến"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-fill">
                        <div className = "mb-3">
                            <label className="fw-bold">Câu lạc bộ</label>
                            <select className="form-select" name = "receiver" onChange = {handleChange}>
                                <option selected disabled >Chọn câu lạc bộ</option>
                                <option >CLB IT</option>
                                <option >CLB ABC</option>
                                <option >CLB XYZ</option>
                            </select>
                        </div>

                        <div className = "mb-3">
                            <label className="fw-bold">Trạng thái</label>
                            <select className="form-select" name = "status" onChange = {handleChange}>
                                <option value="" disabled selected>Trạng thái</option>
                                <option >Đang diễn ra</option>
                                <option >Sắp diễn ra</option>
                                <option >Đã Hủy</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button className = "bg-dark text-white btn mb-3" type = "submit">Thêm hoạt động</button>
            </form>
        </div>
        </>
    )
}