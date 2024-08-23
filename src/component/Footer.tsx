import { useState } from "react";
import rulesImage from "../assets/mobile-rules-modal.jpg";

const Footer = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="card w-full lg:items-end md:items-end sm:items-center px-5 py-3">
        <button
          onClick={() => openModal()}
          className="btn w-16 btn-outline lg:px-5 sm:md-5 sm:px-20"
        >
          Rules
        </button>
      </div>
      {isOpen && (
        <dialog className="modal " open>
          <div className="modal-box bg-white">
            <form
              method="dialog"
              onSubmit={(e) => {
                e.preventDefault();
                closeModal();
              }}
            >
              {/* Close button */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-950"
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg text-gray-950 uppercase">Rules</h3>
            <figure>
              <img src={rulesImage} alt="rules" />
            </figure>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Footer;
