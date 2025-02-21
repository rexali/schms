import StudentDashboard from "./dashboard/dashboard";

export default async function TeacherPage({ params }: { params: Promise<{ subdomain: string }> }) {
    const { subdomain } = await params;
    return <StudentDashboard subdomain={subdomain} />
}