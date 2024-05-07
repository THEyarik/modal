import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';


type Props = PropsWithChildren &  {
  className?: string;
  showContent: boolean;
}

export const ModalWrapper: React.FC<Props> = ({
  className = '',
  children,
  showContent
}) => {

  return(
    <div
      className={classNames(
        className,
        'fixed w-[100vw] h-[100vh] flex justify-center items-center bg-[#000000] bg-opacity-0 ',
        'transition-all ease duration-[0.1s]',
        showContent ? 'bg-opacity-30' : ''
      )}
    >
      {children}
    </div>
  );
};