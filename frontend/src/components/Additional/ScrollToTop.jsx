import React from 'react'

function ScrollToTop() {
    const jumpTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className="flex justify-end">
            <div className="bg-[#0e355e] rounded-full p-3 mb-5 mr-5">
                <img onClick={jumpTop} src="/general/jump-to-top.svg" alt="top" className="h-7 cursor-pointer" />
            </div>
        </div>
    )
}

export default ScrollToTop
