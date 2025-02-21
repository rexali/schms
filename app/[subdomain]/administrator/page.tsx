import AdministratorDashboard from "./dashboard/dashboard";

export default async function AdminisitratorPage({ params }: { params: Promise<{ subdomain: string }> }) {
    const { subdomain } = await params;
    return <AdministratorDashboard subdomain={subdomain} />
}