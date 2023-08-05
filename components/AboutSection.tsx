import styles from "@/app/styles";
import Image from "next/image";
import DrAlaaImage from "@/assets/dr-alaa.png";
const AboutSection = () => {
    return (
        <div
            className={`bg-gradient-to-r from-green-600 to-blue-500 rounded-[30px] ${styles.boxWidth} px-12 md:px-24 pb-12 md:pb-0 my-32 flex flex-col md:flex-row justify-between gap-20`}>
            <Image
                className="mt-12"
                src={DrAlaaImage}
                alt="dr-alaa"
                width={563}
                height={812}
            />
            <div className="flex flex-col gap-6 justify-center items-start">
                <h2 className=" text-right text-white text-[40px] font-bold">
                    تعرف على د/ علاء شادي
                </h2>
                <p className="text-right text-white text-xl font-normal">
                    لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية
                    هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور
                    النشر. كان لوريم إيبسوم.
                </p>
                <a href="#" className={`${styles.ctaBtn}`}>
                    اكتشف المزيد
                </a>
            </div>
        </div>
    );
};

export default AboutSection;
