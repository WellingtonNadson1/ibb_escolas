import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AulasPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Aulas</h1>
      <Button className="mb-4">Cadastrar Nova Aula</Button>
      <Card>
        <CardHeader>
          <CardTitle>Lista de Aulas</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Aqui você pode adicionar uma tabela ou lista de aulas */}
          <p>Lista de aulas cadastradas...</p>
        </CardContent>
      </Card>
    </div>
  )
}

