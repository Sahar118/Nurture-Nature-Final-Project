import React from 'react'
import '../styles/LoadingLogo.style.css'
const LoadingLogo = () => {
    return (
        <div className="contents-loading">
            <div className="content__container-loading">
                <p className="content__container__text1-loading">
                    N
                </p>
                <p className="content__container__text2-loading">
                    TURE
                </p>
                <ul className="content__container__list-loading">
                    <li className="content__container__list__item-loading">UR</li>
                    <li className="content__container__list__item1-loading">A</li>
                </ul>
            </div>
        </div>
    )
}

export default LoadingLogo;