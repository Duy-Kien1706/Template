export default function Table( { className, dataUsers } ) {
    return (
        <>
            <div className={` ${ className } border rounded-3`}>
                <div className="p-3 rounded-top-3 " style={{ backgroundColor: "#f0f0f0" }} >
                    <h3>Danh sách đơn vận chuyển</h3>
                    <p className="text-muted ">Tìm kiếm và lọc theo trạng thái</p>
                </div>

                <div className="d-flex justify-content-between px-3 py-2">
                    <input type="text" placeholder="Tìm mã đơn, người nhận..." className="form-control flex-fill w-auto" />
                    <div className="d-flex flex-fill justify-content-around">
                        <button className="btn border bg-dark text-white">Tất cả</button>
                        <button className="btn border">Chờ lấy</button>
                        <button className="btn border">Đang giao</button>
                        <button className="btn border">Đã giao</button>
                    </div>
                </div>

                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "#f0f0f0" }}>#</th>
                            <th style={{ backgroundColor: "#f0f0f0" }}>Mã đơn</th>
                            <th style={{ backgroundColor: "#f0f0f0" }}>Người nhận</th>
                            <th style={{ backgroundColor: "#f0f0f0" }}>Địa điểm</th>
                            <th style={{ backgroundColor: "#f0f0f0" }}>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataUsers.map( ( dataUser,index ) => {
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{dataUser.id ? dataUser.id : "SH00"+index}</td>
                                        <td>{dataUser.receiver}</td>
                                        <td>{dataUser.location}</td>
                                        <td>
                                            <button className="btn border border-dark">{dataUser.status}</button>
                                        </td>
                                    </tr>
                                )
                            } )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}