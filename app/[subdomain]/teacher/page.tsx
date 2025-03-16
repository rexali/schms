import TeacherDashboard from "./dashboard/TeacherDashboard";
export default async function TeacherPage({ params }: { params: Promise<{ subdomain: string }> }) {
    const { subdomain } = await params;
    
    return <TeacherDashboard subdomain={subdomain} tabNames={['Attendance',"Classes",'Lessons','Questions','Reports','Messages']} />
}