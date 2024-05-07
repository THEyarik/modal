import React, { useEffect, useState } from 'react';
import { ModalWrapper } from './ModalWrapper';
import { IoCloseOutline } from 'react-icons/io5';

type Props = {
  showModalState: boolean;
  setShowModalState: (b: boolean) => void;
}
export const Modal: React.FC<Props> = ({
  showModalState,
  setShowModalState
}) => {
  const [showContent, setShowContent] = useState(false);

  const closeModal = () => {
    setShowContent(false);
    setTimeout(() => {
      setShowModalState(!showModalState);
    }, 200);
  };

  useEffect(() => {
    setShowContent(true);
  }, []);

  return(
    <ModalWrapper>
      <div
        className={`max-w-[600px] w-full bg-gray-500 rounded-[30px] max-h-[400px] h-full relative z-[2] 
        transition-all ease-in delay-[0.1s] opacity-[0.5] translate-y-[-100vh]
        ${showContent ? 'translate-y-[0] opacity-[1]' : ''}`}
      >
        <div className=" p-[40px] flex justify-center items-center h-full">
          <IoCloseOutline
            className="absolute top-[10px] right-[10px] text-[40px] text-white cursor-pointer"
            onClick={closeModal}
          />
          <p className="text-white text-[40px]">
                    Hello.I am modal window
          </p>
        </div>
      </div>

    </ModalWrapper>
  );
};
