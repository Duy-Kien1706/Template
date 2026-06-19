export default function Header() {
    return (
        <header className="d-flex  algin-items-center border px-4 py-2 rounded-3 mb-3"
            style={{border: "solid 1px var(--secondary-color)"}}>
            <div className="d-flex align-items-center gap-2 col-6">
                <p className="m-0 p-3 border border-2 rounded-3 border-dark fw-bold">TLU</p>
                <div>
                    <h3>Quản lý hoạt động ngoại khóa</h3>
                    <p>Đăng kí và theo dõi hoạt động sinh viên</p>
                </div>
            </div>

            <div className="d-flex align-items-center justify-content-around col-6">
                <p className="fw-bold border rounded-3 px-3 py-1"
                    style={{border: "solid 1px var(--secondary-color)", backgroundColor: "#f0f0f0"}}>
                    Hoạt động</p>
                <p>Sinh viên</p>
                <p>Lịch trình</p>
                <p>Thống kê</p>
            </div>
        </header>
    )
}



