import * as React from "react";
import { SVGProps, memo } from "react";

const XTwitterIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.4" y="0.4" width="31.2" height="31.2" rx="15.6" fill="#FAD278" />
        <rect x="0.4" y="0.4" width="31.2" height="31.2" rx="15.6" stroke="#361566" strokeWidth="0.8" />
        <path d="M20.6008 8.80078H23.0544L17.6944 14.9008L24 23.2008H19.0624L15.196 18.1664L10.7712 23.2008H8.3152L14.0488 16.6768L8 8.80078H13.0624L16.5584 13.4024L20.6008 8.80078ZM19.74 21.7384H21.1L12.3232 10.1864H10.864L19.74 21.7384Z" fill="#361566" />
    </svg>

);

export default memo(XTwitterIcon);
