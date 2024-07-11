import * as React from "react";
import { SVGProps, memo } from "react";

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.4" y="0.4" width="31.2" height="31.2" rx="15.6" fill="#FAD278" />
        <rect x="0.4" y="0.4" width="31.2" height="31.2" rx="15.6" stroke="#361566" stroke-width="0.8" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.98 24.001V17.805H21.06L21.3712 15.3906H18.9792V13.849C18.9792 13.1498 19.1736 12.673 20.1768 12.673H21.4552V10.513C20.8361 10.4471 20.2138 10.415 19.5912 10.417C17.748 10.417 16.4864 11.5426 16.4864 13.609V15.3906H14.4V17.805H16.4856V24.001H8.8832C8.3952 24.001 8 23.6058 8 23.1178V8.88418C8 8.39618 8.3952 8.00098 8.8832 8.00098H23.1168C23.6048 8.00098 24 8.39618 24 8.88418V23.1178C24 23.6058 23.6048 24.001 23.1168 24.001H18.98Z" fill="#361566" />
    </svg>
);

export default memo(FacebookIcon);
