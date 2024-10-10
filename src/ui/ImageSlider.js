'use client'

import styles from '@/app/page.module.css'
import { useState } from 'react'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'

export default function Slider({ images }) {

    const [imageIndex, setImageIndex] = useState(0);
    const image = images[imageIndex];


    function nextImage() {
        if (imageIndex + 1 < images.length) {
            setImageIndex(imageIndex + 1);
        }
    }

    function lastImage() {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        }
    }


    return (
        <div className={styles.imageSlider}>

            <img
                src={`/portfolio-app${image.url}`}
                alt={image.text}
                key={image.url}
                className={styles.image}
            />

            {images.length > 1 && <div className={styles.iconContainer}>
                {imageIndex > 0 && <  ChevronDoubleLeftIcon className={styles.icon} onClick={lastImage} />}
                <span>Gallery</span>
                {imageIndex < images.length - 1 && <ChevronDoubleRightIcon className={styles.icon} onClick={nextImage} />}
            </div>}


        </div>
    )




}