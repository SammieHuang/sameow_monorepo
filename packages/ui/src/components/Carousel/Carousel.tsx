import {useState, useMemo} from 'react'
import './Carousel.css'
import { type ImageUrls } from '@/types'
import {ChevronLeft, ChevronRight} from 'lucide-react'


type CarouselProps = {
    imageUrls: ImageUrls[]
}

export const Carousel = ({ imageUrls }: CarouselProps) => {
    const [positionIndex, setPositionIndex] = useState<number>(1);
    const [onTransition, setOnTransition] = useState<boolean>(true);
    const slideCounts = imageUrls.length 
    const images = useMemo(
        () => [imageUrls[slideCounts - 1], ...imageUrls, imageUrls[0]]
        , [imageUrls]);
    
    if (slideCounts === 0) return null;

    const showPrevImage = () => {
        setOnTransition(true);
        setPositionIndex(prev=>prev - 1)
    }
    const showNextImage = () => {
        setOnTransition(true);
        setPositionIndex(prev=>prev + 1)
    }
    const handleTransition = () => {
        if (positionIndex === 0) {
            setOnTransition(false);
            setPositionIndex(slideCounts)
        }
        else if (positionIndex === slideCounts + 1) {
            setOnTransition(false);
            setPositionIndex(1)
        }
    }   
    return (
        <>
            <div className='carousel-container'>
                <ChevronLeft
                    className='arrow arrow-left'   
                    aria-label='Previous Image'
                    onClick={showPrevImage}
                />
                <div
                    className='carousel-image-container'
                    style={{
                        transform: `translateX(-${positionIndex * 100}%)`,
                        transition: onTransition ? 'transform 0.5s ease-in-out' : 'none'
                    }}
                    onTransitionEnd={handleTransition}
                >
                    {images.map(({ src, alt}, index) => (
                        <img
                            className='carousel-image'
                            key={`${src}-${index}`}
                            src={src}
                            alt={alt}
                        />
                    ))}
                </div>
                <ChevronRight
                    className='arrow arrow-right'
                    aria-label='Next Image'
                    onClick={showNextImage}
                />
                <div className='carousel-navigation'>
                    {imageUrls.map(({src}, index) => (
                        <button
                            key={`${src}-${index}`}
                            className={positionIndex === index + 1 ? 'carousel-indicator carousel-indicator-active' : 'carousel-indicator'}
                            onClick={()=>setPositionIndex(index + 1)}
                        >
                        </button>
                    ))}

                </div>
            </div>        
        </>


    )
}