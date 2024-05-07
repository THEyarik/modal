import React, { useState } from 'react';
import { Modal } from '../features/modal/ui/modal';
import { ModalMoveToSideAnimationVariant } from '../features/modal/model/type';

export const App: React.FC = () => {
  const [showModalState, setShowModalState] = useState(false);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      {showModalState &&
          <Modal
            openAnimation={ModalMoveToSideAnimationVariant.SLIDE_DOWN}
            closeAnimation={ModalMoveToSideAnimationVariant.SLIDE_LEFT}
            showModalState={showModalState}
            setShowModalState={setShowModalState}
          />
      }
      <button
        className="text-[20px] bg-green-800 text-white rounded-[30px] py-[20px] px-[60px] transition-all ease
        duration-200 hover:border-[1px] hover:border-green-800 hover:bg-white hover:text-green-800"
        onClick={() => {setShowModalState(!showModalState);}}
      >
        Open Modal
      </button>
    </div>
  );
};

