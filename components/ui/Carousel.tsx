'use client'
import React, { useState } from 'react'
import {  EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image, {StaticImageData} from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import clsx from "clsx";

type PropType = {
    cards: { image: StaticImageData, label: string }[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { cards, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <section className="max-w-full mx-auto">
            <div className="" ref={emblaRef}>
                <div className="flex -ml-4 touch-pan-y">
                    {cards.map((card, index) => (
                        <div
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            className="xl:flex-[0_0_10%]  sm:flex-[0_0_20%]  md:flex-[0_0_25%] lg:flex-[0_0_25%] flex-[0_0_30%]  min-w-0 pl-4"
                            key={index}
                        >
                            <div className="h-full  flex flex-col items-center  justify-center font-semibold select-none ">
                                <div className="relative  w-full aspect-[3/4]   mb-4">
                                    <Image
                                        src={card.image}
                                        alt={card.label}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-xl  shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all duration-500 ease-in-out"
                                    />
                                    <div
                                        className={clsx(
                                            hoverIndex === index ? 'absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent rounded-xl' : ''
                                        )}
                                    />
                                </div>
                                <AnimatePresence>
                                    {hoverIndex === index && (
                                        <motion.div
                                            initial={{opacity: 0, y: 1}}
                                            animate={{opacity: 1, y: 0}}
                                            exit={{opacity: 0, y: 10}}
                                            transition={{duration: 0.2, delay: 0.1}}
                                            className="absolute mt-5 text-center font-bold text-white font-sans tracking-tight"
                                        >
                                            {card.label.toUpperCase()}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel












/*
*   // const {
    //     prevBtnDisabled,
    //     nextBtnDisabled,
    //     onPrevButtonClick,
    //     onNextButtonClick
    // } = usePrevNextButtons(emblaApi)
    *
    *
    *
    *
    * */






{/*<div className="flex min-h-screen flex-col items-center mt-7 justify-between">*/}
{/*    <div className="grid grid-cols-2 gap-2 items-center">*/}
{/*        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>*/}
{/*        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>*/}
{/*    </div>*/}
{/*</div>*/}