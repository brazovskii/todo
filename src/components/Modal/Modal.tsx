import React, {FC} from "react";
import "./style.scss";

type IModalBasket = {
    active: boolean;
    setActive: (active: boolean) => void;
}

const Modal: FC<IModalBasket> = ({active, setActive, children}) => {
    return (
        <div className={active ? 'modal active' : "modal"} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : "modal__content"}
                 onClick={e => e.stopPropagation()}>
                <div className={'modal__body'}>
                    <button className={'modal__close'} onClick={() => setActive(false)}>{'⮿'}</button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal;