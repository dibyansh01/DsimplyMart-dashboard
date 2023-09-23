"use client";
import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-model";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=> {                                           //here this useEffect is used to avoid the hydration error.
        setIsMounted(true);
    }, []);

    if (!isMounted){                     //in case of ssr it will return null
        return null;
    }

    return (
        <>
        <StoreModal />
        </>
    )
}