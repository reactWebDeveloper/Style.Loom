import { useState, useRef } from 'react';
import './FAQComponent.css'
import { exportedFAQCardData } from '../../Data/FAQComponentData/FAQComponentData';
import AfBackImg from '../../assets/imgs/Vector.png'
import TitleComponent from '../TitleComponent/TitleComponent';
export default function FAQComponent() {
    const btns = [
        {
            filter: "All",
            txt: "All"
        },
        {
            filter: "Ordering",
            txt: "Ordering"
        },
        {
            filter: "Shipping",
            txt: "Shipping"
        },
        {
            filter: "Returns",
            txt: "Returns"
        },
        {
            filter: "Support",
            txt: "Support"
        }
    ]

    const [activeBtn, setActiveBtn] = useState("All");

    function activeTab(filter) {
        setActiveBtn(filter);
    }

    const [isHide, setisHide] = useState(true);

    const hideSideRefs = useRef([]);

    const toggleAll = () => {
        hideSideRefs.current.forEach(ref => {
            if (ref) {
                ref.style.display = ref.style.display === 'block' ? 'none' : 'block';
            }
            if(ref.style.display==='block'){
                setisHide(false);
            }else{
                setisHide(true);
            }
        });
    };

    return (
        <div className='Af-FAQComponent-father p-162'>
            <div className='Af-FAQComponent'>
                <div className='Af-FAQComponent-title border2'>
                    <h2 className='text-48'>
                        Have Questions? We Have Answers.
                    </h2>
                    <p className='text-18'>Ease into the world of StyleLoom with clarity. Our FAQs cover a spectrum of topics.</p>
                    
                    {/* <TitleComponent
                    title={" Have Questions? We Have Answers."}
                    desc={"Ease into the world of StyleLoom with clarity. Our FAQs cover a spectrum of topics."}
                    img={AfBackImg}
                    /> */}
                    <div className='Af-FAQComponent-btns'>
                        {btns.map((btn, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`Af-FAQ-btn text-18 rounded-12 border1 ${activeBtn == btn.filter ? "AF-activeBtn" : "Af-FAQ-btn"}`}
                                    onClick={() => activeTab(btn.filter)}
                                >
                                    {btn.txt}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className='Af-FAQComponent-cards '>
                    {exportedFAQCardData.map((e) => {
                        if (activeBtn === e.filter) {
                            return e.btn.map((b, index) => {
                                const refIndex = Math.floor(index / 2);
                                if (index % 2 === 0) {
                                    return (
                                        <div
                                            className='Af-left-border'
                                            id={`card${index}`}
                                            key={`left-${index}`}>
                                            <h3 className='text-24'>
                                                {b.title}
                                            </h3>
                                            <p className='text-18'>
                                                {b.desc}
                                            </p>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            ref={(el) => hideSideRefs.current[refIndex] = el}
                                            className='Af-left-right-border'
                                            id={`card${index}`}
                                            key={`right-${index}`}
                                        >
                                            <h3 className='text-24'>
                                                {b.title}
                                            </h3>
                                            <p className='text-18'>
                                                {b.desc}
                                            </p>
                                        </div>
                                    );
                                }
                            });
                        }
                        return null;
                    })}
                </div>
                <button className='Af-viewAll-btn' onClick={toggleAll}>
                    {isHide? "View All": "Hide"}
                    </button>
            </div>
        </div>
    )
}

