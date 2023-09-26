"use client"
import { useParams } from "next/navigation";

import { userOrigin } from "@/hooks/use-origin";
import { ApiAlert } from "@/components/ui/api-alert";

interface ApiListProps {
    entityName: string;
    entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
    entityName,
    entityIdName
}) => {
    const params = useParams();
    const origin = userOrigin();

    const baseUrl = `${origin}/api/${params.storeId}`;
    return (
        <>
        <ApiAlert 
        title="GET" 
        variant="public" 
        description={`${baseUrl}/${entityName}`}
        />
        </>
    )
}