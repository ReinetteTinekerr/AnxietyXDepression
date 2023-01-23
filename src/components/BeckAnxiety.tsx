import { useState } from "react";

let baiQuestions = [
    "1. Numbness or tingling",
    "2. Feeling hot",
    "3. Wobbliness in legs",
    "4. Unable to relax",
    "5. Fear of worst happening",
    "6. Dizzy or lightheaded",
    "7. Heart pounding/racing",
    "8. Unsteady",
    "9. Terrified or afraid",
    "10. Nervous",
    "11. Feeling of choking",
    "12. Hands trembling",
    "13. Shaky/unsteady",
    "14. Fear of losing control",
    "15. Difficulty in breathing",
    "16. Fear of dying",
    "17. Scared",
    "18. Indigestion",
    "19. Faint/lightheaded",
    "20. Face flushed",
    "21. Hot/cold sweats",
];

export default function BeckAnxiety({ bai, setBai }: { bai: any, setBai: any }) {
    const [selectedIndex, setSelectedIndex] = useState(Object.values(bai).length - 1);
    const [selectedQuestion, setSelectedQuestion] = useState(baiQuestions[selectedIndex]);
    const [percentBar, setPercentBar] = useState(selectedIndex);
    // const [bai, setBai] = useState({ total: 0 });

    const id = localStorage.getItem("id");
    const handleClick = (e: any) => {
        if (Object.values(bai).length === 22) return;

        let indexIncrement = Math.min(selectedIndex + 1, baiQuestions.length - 1);
        setSelectedIndex(indexIncrement);
        setSelectedQuestion(baiQuestions[indexIncrement]);
        const score = parseInt(e.target.value);
        setBai((prev: any) => ({ ...prev, [selectedIndex]: parseInt(e.target.value), total: prev.total + score }));

        const percent = Math.ceil(((indexIncrement) / baiQuestions.length) * 100);
        setPercentBar(percent);

    }
    const scoreBG = (total: number) => {
        if (total <= 21) {
            return "bg-green-500";
        } else if (total <= 35) {
            return "bg-orange-500";
        } else {
            return "bg-red-500";
        }
    };

    const scoreDescription = (total: number) => {
        if (total <= 21) {
            return "Low Anxiety";
        } else if (total <= 35) {
            return "Moderate Anxiety";
        } else {
            return "High Anxiety";
        }
    };

    return <div className="m-4">
        <div className="flex justify-between">

            <h3 className="mb-4 text-xl font-bold leading-none text-gray-900 ">Beck Anxiety Inventory</h3>

            <div className="flex flex-row items-center mr-2">
                <h3 className="m-4 text-sm leading-none text-gray-900 ">{selectedIndex + 1} / {baiQuestions.length}</h3>
                <div className="flex flex-row">

                    <div className="border-2 rounded-full w-24 h-4 bg-slate-400">
                        <div className="rounded-full w-24 h-3 bg-emerald-500" style={{ "width": `${percentBar}%` }}></div>
                        <div className="text-center justify-center text-sm text-black" >{percentBar}%</div>
                    </div>
                </div>
            </div>
        </div>
        <main className="flex  items-center flex-col justify-center">
            {(Object.values(bai).length === 22 || id !== null) ? <><div className={`p-8 text-white font-extrabold text-2xl rounded-md ${scoreBG(bai.total)}`}>
                Your Score is: <span>{bai.total}</span>
                <br /><span>{scoreDescription(bai.total)}</span></div></> : <><div className="font-semibold text-lg mb-3">{selectedQuestion}</div>
                <div
                    className="grid  grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2"
                    x-data="app"
                >
                    <div>
                        <input type="radio" name="option" onClick={handleClick} value={"0"} id="1" className="peer hidden" />
                        <label htmlFor="1"
                            className="block cursor-pointer select-none rounded-xl p-2 text-center hover:bg-blue-500 hover:text-white peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >Not at All</label >
                    </div>

                    <div>
                        <input type="radio" name="option" onClick={handleClick} value={"1"} id="2" className="peer hidden" />
                        <label htmlFor="2"
                            className="block cursor-pointer select-none rounded-xl p-2 text-center hover:bg-yellow-500 hover:text-white peer-checked:bg-yellow-500 peer-checked:font-bold peer-checked:text-white"
                        >Mild</label >
                    </div>

                    <div>
                        <input type="radio" name="option" onClick={handleClick} value={"2"} id="3" className="peer hidden" />
                        <label htmlFor="3"
                            className="block cursor-pointer select-none rounded-xl p-2 text-center hover:bg-orange-500 hover:text-white peer-checked:bg-orange-500 peer-checked:font-bold peer-checked:text-white"
                        >Moderately</label >
                    </div>

                    <div>
                        <input type="radio" name="option" onClick={handleClick} value={"3"} id="4" className="peer hidden" />
                        <label htmlFor="4"
                            className="block cursor-pointer select-none rounded-xl p-2 text-center hover:bg-red-500 hover:text-white peer-checked:bg-red-500 peer-checked:font-bold peer-checked:text-white"
                        >Severely</label >
                    </div>
                </div>
            </>}
        </main>
        {/* <div className="flex justify-center">
            <button className="m-2 mx-4 mt-4 rounded-lg hover:bg-slate-400 p-2">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" /></svg>
            </button>
            <button className="m-2 mx-4 mt-4 p-2 rounded-lg hover:bg-slate-400">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
            </button>
        </div> */}
    </div>
}