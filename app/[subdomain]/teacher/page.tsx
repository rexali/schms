import TeacherDashboard from "./dashboard/TeacherDashboard";
export default async function TeacherPage({ params }: { params: Promise<{ subdomain: string }> }) {
    const { subdomain } = await params;
    
    return <TeacherDashboard subdomain={subdomain} tabNames={['Attendance',"Workbook","Classes",'Lessons','Questions','Reports','Messages','Schedules']} />
}