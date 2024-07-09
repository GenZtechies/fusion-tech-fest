import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
    return (
        <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={104} height={45} />
        </Link>
    );
}

export default Logo;
