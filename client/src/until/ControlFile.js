import React from 'react'
import Table from 'react-bootstrap/Table'
import { BsCloudUploadFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";


export const ControlFile = () => {
    return (
        <div>
            <div>
                <div>Danh sách tài liệu</div>
                <Button style={{ float: "right" }}>
                    <BsCloudUploadFill />
                </Button>
            </div>
            <Table borderless bordered hover style={{ cursor: "pointer" }}>
                <thead>
                    <tr className="table-header">
                        <th>STT</th>
                        <th>Tên tài liệu</th>
                        <th>Kích thước</th>
                        <th>Ngày tạo</th>
                        <th>Phiên bản</th>
                        <th className="chucnang">Chức năng</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </Table>
        </div>
    )
}
