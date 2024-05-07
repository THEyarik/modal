import React, { useEffect, useState } from 'react';
import { ModalWrapper } from './ModalWrapper';
import { IoCloseOutline } from 'react-icons/io5';
import classNames from 'classnames';

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
    }, 100);
  };

  useEffect(() => {
    setShowContent(true);
  }, []);

  return(
    <ModalWrapper showContent={showContent}>
      <div

        className={classNames('max-w-[600px] w-full bg-gray-500 rounded-[30px] max-h-[400px] h-full relative z-[2] ',
          'transition-all duration-300 ease-[cubic-bezier(0,1,0.35,2)]  opacity-[0] translate-y-[-50%]',
          showContent ? 'opacity-[100%] translate-y-[0%]' : ''
        )}
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
