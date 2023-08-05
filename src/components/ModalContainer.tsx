import {cloneElement, ReactElement, ReactNode, useState} from 'react';
import Modal from 'react-bootstrap/Modal';

type ModalButtonProps = {
    title: string;
    body: ReactElement<{ handleClose: () => void }>;
    children: ReactNode;
}

function ModalContainer({ title, body, children}: ModalButtonProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{cloneElement(body, { handleClose })}</Modal.Body>
            </Modal>
            <div onClick={handleShow}>{children}</div>
        </>
    );
}

export default ModalContainer;