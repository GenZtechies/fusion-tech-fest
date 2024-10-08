import * as React from "react";
import { SVGProps, memo } from "react";

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 4.133c-1.041.123-1.805.362-2.439.822A5 5 0 0 0 3.955 6.06C3 7.375 3 9.251 3 13c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22c.839 0 1.584 0 2.25-.01v-.07c0-.853 0-1.372.07-1.82a5.75 5.75 0 0 1 4.78-4.78c.448-.07.967-.07 1.82-.07h.07c.01-.666.01-1.41.01-2.25 0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106c-.634-.46-1.398-.699-2.439-.822V5a1.5 1.5 0 0 1-3 0v-.997C13.036 4 12.537 4 12 4s-1.036 0-1.5.003V5a1.5 1.5 0 1 1-3 0v-.867ZM7 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
        />
        <path
            d="M20.935 16.75c-.91 0-1.291.003-1.6.052a4.25 4.25 0 0 0-3.533 3.533c-.048.308-.052.69-.052 1.6 1.44-.095 2.412-.326 3.189-.89a5 5 0 0 0 1.106-1.106c.564-.777.795-1.75.89-3.189ZM9.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V2ZM15.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V2Z"
            fill="currentColor"
        />
    </svg>
);

export default memo(CalendarIcon);
