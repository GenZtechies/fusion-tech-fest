import * as React from "react";
import { SVGProps, memo } from "react";

const MenuHamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width={24} height={24} rx={12} fill="#361566" />
        <path
            d="M6.542 7.219a.531.531 0 0 0 0 1.062h9.916a.531.531 0 0 0 0-1.062H6.542ZM6.542 11.469a.531.531 0 1 0 0 1.062h4.25a.531.531 0 0 0 0-1.062h-4.25ZM6.542 15.719a.531.531 0 1 0 0 1.062h2.125a.531.531 0 0 0 0-1.062H6.542Z"
            fill="#FAD278"
        />
    </svg>
);

export default memo(MenuHamburgerIcon);
