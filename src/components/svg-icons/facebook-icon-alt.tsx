import * as React from "react";
import { SVGProps, memo } from "react";

const FacebookIconAlt = (props: SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.4" y="0.4" width="31.2" height="31.2" rx="15.6" fill="#F4B0E9" />
        <rect x="0.4" y="0.4" width="31.2" height="31.2" rx="15.6" stroke="#361566" strokeWidth="0.8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18.98 24V17.804H21.06L21.3712 15.3896H18.9792V13.848C18.9792 13.1488 19.1736 12.672 20.1768 12.672H21.4552V10.512C20.8361 10.4461 20.2138 10.4141 19.5912 10.416C17.748 10.416 16.4864 11.5416 16.4864 13.608V15.3896H14.4V17.804H16.4856V24H8.8832C8.3952 24 8 23.6048 8 23.1168V8.8832C8 8.3952 8.3952 8 8.8832 8H23.1168C23.6048 8 24 8.3952 24 8.8832V23.1168C24 23.6048 23.6048 24 23.1168 24H18.98Z" fill="#361566" />
    </svg>

);

export default memo(FacebookIconAlt);
