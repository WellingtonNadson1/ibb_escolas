import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total de Escolas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">10</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total de Turmas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">25</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total de Aulas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">100</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Presenças Registradas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">500</p>
        </CardContent>
      </Card>
    </div>
  )
}

