import React from "react";
import { useTranslation } from "react-i18next";
export const Numbers = () => {
    const { t } = useTranslation();
    return (
        <div id="numbers">
            <div className="test"><img className="line" src="src/img/left.svg"  /></div>
            <img className="num" src="src/img/nums1.svg"  />
            <img src="src/img/nums-icon.svg"  />
            <img className="num" src="src/img/nums2.svg"  />
            <img className="line" src="src/img/right.svg"  />
        </div>
    )
}