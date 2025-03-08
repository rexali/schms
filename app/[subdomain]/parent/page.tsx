import ParentDashboard from "./dashboard/ParentDashboard";

export default async function AdminisitratorPage({ params }: { params: Promise<{ subdomain: string }> }) {
    const { subdomain } = await params;
    return <ParentDashboard
    subdomain={subdomain} 
    tabNames={[
        "Assignments", 
        "Attendance", 
        "Messages",
        "Events", 
        'Reports',
        'Lessons',
    ]} 
    />
}