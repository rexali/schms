import AdministratorDashboard from "./dashboard/AdministratorDashboard";

export default async function AdminisitratorPage({ params }: { params: Promise<{ subdomain: string }> }) {
    const { subdomain } = await params;
    return <AdministratorDashboard 
    subdomain={subdomain} 
    tabNames={[
        'Profile',
        "Students", 
        "Staff",
        'applicants',
        "Classes", 
        "Schedules", 
        'Attendance',
        'Lessons',
        'Questions', 
        'Reports',
        'events',
        'messages',
        'pta'
    ]} 
    />
}