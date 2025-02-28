import {useState, useEffect, useRef} from "react";
import {useQuery} from "@apollo/client";
import {GET_SLIDER_IMAGES} from "../api/schemas/query.ts";
import {ProductsImageCollectionProps} from "../libraries/utils/types.ts";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const SliderComponent = () => {
    const {data} = useQuery(GET_SLIDER_IMAGES);
    const itemCollection: ProductsImageCollectionProps = data?.products;
    const images = itemCollection?.items?.map(item => item.featuredAsset?.preview) || [];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (images.length > 0) {
            setCurrentIndex(0);
        }
    }, [images.length]);

    useEffect(() => {
        if (images.length === 0) return;
        const interval = setInterval(() => nextSlide(), 3000);
        return () => clearInterval(interval);
    }, [images.length, currentIndex]);

    const nextSlide = () => {
        if (!isAnimating && images.length > 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsAnimating(false);
            }, 500);
        }
    };

    const prevSlide = () => {
        if (!isAnimating && images.length > 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
                setIsAnimating(false);
            }, 500);
        }
    };

    // Touch Swipe Support
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) nextSlide();
        if (touchEndX.current - touchStartX.current > 50) prevSlide();
    };

    return (
        <div
            className="relative h-screen w-full overflow-hidden"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="flex h-screen w-full transition-transform duration-500 ease-in-out"
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="h-screen w-full object-cover flex-shrink-0"
                    />
                ))}
            </div>

            {/* Left Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                <ArrowLeftIcon/>
            </button>

            {/* Right Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                <ArrowRightIcon/>
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`h-2 w-2 rounded-full transition-all ${
                            index === currentIndex ? "bg-white scale-125" : "bg-gray-500"
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default SliderComponent;
