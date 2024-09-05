'use client'
import React, { useState } from 'react'
import {  EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image, {StaticImageData} from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import clsx from "clsx";
import MovieCard from './movie-card';

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
                        <MovieCard
                            size='default'
                            key={index}
                            label={card.label}
                            image={card.image}
                            className="iphone5:flex-[0_0_45%] slighty-large-phone:flex-[0_0_35%] large-phone:flex-[0_0_33%] tablet:flex-[0_0_28%] extra-large-tablet:flex-[0_0_25%] laptop:flex-[0_0_15%] min-w-0 pl-4"
                        />
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