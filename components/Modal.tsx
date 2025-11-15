import React, { FC, useEffect, useState, useCallback } from "react"

export interface ModalProps {
  children: React.ReactNode
  trigger: React.ReactNode
}

export interface ModalContentProps {
  children: React.ReactNode
  onClose: () => void
  isClosing: boolean
}

const ModalContent: FC<ModalContentProps> = ({ children, onClose, isClosing }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsAnimating(false), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl lg:max-w-5xl xl:max-w-6xl h-auto bg-white rounded-4xl sm:rounded-5xl lg:rounded-6xl p-8 xs:p-10 sm:p-12 md:p-14 lg:p-18 xl:p-20 shadow-3xl relative transform transition-all duration-300 ease-out prose ${isClosing
        ? 'scale-95 opacity-0'
        : isAnimating
          ? 'scale-95 opacity-0'
          : 'scale-100 opacity-100'
        }`}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl xs:text-2xl leading-none transition-all duration-200 hover:scale-110"
        aria-label="Close modal"
      >
        ×
      </button>
      {children}
    </div>
  )
}

export const Modal: FC<ModalProps> = ({ children, trigger }) => {
  const [open, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open, handleClose]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      handleClose();
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="cursor-pointer"
      >
        {trigger}
      </button>
      {open && (
        <div
          ref={modalRef}
          onClick={handleBackdropClick}
          className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300 ease-out ${isClosing ? 'opacity-0' : 'opacity-100'
            }`}
        >
          <ModalContent onClose={handleClose} isClosing={isClosing}>
            {children}
          </ModalContent>
        </div>
      )}
    </>
  )
}