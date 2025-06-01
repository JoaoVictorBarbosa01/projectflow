import usePageTitle from "../hooks/usePageTitle";

export default function Dashboard() {
  usePageTitle("Dashboard - ProjectFlow");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Bem-vindo ao ProjectFlow 👋</h1>
    </div>
  );
}

