"use client";

function Modal({ onClose, children, isOpen }) {
    const handleClose = (e) => {
        if (e.target.id == "base-modal") {
            onClose();
        }
    };
    if (!isOpen) return null;
    return (
        <>
            <div
                onClick={handleClose}
                id="base-modal"
                className="fixed w-screen h-screen z-50 bg-gray-500 bg-opacity-50 top-0 right-0 flex justify-center items-center"
            >
                {children}
            </div>
        </>
    );
}

export default Modal;
