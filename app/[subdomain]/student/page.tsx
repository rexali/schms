import StudentDashboard from "./dashboard/StudentDashboard";

export default async function TeacherPage({ params }: { params: Promise<{ subdomain: string }> }) {
    const { subdomain } = await params;
    return <StudentDashboard subdomain={subdomain} tabNames={[
        'Profile',
        'Attendance',
        'Lessons',
        'Activities',
        'Assignments',
        'assessments',
        'exams',
        'Reports',
    ]} />
}