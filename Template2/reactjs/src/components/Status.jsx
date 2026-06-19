export default function Status() {
    return (
        <div className="d-flex mt-3 ms-3 me-3 gap-3">
            <div className="border rounded-3 align-middle text-center flex-fill"
                style={{border: "1px solid var(--secondary-color)"}}>
                <p className="fw-bold">5</p>
                <p className="text-muted">Tổng hoạt động</p>
            </div>
            <div className="border rounded-3 align-middle text-center flex-fill"
                style={{border: "1px solid var(--secondary-color)"}}>
                <p className="fw-bold">2</p>
                <p className="text-muted">Sắp diễn ra</p>
            </div>
            <div className="border rounded-3 align-middle text-center flex-fill "
                style={{border: "1px solid var(--secondary-color)"}}>
                <p className="fw-bold">3</p>
                <p className="text-muted">Hoàn thành</p>
            </div>
        </div>
    )
}