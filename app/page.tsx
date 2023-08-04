import styles from "./styles";

import {
    Hero,
    AboutDr,
    AboutUs,
    Services,
    Products,
    Contact,
    Footer,
} from "../components";
import RightLeaf from "./assets/rightLeaf";
import Image from "next/image";
import RightBigLeaf from "./assets/RightBigLeaf";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <div
                className={`${styles.boxWidth} flex flex-col md:flex-row justify-between items-center h-full mx-auto w-full gap-8 mt-24`}>
                <div>
                    <div className="flex gap-8 mb-8">
                        <img
                            className="w-[277px] h-[318px] rounded-[10px]"
                            src="https://via.placeholder.com/277x318"
                        />
                        <img
                            className="w-[308px] h-48 rounded-[10px]"
                            src="https://via.placeholder.com/308x192"
                        />
                    </div>
                    <div className="flex gap-8">
                        <img
                            className="w-[225px] h-[295px] rounded-[10px]"
                            src="https://via.placeholder.com/225x295"
                        />
                        <img
                            className="-mt-32 w-[360px] h-[421px]  rounded-[10px]"
                            src="https://via.placeholder.com/360x421"
                        />
                    </div>
                </div>
                <div className="h-full flex flex-col gap-4 justify-center items-start">
                    <div className="flex w-full justify-end mb-12">
                        <RightLeaf />
                    </div>
                    <div className="text-right">
                        <span className="text-black text-[36px] font-bold">
                            اهلا بيكم في
                        </span>
                        <span className="text-green-500 text-[36px] font-bold">
                            {" "}
                            مركز شادي للطب البديل
                        </span>
                    </div>
                    <div className="  text-right text-neutral-600 text-xl font-normal leading-9">
                        اهلا بيكم في مركز شادي اهلا بيكم في مركز شادي <br />
                        اهلا بيكم في مركز شادي اهلا بيكم في{" "}
                    </div>
                    <a href="#" className={`${styles.ctaBtn} mt-8`}>
                        تواصل معنا
                    </a>
                    <div className="flex w-full justify-start mt-20">
                        <RightBigLeaf />
                    </div>
                </div>
            </div>
        </>
    );
}
