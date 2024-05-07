import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';


type Props = PropsWithChildren &  {
  className?: string;
}

export const ModalWrapper: React.FC<Props> = ({
  className = '',
  children
}) => {

  return(
    <div
      className={classNames(
        className,
        'fixed w-[100vw] h-[100vh] flex justify-center items-center bg-[#000000] bg-opacity-[40%] ',
        'transition-all ease-in delay-[0.3s] opacity-[0.5],translate-y-[-100vh]'
      )}

    >
      {children}
    </div>
  );
};