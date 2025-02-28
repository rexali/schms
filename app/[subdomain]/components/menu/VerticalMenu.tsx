'use client';
import { useMediaQuery } from "react-responsive";
import './VerticalMenu.css';

export default function VerticalMenu(props: any) {
    const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });

    return !isMobile && (
        <div className="vertical-menu">
            <a href="#" className="active p-5 text-center">Dashboard</a>
            {
                props.tabNames.map((tabName: string, index: number) => {
                    return <a key={index} data-toggle="tab" onClick={() => props.openTab(tabName.toLowerCase())}>{tabName.toUpperCase()}</a>
                })
            }
        </div>
    )
}