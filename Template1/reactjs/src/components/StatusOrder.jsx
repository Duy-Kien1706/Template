export default function StatusOrder({dataUsers}){

    const dangGiao = dataUsers.filter((dataUser)=>{
        return (dataUser.status === "Đang giao")
    }).length

    const daGiao = dataUsers.filter((dataUser)=>{
        return (dataUser.status === "Đã giao")
    }).length


    return(
        <>
            <div className = "d-flex mt-3 ms-3 me-3 gap-3" >
                <div className = "border rounded-3 align-middle text-center flex-fill" style = {{border: "1px solid var(--secondary-color)"}}>
                    <p className = "fw-bold">{dataUsers.length}</p>
                    <p className = "text-muted">Tổng đơn</p>
                </div>
                <div className = "border rounded-3 align-middle text-center flex-fill" style = {{border: "1px solid var(--secondary-color)"}}>
                    <p className = "fw-bold">{dangGiao}</p>
                    <p className = "text-muted">Đang giao</p>
                </div>
                <div className = "border rounded-3 align-middle text-center flex-fill " style = {{border: "1px solid var(--secondary-color)"}}>
                    <p className = "fw-bold">{daGiao}</p>
                    <p className = "text-muted">Đã Giao</p>
                </div>
            </div>
        </>
    )
}