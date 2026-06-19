export default function Status({dataUsers}) {

    
    const sapDienRa = dataUsers.filter((item)=>{
        return(
            item.status === "Sắp diễn ra"
        )
    })

    const hoanThanh = dataUsers.filter((item)=>{
        return(
            item.status === "Hoàn thành"
        )
    })

    return (
        <div className="d-flex mt-3 ms-3 me-3 gap-3">
            <div className="border rounded-3 align-middle text-center flex-fill"
                style={{border: "1px solid var(--secondary-color)"}}>
                <p className="fw-bold">{dataUsers.length}</p>
                <p className="text-muted">Tổng hoạt động</p>
            </div>
            <div className="border rounded-3 align-middle text-center flex-fill"
                style={{border: "1px solid var(--secondary-color)"}}>
                <p className="fw-bold">{sapDienRa.length}</p>
                <p className="text-muted">Sắp diễn ra</p>
            </div>
            <div className="border rounded-3 align-middle text-center flex-fill "
                style={{border: "1px solid var(--secondary-color)"}}>
                <p className="fw-bold">{hoanThanh.length}</p>
                <p className="text-muted">Hoàn thành</p>
            </div>
        </div>
    )
}