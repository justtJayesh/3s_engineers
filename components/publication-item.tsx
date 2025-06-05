import { FileText, FileIcon as FilePresentation } from "lucide-react";

interface PublicationItemProps {
    title: string;
    date: string;
    icon: "document" | "presentation";
}

export default function PublicationItem({
    title,
    date,
    icon,
}: PublicationItemProps) {
    return (
        <div className="flex items-center space-x-3 border-b border-neutral-200 pb-3">
            <div className="flex-shrink-0">
                {icon === "document" ? (
                    <FileText className="h-5 w-5 text-neutral-400" />
                ) : (
                    <FilePresentation className="h-5 w-5 text-neutral-400" />
                )}
            </div>
            <div className="flex-1">
                <div className="text-neutral-700 text-sm">{title}</div>
                {date && <div className="text-neutral-500 text-xs">{date}</div>}
            </div>
        </div>
    );
}
