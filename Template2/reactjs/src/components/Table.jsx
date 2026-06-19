export default function Table( { dataUsers } ) {
    return (
        <>
            <div className="flex-fill border rounded-3 mt-3">
                <div className="p-3 rounded-top-3 mb-3 " style={{ backgroundColor: "#f0f0f0" }}>
                    <h3>Danh sách hoạt động</h3>
                    <p className="text-muted">Tìm kiếm và lọc theo trạng thái</p>
                </div>

                <div className="d-flex justify-content-between px-3 py-2">
                    <input type="text" placeholder="Tìm tên hoạt động,CLB..." className="form-control flex-fill w-auto" />

                    <div className="d-flex flex-fill justify-content-end gap-3">
                        <button className="btn border bg-dark text-white">Tất cả</button>
                        <button className="btn border">Sắp diễn ra</button>
                        <button className="btn border">Đang giao</button>
                        <button className="btn border">Đã giao</button>
                    </div>
                </div>

                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "#f0f0f0" }}>#</th>
                            <th style={{ backgroundColor: "#f0f0f0" }}>Hoạt động</th>
                            <th style={{ backgroundColor: "#f0f0f0" }}>Câu bộ</th>
                            <th style={{ backgroundColor: "#f0f0f0" }}>Hình thức</th>
                            <th style={{ backgroundColor: "#f0f0f0" }}>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            dataUsers.map(( dataUser,index ) => {
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{dataUser.id}</td>
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