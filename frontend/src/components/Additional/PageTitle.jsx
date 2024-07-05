import React from 'react'

function PageTitle({ text1, text2 }) {
    return (
        <div className="standard-responsive">
            <h2 className="text-slate-900 font-semibold text-[45px] sm:text-[50px] lg:text-[55px] mt-14">
                {text1}
            </h2>
            {text2 &&
                <h2 className="text-slate-500 text-[15px] sm:text-[17.5px] lg:text-[20px] mb-10">{text2}</h2>
            }
        </div>
    )
}

export default PageTitle
