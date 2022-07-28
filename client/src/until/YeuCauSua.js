import React, { useContext } from 'react'
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { DeTaiCBContext } from '../contexts/DeTaiCBContext';

const YeuCauSua = () => {
    const { detaicbState: { detaicb }, showYeuCauSua, setShowYeuCauSua } = useContext(DeTaiCBContext)
    return (
        <Modal show={showYeuCauSua} onHide={() => setShowYeuCauSua(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Yêu cầu sửa</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nội dung chỉnh sửa</Form.Label>
                        <Form.Control as="textarea" row={10}></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Lưu</Button>
                    <Button variant="secondary" onClick={() => setShowYeuCauSua(false)}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>

    )
}
export default YeuCauSua