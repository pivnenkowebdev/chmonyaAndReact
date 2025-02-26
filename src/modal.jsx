import style from "./index.module.css";
import imagesInfo from "./data/data";
import { useState } from "react";

function Fade({ isActive }) {
    return(
        <>
            <div className={`${style.fade} ${isActive ? style.active : ""}`} data-fade></div>
        </>
    )
}

function Avatar({src}) {
    return(
        <>
            <div className={style.wrapperImg}>
                <img
                    src={src}
                    className={style.imgAvatar}
                />
            </div>
        </>
    )
}

function Card({children, paramsCard}) {
    return(
        <>
            <article className={style.card} data-card>
                {children(paramsCard)}
            </article>
        </>
    )
}

function BtnCard() {
    return(
        <>
            <button className={style.btnCard} data-btn-open>подробнее</button>
        </>
    )
}

function BtnClose() {
    return(
        <>
            <button className={style.btnClose} data-btn-close></button>
        </>
    )
}

function ListCard() {

    const [isFadeActive, setIsFadeActive] = useState(false);

    function handlerCardsState(event) {
        if (event.target.closest("[data-btn-open]")) {
            const card = event.target.closest("[data-card]");
            if (card) {
                setIsFadeActive(true);
                card.classList.add(style.active);
            }
        } else if (event.target.closest("[data-btn-close]")) {
            const card = event.target.closest("[data-card]");
            if (card) {
                setIsFadeActive(false);
                card.classList.remove(style.active);
            }
        }
    }

    return( 
        <>
            <Fade isActive={isFadeActive} />
            <ul className={style.listCards} onClick={handlerCardsState}>
                <li className={style.item}>
                <Card paramsCard={imagesInfo["chmonya-regular"]}>
                        {(paramsCard) => (
                            <>
                                <div className={style.cardFront}>
                                    <h2 className={style.title}>{imagesInfo["chmonya-regular"].title}</h2>
                                    <Avatar src={paramsCard.src}/>
                                    <BtnCard />
                                </div>
                                <div className={style.cardBack}>
                                    <p className={style.description}>{imagesInfo["chmonya-regular"].description}</p>
                                    <BtnClose />
                                </div>
                            </>
                        )}
                    </Card>
                </li>
                <li className={style.item}>
                    <Card paramsCard={imagesInfo["chmonya-zubenko"]}>
                        {(paramsCard) => (
                            <>
                                <div className={style.cardFront}>
                                    <h2 className={style.title}>{imagesInfo["chmonya-zubenko"].title}</h2>
                                    <Avatar src={paramsCard.src}/>
                                    <BtnCard />
                                </div>
                                <div className={style.cardBack}>
                                    <p className={style.description}>{imagesInfo["chmonya-zubenko"].description}</p>
                                    <BtnClose />
                                </div>
                            </>
                        )}
                    </Card>
                </li>
                <li className={style.item}>
                <Card paramsCard={imagesInfo["chmonya-yandex-delivery"]}>
                        {(paramsCard) => (
                            <>
                                <div className={style.cardFront}>
                                    <h2 className={style.title}>{imagesInfo["chmonya-yandex-delivery"].title}</h2>
                                    <Avatar src={paramsCard.src}/>
                                    <BtnCard />
                                </div>
                                <div className={style.cardBack}>
                                    <p className={style.description}>{imagesInfo["chmonya-yandex-delivery"].description}</p>
                                    <BtnClose />
                                </div>
                            </>
                        )}
                    </Card>
                </li>   
                <li className={style.item}>
                <Card paramsCard={imagesInfo["chmonya-vendetta"]}>
                        {(paramsCard) => (
                            <>
                                <div className={style.cardFront}>
                                    <h2 className={style.title}>{imagesInfo["chmonya-vendetta"].title}</h2>
                                    <Avatar src={paramsCard.src}/>
                                    <BtnCard />
                                </div>
                                <div className={style.cardBack}>
                                    <p className={style.description}>{imagesInfo["chmonya-vendetta"].description}</p>
                                    <BtnClose />
                                </div>
                            </>
                        )}
                    </Card>
                </li>
            </ul>
        </>
    )
}

export default ListCard;

// заголовки для карточек
// кнопка
// при нажатии на кнопку открывать модалку