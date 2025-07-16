import {Headings} from "@/components/headings";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <>
        <div className="flex w-full items-center justify-between">
            {/* headings */}
            <Headings title="Dashboard" description="Create and start your AI mock interview" />
            {/* actions */}
            <Link to={"/generate/create"} >
            <Button size={"sm"}>
                <Plus className="min-w-5 min-h-5 mr-1" />Add New
            </Button>
            </Link>
        </div>
        <Separator className="my-8"/>
        {/* Content Section */}
        </>
    )
}