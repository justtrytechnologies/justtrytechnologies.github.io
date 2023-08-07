import React, { useEffect, useState } from "react";

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scroll = document.documentElement.scrollTop;
        setVisible(scroll > 200)
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    useEffect(() => window.addEventListener('scroll', toggleVisible));

    return (
        <div className="scroll-to-top">
            <div onClick={scrollToTop} className={visible ? 'd-block scroll-arrow' : 'd-none'}>
                {" "}<i className="bi bi-arrow-up fs-2"></i>
            </div>
        </div>
    )
};

export default ScrollToTop