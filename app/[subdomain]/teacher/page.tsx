import TeacherDashboard from "./dashboard/dashboard";

export default async function TeacherPage({ params }: { params: Promise<{ subdomain: string }> }) {
    const { subdomain } = await params;
    return <TeacherDashboard subdomain={subdomain} />
}