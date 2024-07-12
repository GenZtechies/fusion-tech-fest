import * as React from "react";
import { SVGProps, memo } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="24" height="24" rx="12" fill="#361566" />
        <path d="M17.834 6.91734C18.0415 6.70987 18.0415 6.3735 17.834 6.16604C17.6265 5.95857 17.2902 5.95857 17.0827 6.16604L12.5 10.7487L7.91732 6.16604C7.70986 5.95857 7.37349 5.95857 7.16602 6.16604C6.95856 6.3735 6.95856 6.70987 7.16602 6.91734L11.7487 11.5L7.16604 16.0827C6.95857 16.2902 6.95857 16.6265 7.16604 16.834C7.37351 17.0415 7.70988 17.0415 7.91734 16.834L12.5 12.2513L17.0827 16.834C17.2902 17.0415 17.6265 17.0415 17.834 16.834C18.0415 16.6265 18.0415 16.2902 17.834 16.0827L13.2513 11.5L17.834 6.91734Z" fill="#FAD278" />
    </svg>

);

export default memo(CloseIcon);
