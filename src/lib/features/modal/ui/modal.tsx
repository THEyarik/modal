import React, { useEffect, useState } from 'react';
import { ModalWrapper } from './ModalWrapper';
import { IoCloseOutline } from 'react-icons/io5';
import classNames from 'classnames';
import { ModalMoveToSideAnimationVariant } from '../model/type';

type Props = {
  showModalState: boolean;
  setShowModalState: (b: boolean) => void;
  openAnimation: ModalMoveToSideAnimationVariant;
  closeAnimation: ModalMoveToSideAnimationVariant
}
export const Modal: React.FC<Props> = ({
  showModalState,
  setShowModalState,
  openAnimation = ModalMoveToSideAnimationVariant.SLIDE_DOWN,
  closeAnimation = ModalMoveToSideAnimationVariant.SLIDE_UP
}) => {
  const [showContent, setShowContent] = useState(false);
  const MOVE_TO_ANIMATION_VARIANT: Record<ModalMoveToSideAnimationVariant, string> = {
    [ModalMoveToSideAnimationVariant.SLIDE_DOWN] : 'translate-y-[100%]',
    [ModalMoveToSideAnimationVariant.SLIDE_UP]   : 'translate-y-[-100%]',
    [ModalMoveToSideAnimationVariant.SLIDE_LEFT] : 'translate-x-[-100%]',
    [ModalMoveToSideAnimationVariant.SLIDE_RIGHT]: 'translate-x-[100%]'
  };
  const [animationClass, setAnimationClass] = useState(MOVE_TO_ANIMATION_VARIANT[openAnimation]);
  const closeModal = () => {
    setAnimationClass(MOVE_TO_ANIMATION_VARIANT[closeAnimation]);
    setShowContent(false);
    setTimeout(() => {
      setShowModalState(!showModalState);
    }, 300);
  };
  useEffect(() => {
    setShowContent(true);
  }, []);
  return(
    <ModalWrapper showContent={showContent}>
      <div
        className={classNames(
          'max-w-[600px] w-full bg-gray-500 rounded-[30px] max-h-[400px] h-full relative z-[2] ',
          'transition-all duration-300 opacity-[0]',
          showContent ? 'translate-x-[0%] translate-y-[0%] opacity-[1] ease-[cubic-bezier(0,1,0.35,1.5)]' :
            `ease-[cubic-bezier(2,0.35,1,0)] ${animationClass}`
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
